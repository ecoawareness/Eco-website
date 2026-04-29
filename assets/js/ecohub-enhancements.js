(function () {
    const SUPABASE_URL = 'https://nqvhxjsryatqgfvtjbki.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdmh4anNyeWF0cWdmdnRqYmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNDYxMDAsImV4cCI6MjA4ODYyMjEwMH0.HrnrIq5bK3FhxmHaLxWPIG0nD-CI-3ReHCoO5RL1c3M';
    const STORE_KEYS = {
        eventQueue: 'ecohub_pending_event_submissions',
        profilePrefs: 'ecohub_profile_preferences',
        portfolio: 'ecohub_portfolio_snapshot'
    };

    function getSupabase() {
        if (!window.supabase) return null;
        if (!window.EcoHubSupabase) {
            window.EcoHubSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        }
        return window.EcoHubSupabase;
    }

    function readJson(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
        catch { return fallback; }
    }

    function writeJson(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
    }

    function notify(message) {
        if (typeof window.showDashToast === 'function') window.showDashToast(message);
        else if (typeof window._showToast === 'function') window._showToast(message);
    }

    function optimizeMedia() {
        document.querySelectorAll('img').forEach((img, index) => {
            if (index > 1 && !img.hasAttribute('loading')) img.loading = 'lazy';
            if (!img.hasAttribute('decoding')) img.decoding = 'async';
        });
        document.querySelectorAll('video').forEach(video => {
            if (!video.hasAttribute('preload')) video.preload = 'metadata';
            video.setAttribute('playsinline', '');
        });
    }

    function installSmoothPageTransition() {
        const overlay = document.getElementById('page-transition');
        const logo = document.getElementById('transition-logo');
        if (!overlay || !logo || overlay.dataset.ecohubSmooth === 'true') return;
        overlay.dataset.ecohubSmooth = 'true';

        const style = document.createElement('style');
        style.textContent = `
            #page-transition {
                opacity: 1 !important;
                visibility: visible;
                background:
                    radial-gradient(circle at 50% 46%, rgba(168,224,99,0.12), transparent 34%),
                    #0d3a22 !important;
                transition: opacity 480ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear 480ms !important;
            }
            #page-transition.ecohub-hidden {
                opacity: 0 !important;
                visibility: hidden;
            }
            #page-transition.ecohub-leaving {
                opacity: 1 !important;
                visibility: visible;
                transition: opacity 360ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s !important;
            }
            #transition-logo {
                width: clamp(68px, 8vw, 96px) !important;
                height: clamp(68px, 8vw, 96px) !important;
                object-fit: contain !important;
                transform: translateY(0) scale(1);
                opacity: 1;
                filter: drop-shadow(0 18px 32px rgba(0,0,0,0.22));
                transition:
                    transform 620ms cubic-bezier(0.22, 1, 0.36, 1),
                    opacity 360ms ease !important;
            }
            #page-transition.ecohub-ready #transition-logo {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            #page-transition.ecohub-leaving #transition-logo,
            #page-transition.leaving #transition-logo {
                transform: translateY(-2px) scale(1.08) !important;
                opacity: 1;
            }
            @media (prefers-reduced-motion: reduce) {
                #page-transition, #transition-logo { transition: none !important; }
            }
        `;
        document.head.appendChild(style);

        const hide = () => {
            overlay.classList.remove('leaving', 'ecohub-leaving');
            overlay.classList.add('ecohub-ready');
            requestAnimationFrame(() => overlay.classList.add('ecohub-hidden'));
        };

        if (logo.decode) logo.decode().catch(() => {}).finally(hide);
        else if (logo.complete) hide();
        else logo.addEventListener('load', hide, { once: true });
        setTimeout(hide, 900);

        document.addEventListener('click', event => {
            const link = event.target.closest('a');
            if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const url = link.getAttribute('href');
            const target = link.getAttribute('target');
            if (!url || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:') || target === '_blank') return;
            if (link.hostname && link.hostname !== window.location.hostname) return;

            event.preventDefault();
            event.stopImmediatePropagation();
            overlay.classList.remove('ecohub-hidden');
            overlay.classList.add('ecohub-ready', 'ecohub-leaving');
            setTimeout(() => { window.location.href = link.href; }, 320);
        }, true);

        window.addEventListener('pageshow', () => {
            overlay.classList.remove('leaving', 'ecohub-leaving');
            overlay.classList.add('ecohub-ready', 'ecohub-hidden');
        });
    }

    async function getSession() {
        const sb = getSupabase();
        if (!sb) return null;
        const { data } = await sb.auth.getSession();
        return data?.session || null;
    }

    async function upsertProfileSnapshot(extra) {
        const session = await getSession();
        if (!session?.user) return null;
        const meta = session.user.user_metadata || {};
        const snapshot = {
            id: session.user.id,
            email: session.user.email,
            full_name: extra?.full_name || meta.full_name || meta.name || session.user.email?.split('@')[0] || 'EcoHub Member',
            bio: extra?.bio || meta.bio || '',
            location: extra?.location || meta.location || 'Qatar',
            interests: extra?.interests || readJson(STORE_KEYS.profilePrefs, {}).interests || [],
            skills: extra?.skills || readJson(STORE_KEYS.profilePrefs, {}).skills || [],
            updated_at: new Date().toISOString()
        };
        writeJson(STORE_KEYS.portfolio, snapshot);

        const sb = getSupabase();
        const { error } = await sb.from('eco_profiles').upsert(snapshot, { onConflict: 'id' });
        if (error) return snapshot;
        return snapshot;
    }

    async function submitEventToPlatform(eventData) {
        const session = await getSession();
        const payload = {
            title: eventData.name,
            organization: eventData.org,
            event_date: eventData.date || null,
            location: eventData.location || '',
            description: eventData.desc || '',
            expected_volunteers: eventData.volunteers ? Number(eventData.volunteers) : null,
            region: 'qatar',
            status: 'pending',
            submitted_by: session?.user?.id || null
        };

        const sb = getSupabase();
        if (sb) {
            const { error } = await sb.from('eco_opportunities').insert(payload);
            if (!error) return { synced: true };
        }

        const queued = readJson(STORE_KEYS.eventQueue, []);
        queued.unshift({ ...payload, queued_at: new Date().toISOString() });
        writeJson(STORE_KEYS.eventQueue, queued.slice(0, 50));
        return { synced: false };
    }

    async function syncEventSignup(evt) {
        const session = await getSession();
        if (!session?.user) return;
        const sb = getSupabase();
        if (!sb) return;
        await sb.from('eco_event_signups').upsert({
            user_id: session.user.id,
            opportunity_title: evt.title,
            organization: evt.org || '',
            event_date: evt.date || '',
            external_url: evt.url || '',
            status: evt.status || 'upcoming',
            source: evt.external ? 'external' : 'ecohub'
        }, { onConflict: 'user_id,opportunity_title' });
    }

    function wrapEventStorage() {
        if (typeof window.addMyEvent === 'function' && !window.addMyEvent.__enhanced) {
            const original = window.addMyEvent;
            window.addMyEvent = function (evt) {
                const added = original(evt);
                if (added) syncEventSignup(evt);
                return added;
            };
            window.addMyEvent.__enhanced = true;
        }

        ['applyInternal', 'applyOutside'].forEach(name => {
            if (typeof window[name] !== 'function' || window[name].__enhanced) return;
            const original = window[name];
            window[name] = function () {
                const result = original.apply(this, arguments);
                const evt = {
                    title: arguments[1],
                    org: arguments[2],
                    date: arguments[3],
                    url: name === 'applyOutside' ? arguments[4] : '',
                    external: name === 'applyOutside',
                    status: 'Upcoming'
                };
                syncEventSignup(evt);
                return result;
            };
            window[name].__enhanced = true;
        });
    }

    function enhancePostEvent() {
        if (typeof window.submitPostEvent !== 'function' || window.submitPostEvent.__enhanced) return;
        window.submitPostEvent = async function () {
            const eventData = {
                name: document.getElementById('pe-name')?.value.trim(),
                org: document.getElementById('pe-org')?.value.trim(),
                date: document.getElementById('pe-date')?.value,
                location: document.getElementById('pe-location')?.value.trim(),
                desc: document.getElementById('pe-desc')?.value.trim(),
                volunteers: document.getElementById('pe-volunteers')?.value.trim()
            };
            if (!eventData.name || !eventData.org || !eventData.date) {
                notify('Please fill in the required fields');
                return;
            }
            const result = await submitEventToPlatform(eventData);
            if (typeof window.closeGenericModal === 'function') window.closeGenericModal('post-event-modal');
            notify(result.synced ? 'Event submitted for review!' : 'Event saved locally. It will sync when the database is ready.');
        };
        window.submitPostEvent.__enhanced = true;
    }

    function enhanceProfileSave() {
        if (typeof window.saveProfile !== 'function' || window.saveProfile.__enhanced) return;
        const original = window.saveProfile;
        window.saveProfile = async function () {
            await original();
            await upsertProfileSnapshot({
                full_name: document.getElementById('p-name')?.textContent || '',
                bio: document.getElementById('p-bio')?.textContent || '',
                location: document.getElementById('p-location')?.querySelector('span')?.textContent || ''
            });
        };
        window.saveProfile.__enhanced = true;
    }

    function enhanceEcoIdSharing() {
        if (typeof window.shareEcoId !== 'function' || window.shareEcoId.__enhanced) return;
        window.shareEcoId = async function () {
            const snapshot = await upsertProfileSnapshot();
            const memberId = document.getElementById('ecoid-member-id')?.textContent || 'ECO-ID';
            const name = document.getElementById('ecoid-name')?.textContent || snapshot?.full_name || 'EcoHub Member';
            const url = new URL('portfolio.html', window.location.href);
            if (snapshot?.id) url.searchParams.set('uid', snapshot.id);
            const text = `I'm ${name}, an EcoHub member. My ID: ${memberId}`;
            if (navigator.share) {
                navigator.share({ title: 'EcoHub Climate Portfolio', text, url: url.href }).catch(() => {});
            } else {
                navigator.clipboard.writeText(`${text}\n${url.href}`).then(() => notify('Portfolio link copied!'));
            }
        };
        window.shareEcoId.__enhanced = true;
    }

    async function bootEnhancements() {
        optimizeMedia();
        installSmoothPageTransition();
        wrapEventStorage();
        enhancePostEvent();
        enhanceProfileSave();
        enhanceEcoIdSharing();
        await upsertProfileSnapshot();
    }

    document.addEventListener('DOMContentLoaded', () => {
        bootEnhancements();
        setTimeout(bootEnhancements, 1200);
    });

    window.EcoHubEnhancements = {
        getSupabase,
        submitEventToPlatform,
        syncEventSignup,
        upsertProfileSnapshot
    };
})();
