/* EcoAwareness — shared site enhancements
 * 1. Mobile nav drawer (hamburger + close button + backdrop)
 * 2. Smoother page-transition logo animation
 * Inject into any page that already has <nav> with .nav-links
 * and (optionally) #page-transition + #transition-logo.
 */
(function () {
    // ── 1. INJECT STYLES ────────────────────────────────────────
    const css = `
    /* ── Smoother logo transition ── */
    #page-transition {
        transition: opacity 520ms cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    #transition-logo {
        transition: transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1),
                    opacity 500ms ease !important;
        animation: ea-logo-breath 2.4s ease-in-out infinite;
    }
    @keyframes ea-logo-breath {
        0%, 100% { transform: scale(1); opacity: 1; }
        50%      { transform: scale(1.06); opacity: 0.92; }
    }

    /* ── Hamburger button — only visible on mobile ── */
    .ea-burger {
        display: none;
        background: transparent;
        border: 0;
        padding: 0.5rem;
        cursor: pointer;
        color: var(--ink, #0f1f17);
        z-index: 950;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.2s ease;
    }
    .ea-burger:hover { background: rgba(0,0,0,0.06); }
    .ea-burger iconify-icon { font-size: 1.6rem; display: block; }

    /* ── Mobile drawer + backdrop ── */
    .ea-nav-backdrop {
        position: fixed; inset: 0; background: rgba(0,0,0,0.42);
        opacity: 0; pointer-events: none;
        transition: opacity 320ms ease;
        z-index: 990;
    }
    .ea-nav-backdrop.open { opacity: 1; pointer-events: auto; }

    @media (max-width: 768px) {
        .ea-burger { display: inline-flex; }

        /* Slide-out drawer overrides .nav-links on mobile */
        .nav-links {
            position: fixed !important;
            top: 0; right: 0; bottom: 0;
            width: 78%; max-width: 320px;
            background: var(--paper, #f5f0e8);
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            justify-content: flex-start !important;
            padding: 4.5rem 1.75rem 2rem !important;
            gap: 0.4rem !important;
            box-shadow: -12px 0 40px rgba(0,0,0,0.12);
            transform: translateX(100%);
            transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
            z-index: 1000;
            overflow-y: auto;
        }
        body.ar .nav-links {
            right: auto !important; left: 0;
            transform: translateX(-100%);
            box-shadow: 12px 0 40px rgba(0,0,0,0.12);
        }
        .nav-links.open { transform: translateX(0) !important; }

        .nav-links a {
            font-size: 1.05rem !important;
            opacity: 1 !important;
            padding: 0.85rem 1rem !important;
            border-radius: 10px;
            transition: background 0.2s ease;
        }
        .nav-links a:hover { background: rgba(0,0,0,0.04); }
        .nav-links .nav-cta {
            margin-top: 0.6rem;
            text-align: center;
        }

        /* Close button at top-right of drawer */
        .ea-nav-close {
            position: absolute;
            top: 1rem; right: 1rem;
            background: transparent; border: 0;
            width: 38px; height: 38px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            color: var(--ink, #0f1f17);
            cursor: pointer;
            transition: background 0.2s ease;
        }
        body.ar .ea-nav-close { right: auto; left: 1rem; }
        .ea-nav-close:hover { background: rgba(0,0,0,0.07); }
        .ea-nav-close iconify-icon { font-size: 1.4rem; }

        /* Lock body scroll when drawer is open */
        body.ea-nav-locked { overflow: hidden; }
    }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // ── 2. INJECT MOBILE NAV — only if a nav-links exists ──────
    function setup() {
        const nav = document.querySelector('nav');
        const links = document.querySelector('.nav-links');
        if (!nav || !links) return;

        // Hamburger button
        const burger = document.createElement('button');
        burger.className = 'ea-burger';
        burger.setAttribute('aria-label', 'Open menu');
        burger.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>';
        nav.appendChild(burger);

        // Close button inside the drawer
        const close = document.createElement('button');
        close.className = 'ea-nav-close';
        close.setAttribute('aria-label', 'Close menu');
        close.innerHTML = '<iconify-icon icon="solar:close-circle-linear"></iconify-icon>';
        links.prepend(close);

        // Backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'ea-nav-backdrop';
        document.body.appendChild(backdrop);

        const open = () => {
            links.classList.add('open');
            backdrop.classList.add('open');
            document.body.classList.add('ea-nav-locked');
        };
        const closeMenu = () => {
            links.classList.remove('open');
            backdrop.classList.remove('open');
            document.body.classList.remove('ea-nav-locked');
        };

        burger.addEventListener('click', open);
        close.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);
        // Close on link click so nav links work as expected
        links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
        // Close on Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeMenu();
        });
        // Close if window resized past mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) closeMenu();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
})();
