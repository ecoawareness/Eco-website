/* ════════════════════════════════════════════════════════════════
   EcoAwareness — shared behaviours
   nav scroll state · mobile nav · scroll reveal · FAQ ·
   countdown timers · count-up numbers
   ════════════════════════════════════════════════════════════════ */

// ── Nav scroll state ───────────────────────────
(function () {
    const nav = document.querySelector('nav.eco-nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
})();

// ── Mobile nav ─────────────────────────────────
(function () {
    const toggle   = document.getElementById('nav-toggle');
    const links    = document.getElementById('nav-links');
    const backdrop = document.getElementById('nav-backdrop');
    if (!toggle || !links) return;

    function openNav() {
        toggle.classList.add('active');
        links.classList.add('open');
        if (backdrop) backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function closeNav() {
        toggle.classList.remove('active');
        links.classList.remove('open');
        if (backdrop) backdrop.classList.remove('show');
        document.body.style.overflow = '';
    }
    toggle.addEventListener('click', () => links.classList.contains('open') ? closeNav() : openNav());
    if (backdrop) backdrop.addEventListener('click', closeNav);
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
})();

// ── Scroll reveal ──────────────────────────────
(function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Anything above the fold reveals immediately on load
    document.querySelectorAll('[data-reveal-now] .reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120 + 150);
    });
})();

// ── FAQ toggle ─────────────────────────────────
window.toggleFaq = function (btn) {
    const item = btn.closest('.faq-item');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
};

// ── Countdown ──────────────────────────────────
// <element data-countdown="2026-09-01T09:00:00+03:00">
//   needs children: [data-cd="d"] [data-cd="h"] [data-cd="m"] [data-cd="s"]
(function () {
    const els = document.querySelectorAll('[data-countdown]');
    if (!els.length) return;
    const pad = n => String(n).padStart(2, '0');
    function tick() {
        const now = Date.now();
        els.forEach(el => {
            const target = new Date(el.getAttribute('data-countdown')).getTime();
            let diff = Math.max(0, target - now);
            const d = Math.floor(diff / 86400000);
            const h = Math.floor(diff % 86400000 / 3600000);
            const m = Math.floor(diff % 3600000 / 60000);
            const s = Math.floor(diff % 60000 / 1000);
            const set = (k, v) => {
                const slot = el.querySelector('[data-cd="' + k + '"]');
                if (slot && slot.textContent !== v) slot.textContent = v;
            };
            set('d', pad(d)); set('h', pad(h)); set('m', pad(m)); set('s', pad(s));
        });
    }
    tick();
    setInterval(tick, 1000);
})();

// ── Count-up numbers ───────────────────────────
// <span data-countup="7500" data-prefix="QAR " data-suffix="+">0</span>
(function () {
    const els = document.querySelectorAll('[data-countup]');
    if (!els.length) return;
    const fmt = new Intl.NumberFormat('en-US');
    function animate(el) {
        const target  = parseFloat(el.getAttribute('data-countup'));
        const prefix  = el.getAttribute('data-prefix') || '';
        const suffix  = el.getAttribute('data-suffix') || '';
        const dur     = 1400;
        const start   = performance.now();
        function frame(t) {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = prefix + fmt.format(Math.round(target * eased)) + suffix;
            if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
        });
    }, { threshold: 0.4 });
    els.forEach(el => obs.observe(el));
})();


// ════════════════════════════════════════════════
// Production extras: language toggle · Lenis ·
// page transition · anchor scroll · Supabase auth
// ════════════════════════════════════════════════

// ── LANGUAGE TOGGLE (data-en / data-ar) ────────
let isArabic = false;

function applyLanguage() {
    const body  = document.body;
    const html  = document.documentElement;
    const label = document.getElementById('lang-label');

    if (isArabic) {
        body.classList.add('ar');
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        if (label) label.textContent = 'English';
    } else {
        body.classList.remove('ar');
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        if (label) label.textContent = 'عربي';
    }

    document.querySelectorAll('[data-en]').forEach(el => {
        const val = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        if (val !== null) el.innerHTML = val;
    });

    // Watermarks swap script with language
    document.querySelectorAll('[data-watermark-en]').forEach(wm => {
        wm.textContent = isArabic
            ? wm.getAttribute('data-watermark-ar')
            : wm.getAttribute('data-watermark-en');
    });

    localStorage.setItem('hub_lang', isArabic ? 'ar' : 'en');
}

(function () {
    const toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
        isArabic = !isArabic;
        applyLanguage();
    });
    if (localStorage.getItem('hub_lang') === 'ar') { isArabic = true; applyLanguage(); }
})();

// ── LENIS SMOOTH SCROLL ────────────────────────
let lenis = null;
if (window.Lenis) {
    lenis = new Lenis({
        duration: 1.3,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
    });
    (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })(0);
}

// ── ANCHOR SCROLL ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.4 });
        else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });
});

// ── PAGE TRANSITION ────────────────────────────
(function () {
    function initTransition() {
    const overlay = document.getElementById('page-transition');
    const logo    = document.getElementById('transition-logo');
    if (!overlay || !logo) return;

    requestAnimationFrame(() => {
        overlay.style.opacity = '0';
        logo.style.transform  = 'scale(1)';
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            const url = this.getAttribute('href');
            const tgt = this.getAttribute('target');
            if (!url || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:') || tgt === '_blank' || (this.hostname && this.hostname !== window.location.hostname)) return;
            e.preventDefault();
            overlay.classList.add('leaving');
            overlay.style.opacity = '1';
            setTimeout(() => { window.location.href = url; }, 450);
        });
    });

    window.addEventListener('pageshow', e => {
        if (e.persisted) {
            overlay.classList.remove('leaving');
            overlay.style.opacity = '0';
            logo.style.transform  = 'scale(1)';
        }
    });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initTransition);
    else initTransition();
})();

// ── SUPABASE AUTH CHECK ────────────────────────
(async () => {
    try {
        if (!window.supabase) return;
        const _sb = window.supabase.createClient(
            'https://nqvhxjsryatqgfvtjbki.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdmh4anNyeWF0cWdmdnRqYmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNDYxMDAsImV4cCI6MjA4ODYyMjEwMH0.HrnrIq5bK3FhxmHaLxWPIG0nD-CI-3ReHCoO5RL1c3M'
        );
        const { data: { session } } = await _sb.auth.getSession();
        if (session) {
            const meta      = session.user.user_metadata || {};
            const firstName = meta.first_name || meta.name || session.user.email.split('@')[0];
            const signInEl = document.getElementById('nav-signin');
            if (signInEl) {
                signInEl.href = 'dashboard.html';
                signInEl.innerHTML = '<iconify-icon icon="solar:home-smile-linear" style="font-size:1rem"></iconify-icon> ' + firstName;
            }
            document.querySelectorAll('a[href="signup.html"]').forEach(a => { a.href = 'dashboard.html'; });
        }
    } catch (e) {
        console.warn('Auth check failed:', e.message);
    }
})();
