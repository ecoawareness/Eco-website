# EcoAwareness — ecoawarenessqa.org

Simple 3-page static site. No build step, no dependencies — just HTML and one CSS file.
Every push to `main` deploys automatically to Vercel via GitHub Actions.

## Files

| File | What it is |
|---|---|
| `index.html` | Home — hero, press & partners, what we do, current campaign |
| `about.html` | About — mission, how we work, story, team, recognition |
| `opportunities.html` | Join us + opportunities table for youth |
| `styles.css` | All styling. Brand tokens are at the top in `:root` |
| `script.js` | Mobile menu + scroll animations (no dependencies) |

## How to edit common things

- **Logos are live** — the EcoAwareness logo (`assets/img/logo-small.png`) is in the nav, footer, and favicon; Gulf Times, QNA, and Al-Sharq are in the press wall; Education Above All and Earthna are partner tiles. To add another press outlet, copy a `press-logo` div and point it at a new file in `assets/logos/` — the CSS makes every logo greyscale and uniform height (color returns on hover).
- **Elite Paper Recycling logo still needed** — replace the text inside `<span class="partner-logo">` in `index.html` with `<img src="assets/logos/elite-paper.png" alt="Elite Paper Recycling">` once you have the file.
- **Add photos** — every grey box is a `<figure class="ph ...">`; replace the `<svg>` + `<figcaption>` inside it with `<img src="assets/img/your-photo.jpg" alt="…">`. The box crops any photo to the right shape automatically.
- **Swap the current campaign** — in `index.html`, find the `CURRENT CAMPAIGN` comment and replace the image, title, text, and button link inside that section.
- **Set the Apply form** — in `opportunities.html`, replace both `https://forms.gle/REPLACE-WITH-YOUR-FORM-ID` links with your real Google Form URL.
- **Add an opportunity row** — in `opportunities.html`, copy the `<tr>` template from the comment above the table.
- **Fill placeholders** — anything in *[square brackets]* (story paragraphs, team names, recognition bullets) is waiting for real content.

## Publishing

Commit and push to `main` — the site goes live automatically within a couple of minutes.
