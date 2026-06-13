# EcoAwareness Design System

Design tokens, brand fundamentals, and UI kit recreations for **EcoAwareness** (also called *EcoHub* in some surfaces) — Qatar's youth-led climate action platform.

## What is EcoAwareness?

EcoAwareness is a non-profit, student-built platform headquartered in Doha (Education City). Its mission is to make climate action **accessible, verified, and rewarding** for every student in Qatar. Three product surfaces:

1. **Marketing site** — `index.html`, `about.html`, `faq.html`, `network.html`. Earthy editorial style, big serif italics, deep green hero.
2. **Auth flows** — `signin.html`, `signup.html`. Dark-green brand panel + curved white form panel split layout.
3. **Authenticated app** — `dashboard.html`, `opportunities.html`, `admin.html`, `portfolio.html`, `resources.html`. Filterable directory, Eco ID card, verified hours tracker.

Built bilingual (English / Arabic, RTL-aware) and powered by Supabase auth.

## Sources

- **GitHub repo:** https://github.com/ecoawareness/Eco-website (`main`)
- **Live site:** ecoawareness.me (per the `ecoawareness.me` repo name)
- **Stack observed:** Static HTML + Tailwind CDN + Iconify + Lenis (smooth scroll) + Supabase JS

## Index of this design system

| File | Purpose |
|---|---|
| `README.md` | You are here. Brand context + fundamentals |
| `SKILL.md` | Agent skill manifest — invoke via `ecoawareness-design` |
| `colors_and_type.css` | All design tokens (CSS vars) — colors, type, spacing, motion, radii, shadows |
| `assets/` | Logos, team photos, group photos. `assets/logos/` for partner logos (CMU-Q, Earthna, QKONs) |
| `preview/` | Cards rendered into the Design System tab |
| `ui_kits/web/` | UI kit for the marketing/app surfaces — `index.html` + JSX components |

## CONTENT FUNDAMENTALS

### Voice
- **Direct and earnest.** "Built by youth, for the planet." Not corporate.
- **Second-person ("you")** in calls to action — "Where Qatar's *climate generation* takes action." "Real action, *waiting for you.*"
- **First-person plural ("we")** for the team voice on About — "We saw this firsthand. As students ourselves..."
- **Local pride.** "Qatar's climate generation," "Built for Qatar," "Arabic-first when you need it."

### Tone & casing
- **Sentence case** for almost everything. Headlines, buttons, labels.
- **ALL CAPS only for eyebrows** — micro-labels above section titles, with letter-spacing of 0.15em (e.g. `THE PROBLEM`, `THE SOLUTION`, `LATEST OPPORTUNITIES`).
- **Italic serif accents** on the key noun in headlines, almost always coloured (lime on dark, green on paper). Examples: "Where Qatar's *climate generation* takes action." "One hub. *Every opportunity.*" "Built by students, *for students.*"
- Sentences end with periods. Em-dashes for rhythm — "One profile. Every opportunity. Verified hours. Real recognition."

### Vibe
- Editorial / magazine, not corporate SaaS. Hand-set serif headlines next to functional sans. Earthy paper background, not pure white.
- **Emoji** appears sparingly — a 🌱 in the footer ("Built by youth, for the planet. 🌱"), and unicode 📅 / 📍 in event meta rows. NOT used as primary icons. The Iconify *Solar* icon family does the heavy lifting.
- **Numerals** stay numeric: `2,500` members, `60+` partner orgs, `15k` volunteer hours. Not spelled out.

### Specific copy patterns
- **Big rotating italic** for hero: `<headline>` + `<em>` for the emphasised half. Always coloured.
- **Eyebrow → Big serif headline → Light sans subtitle → Pill CTA.** This is the section formula.
- **Stat strip** uses italic serif numerals in lime over dark green: `50+ ACTIVE INITIATIVES`.
- **CTA copy** is action-y and punchy: "Join the Network", "See how it works", "Get Started", "Email us", "Get in touch", "Unlock 24 climate opportunities".
- **Empty state / locked state** uses a friendly capsule with lime accents and a clear unlock path ("Join EcoAwareness to apply, save events, and track verified impact hours.").

## VISUAL FOUNDATIONS

### Color
A warm, earthy palette grounded in two greens and a parchment background. **Never** the SaaS-blue or aggressive purple gradients — every screen reads as natural / forest.

- **Backgrounds:** `--paper #f5f0e8` (warm off-white, primary canvas), `--green #1a5c38` (hero / CTA blocks), `--green-dark #0d3a22` (auth left panel), `--ink #0a0a0a` (Solution section), `--sand #e8dfc8` (partners strip, hover state).
- **Foreground accents:** `--lime #a8e063` for italic emphasis on dark surfaces and small dots in the logo. `--rust #c4622d` as a tertiary warm pop (eyebrow on Problem section, avatar tint).
- **Fixed pairings:** Lime always sits on green/ink. Green-as-italic-emphasis only on paper/white. Eyebrows on paper are rust; on green/ink they are lime.

### Type
- **Display: Instrument Serif** — used everywhere for headlines, including italic variant for the emphasised noun. Letter-spacing is *negative* (-0.02em) on large display.
- **Body: DM Sans** — light (300) for paragraphs, medium (500) for buttons/labels. Crisp, friendly.
- **Logo wordmark: Plus Jakarta Sans** at 800 weight, "Eco" bold + "Awareness" 600 at 0.78 opacity. Letter-spacing -0.025em.
- **Arabic: Noto Naskh Arabic** with full RTL support. Display headlines fall back to Naskh in Arabic mode (no italic — the lime color carries the emphasis instead).
- Eyebrow tracking is heavy (0.15em) and uppercase in Latin, normal-tracking and a touch larger in Arabic.

### Spacing & rhythm
- Section padding: `clamp(5rem, 10vw, 9rem)` vertical, `clamp(1.5rem, 6vw, 6rem)` horizontal.
- Max content width: 1200px on most pages, 1400px on About.
- Generous line-height (1.75 for body) gives the editorial feel.

### Backgrounds & textures
- **Grain overlay** — every page has a fixed-position 4% opacity SVG fractal noise overlay. Subtle, but fundamental to the warm feel.
- **Radial gradient washes** on green sections — a lime ellipse top-right and rust ellipse bottom-left at low opacity (~10–18%) gently warm the flat green.
- **Arabic-script watermark** in hero (`بيئة`, "environment") — extremely low contrast (3.5% white) at 18vw, anchored right side.
- **Hand-drawn / painted illustrations: none observed.** Real photography (DSC_*.jpg of mangroves, Education City, team members) is the visual anchor.
- **Repeating patterns:** a soft 52px grid of 4%-opacity white lines, masked behind a radial fade, on the dark auth panel only.
- **Gradients:** mostly used as protection (hero radials, scoop fades). Buttons can use a 3-stop green gradient (`#0f4c2e → #1a5c38 → #1d6d43`) for the highest-emphasis CTA only ("Unlock opportunities" gate button).
- **Imagery feel:** warm, golden-hour, real Qatari landscape (mangroves, desert, Education City buildings). Not overcooked filters. Photos use object-fit: cover and a soft bottom gradient (160deg, transparent → rgba(0,0,0,0.35)).

### Animation & motion
- **Easing:** `cubic-bezier(0.25, 1, 0.5, 1)` (ease-out-quart) is the workhorse. `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint / spring-ish) on key entrances.
- **Durations:** 200ms hover, 300ms small transitions, 600ms reveal, 550ms page transition.
- **Scroll reveal:** `.reveal` / `.reveal-left` / `.reveal-right` — IntersectionObserver triggered, fade-up 20px → 0 with 0.6s ease.
- **Page transition:** full-screen `--green-dark` overlay with a centered logo that scale-pulses (0.92 → 1 on enter, 1 → 1.08 on leave). Click any same-origin link → overlay fades in over 450ms → navigate.
- **Hover micro-interactions:** logo mark scales 1.04 on hover. Buttons translate Y -1px to -2px and gain a deeper shadow. Card hovers go `-translate-y-1`.
- **No bouncing, no big springy reveals.** Smooth, calm, editorial.

### Hover & press states
- **Pill buttons:** `--lime` primary becomes `#bef078` (lighter) and translates Y -1px. `--green` primary becomes `--green-light` and gains shadow. Ghost border gets `rgba(255,255,255,0.6)` border + #fff text.
- **Card hover:** `translateY(-1px to -4px)` + deeper shadow. Border accent shifts toward `--lime` on dark cards.
- **Press / active:** generally not customised — relies on browser default. The translate already gives visible response.
- **Link hover:** opacity 0.7 → 1.0; or border-bottom appears on inline links.

### Borders & lines
- **Hairlines:** `1px solid rgba(0,0,0,0.07)` everywhere on paper, `1px solid rgba(255,255,255,0.08)` on dark.
- **Card borders:** `1.5px solid rgba(0,0,0,0.08)` for the Problem grid (slightly heavier to define the cells).
- **Accent borders:** `rgba(168,224,99,0.28)` for the lime-on-dark eyebrow capsule.
- **Section dividers** are full-bleed hairlines with no decoration.

### Shadows & elevation
- **Card resting:** `0 18px 50px rgba(0,0,0,0.08)` — soft and broad, not tight.
- **CTA emphasis:** `0 18px 42px rgba(26,92,56,0.24), inset 0 1px 0 rgba(255,255,255,0.18)` — green-tinted shadow signals importance.
- **Focus ring:** `0 0 0 3px rgba(26,92,56,0.10)` on inputs.
- **Hero photo:** `0 24px 60px -20px rgba(10,10,10,0.25)` — deeper, more dramatic.

### Capsules vs gradients
- Almost everything that's clickable is a **pill** (`border-radius: 100px`). Buttons, chips, eyebrow tags, partner badges.
- Cards and panels use **18–24px radius**. Auth form panel uses **40px on left edge only** (a curved scoop into the dark side).
- Footer top edge has a **literal SVG curve** that scoops out of the green CTA above — a signature shape.
- Protection gradients (paper-to-paper alpha) appear on the gated opportunities section to fade preview cards into a centered CTA.

### Layout rules
- Fixed nav, transparent over hero, gains `paper/93%` background + backdrop-blur(14px) when scrolled.
- 12-column-ish grid, but mostly `grid-template-columns: 1fr 420px` or `1fr 1fr` for editorial splits.
- Above-fold hero is `min-height: 100dvh` with a stat strip docked at the bottom (`grid-template-rows: 1fr auto`).
- Mobile breakpoints at **860px** (nav collapses to slide-in drawer), **768px**, **560px**.

### Transparency & blur
- Sticky nav: `rgba(245,240,232,0.93)` + `backdrop-filter: blur(14px)`.
- Modal overlay: `rgba(0,0,0,0.6)` + `backdrop-filter: blur(4px)`.
- Caption pills on photos: `rgba(10,10,10,0.35)` + `backdrop-filter: blur(8px)`.
- Used selectively — never just for decoration.

### Imagery vibe
- **Warm.** Real Qatari light — golden hour, mangrove green-blue, sand-tan. Not graded cool/teal.
- **Real people, real places.** Team photos as portraits, group photos at events, location shots of Education City and Al Thakira mangroves.
- Photos almost always have a soft dark gradient overlay applied via `::after` so white text stays legible.

### Corner radii ladder
| Radius | Used for |
|---|---|
| 8–12px | inline tags, small chips |
| 14–18px | content cards |
| 20–24px | feature cards, photo frames |
| 32–40px | full panels, auth split edge |
| 100px | every button + every chip + every avatar dot |

### Cards summary
A card is: white-or-paper background, `1px solid rgba(0,0,0,0.07)` border, `18–20px` radius, `0 18px 50px rgba(0,0,0,0.08)` shadow on rest, hovers translateY(-2 to -4px). On dark surfaces, swap to `rgba(255,255,255,0.04)` background and `1px solid rgba(255,255,255,0.08)` border, hover border becomes `rgba(168,224,99,0.2)`.

## ICONOGRAPHY

EcoAwareness uses **two complementary icon systems** depending on surface:

1. **Iconify with the Solar (Linear & Bold) family** — primary icon set, loaded via `<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js">`. Used for nav arrows, social icons, lock keyhole, mail, globe, eye, check-circle, leaf, etc. Linear stroke (1.5px) by default; **Bold** variant for emphasized contexts (modal headlines, action buttons). Examples in the codebase:
   - `solar:arrow-right-linear` (CTAs)
   - `solar:lock-keyhole-linear` (gated content)
   - `solar:leaf-linear` / `solar:leaf-bold` (logo accent on some surfaces)
   - `solar:check-circle-bold` (verified states)
   - `solar:letter-linear` (email)
   - `solar:eye-linear` / `solar:eye-closed-linear` (password toggle)
   - `solar:add-circle-linear` (FAQ accordion — rotates 45° on open)
   - `solar:instagram-linear`, `solar:link-circle-linear` (social)
2. **Logo brands via `logos:`** — `logos:google-icon` for the Google OAuth button.
3. **mdi:instagram** — used on the network page modal action buttons (slightly bolder than Solar's variant).

**No bundled icon font, no SVG sprite.** Everything is fetched on demand from the Iconify CDN. Re-use this — don't draw new SVGs.

**Emoji as data-meta:** 📅 (date), 📍 (location), 💬 (FAQ contact callout), 🌱 (footer signoff), 🔍/🏢/📊 (Problem section card icons). These are accepted as informal markers on info-dense surfaces; do **not** use them as primary action affordances.

**Unicode chars:** the partner strip uses uppercase letterspaced text instead of logos for partners without imagery — `DEAP`, `AYCMQ`, `MECC`, etc. Real partner logos (Earthna, CMU-Q, QKONs) live in `assets/logos/`.

**Brand mark:** `assets/logos/ecoawareness-logo.png` (originally `assets/IMG.PNG`). On dark surfaces it's used full-color; on paper it's `filter: brightness(0) invert(1)` masked inside a green rounded square.

## CAVEATS / FONT SUBSTITUTIONS

All four fonts (Instrument Serif, DM Sans, Plus Jakarta Sans, Noto Naskh Arabic) are loaded directly from **Google Fonts** via `<link href="https://fonts.googleapis.com/css2?...">` — no licensed/proprietary fonts to substitute. The `colors_and_type.css` does the same import. ✅

If you intend to ship offline (e.g. PPTX), self-host the four families.
