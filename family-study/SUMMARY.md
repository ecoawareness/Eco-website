# عائلة الحصني — Family Education & Finance Study
### Discussion & decisions summary (handoff brief)

_Last updated: 2026-06-21 · Repo: `ecoawareness/Eco-website` · Branch: `claude/family-dashboard-html-szpsen`_

---

## 1. What this project is
A world-class study/plan for the **Hosny family (عائلة الحصني)** education costs and how to
fund them. It started as an HTML dashboard, became a multi-page Arabic PDF report, and is now
heading toward an **interactive local app** (filters, per-person charts) modeled on the user's
**"PDMS App"** (`D:\OneDrive\QP\PDMS App` — not accessible from the remote build environment).

Source data: the user's uploaded **`All_2023.pdf`** — a grade-by-year planning matrix
(2011→2047) for ~22 children, color-coded by family branch.

---

## 2. The family (confirmed)
Clan = **عائلة الحصني**, four branches by father. Parent birth years and "contribute until 60":

| Father | Born | Contributes until 60 |
|---|---|---|
| فيصل (Faisal — the user) | 1978 | 2038 |
| فراس (Feras) | 1980 | 2040 |
| محمد (Mohammad) | 1983 | 2043 |
| غياث (Ghiyath) | 1987 | 2047 |

**12 children** (birth years derived from the All_2023 matrix; 3 estimated then confirmed; قمر & عبد الله added):

- **أبناء فراس:** حنين 2007 · محمد 2008 · نور 2016 · عمر 2019 · قمر 2025
- **أبناء محمد:** أحمد 2008 · رغد 2010 · رنيم 2011 · تيم 2017 · شام 2021
- **ابن فيصل:** عبد العليم 2015
- **ابن غياث:** عبد الله 2025

In the All_2023 sheet the **branch = color code**: magenta = فراس's kids; the other colors are
the other branches. **عائلة البابا** (a separate group in the sheet) is **excluded**.

---

## 3. Cost rules (confirmed)
**Schooling:**
- Only **عبد العليم** pays school: **35,000 QR/year** (international school).
- All other kids: **school is free** (government / scholarship). فراس, محمد, غياث kids free;
  حنين on a **QU pharmacy scholarship** (university free in reality).

**University — three scenarios (by scholarship coverage):**
| Scenario | Scholarships | Payers | Pay rate |
|---|---|---|---|
| المثالي (Best) | 60% of kids free | 40% pay | 40–60k (≈50k) |
| المرجّح (Likely) | 40% of kids free | 60% pay | 40–60k (≈50k) |
| الأسوأ (Worst) | none (حنين only) | ~all pay | 60k |

**Likely — "distribute equally across the board" (latest decision):**
Instead of marking specific kids free, spread the expected cost over **every** kid:
**university = 60% × 50,000 = 30,000 QR/year per kid** (chosen: Option 3 = with inflation;
**inflation must be a user-controllable slider**, default 4%). A per-kid **scholarship toggle**
should exist so حنين (or others) can be set to free later.

University duration = **4 years** per kid; uni span ≈ [birth+18 … birth+21].

---

## 4. Family Education Fund (revolving) — confirmed concept
- The four fathers contribute monthly to fund university; **each contributes until age 60**.
- Each kid **repays what they took**, **interest-free**, in easy **monthly installments**,
  **starting 3 years after graduation** (updated from 1 year), over ~**10 years**; deferrable
  if unemployed. Repayments **recycle** to fund younger siblings.
- New funding rule: **each father pays for his own kid(s)**; **brothers may top up siblings**
  (cross-branch help is optional, not a flat equal pool).

**The app must let the user switch between 3 funding models** and recompute charts:
1. **Per-father + kids repay** (give-away = kid's repayment to his father/fund).
2. **Per-father, no repay** (give-away = father's outgoing payments only).
3. **Shared revolving fund** (all fathers pool; all kids draw & repay) — the model used in the
   current PDF, solved via a binary-search cash-flow simulation for the minimum monthly/parent.

Reference figures from the current PDF (shared fund, 3 scenarios, parents-till-60, repay+10y):
- Remaining education: Best ≈ 1.77M · Likely ≈ 2.49M · Worst ≈ 4.30M QR.
- Per-father monthly: Best ≈ 2,169 · Likely ≈ 2,858 · Worst ≈ 4,581 QR (×4 = family/month).
- Total monthly-by-all timeline: avg ≈ 18,409/mo, peak ≈ 27,613/mo (2036).

---

## 5. What's already built (in the repo)
- **`family-dashboard.html`** — interactive, **bilingual (EN/عربي + RTL)** dashboard: live
  grade timeline 2011–2047, KPIs, children by branch, editable cost model + scenarios + SVG
  charts, insights, 12-point playbook. (Uses an older generic per-stage cost model.)
- **`family-report-ar.html`** + **`family-report-ar.pdf`** — **7-page Arabic light-theme PDF**:
  1. Overview (KPIs, children by branch, assumptions)
  2. Grade timeline + cost/enrolment charts
  3. Forecast ledger + insights + playbook
  4. Scholarships + 3 scenario cards + per-student university cost
  5. Family Education Fund (parents-till-60, monthly plan, repayment terms)
  6. **(portrait)** Total monthly payments by person over time (avg line, value labels)
  7. Per-person small-multiples (fixed timeframe & scale)
- Rendering pipeline: Playwright Chromium → PDF, with screenshot verification. Named `@page`
  for mixed landscape/portrait. Arabic via Google Fonts (Cairo/Tajawal).

---

## 6. Latest requirements for the NEXT build (the interactive study)
- **Delivery:** interactive local app **"the same way as the PDMS app"** — self-contained,
  opens by double-clicking `index.html`, **with proper filters** to dive in.
- **Coverage:** every **family/branch** = a summary view; every **father** and every **kid** =
  a dedicated view with **monthly cost / give-away** charts **plus cumulative** values.
- **Fixed time scale** across all charts; **fixed money scale** so bar length = real magnitude
  (a 10,000 bar must NOT look like a 1,000,000 bar).
- **Recommended scale approach (mine):** *per-group fixed scales* — one shared scale for all
  father charts, another for all kid charts (fathers fund several kids, so their totals dwarf a
  single kid); plus a toggle for one global scale. To be confirmed/tuned later.
- **Focus:** Likely scenario; university distributed equally (30k/kid/yr); inflation slider.

---

## 7. Proposed app structure (draft plan — pending PDMS review)
```
family-study/
  index.html          # shell: header, filter bar, view container
  css/app.css         # light theme, RTL Arabic, print-friendly
  js/data.js          # FATHERS, CHILDREN, branch colors, uni spans
  js/model.js         # cost + repayment + 3 funding models; fixed-scale calculators
  js/charts.js        # SVG: costVsGiveaway, cumulativeLine, barTimeline, smallMultiples
  js/app.js           # state, filters, view router, render
  README.md
```
**Filters:** scope (Overview / Family / Father / Kid) + person picker · funding model (3) ·
inflation slider · university base · scale mode (per-group / global) · per-kid scholarship.
**Views:** Overview (KPIs, all-families table, total-by-all, small multiples) · Family ×4 ·
Father ×4 · Kid ×12 (monthly cost vs give-away + cumulative took vs repaid).
**Tech:** classic `<script>` files (run from `file://`), dependency-free inline-SVG charts,
reuse cost/sim logic from `family-report-ar.html`.

---

## 8. Open items / assumptions
- **PDMS app** (`D:\OneDrive\QP\PDMS App`) to be studied for layout/style — **needs to be shared**
  (zip upload / repo / paste); not reachable from the remote container.
- **Save location** `D:\OneDrive\Faisal\Family Study Plan` — cannot be written from remote;
  plan is to build in repo `family-study/` and have the user copy/clone it into that path.
- حنين billed 30k like all (Option 3) unless the scholarship toggle is turned on.
- Money-scale default = per-group fixed (recommendation), adjustable later.

---

## 9. Quick facts for reuse
- Currency: **QAR (ر.ق)** · Inflation default **4%** (controllable).
- University: **30,000/kid/yr**, 4 years · School: **عبد العليم 35,000/yr**, rest free.
- Repayment: interest-free, **start grad+3**, **~10 years**.
- Fixed study timeline: **2025 → 2060**.
- Branch colors: فيصل #b58900 · فراس #d6249f · محمد #e8590c · غياث #0d9488.
