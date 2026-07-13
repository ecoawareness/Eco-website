# EcoAwareness — ecoawarenessqa.org

Simple 3-page static site. No build step, no dependencies — just HTML and one CSS file.
Every push to `main` deploys automatically to Vercel via GitHub Actions.

## Files

| File | What it is |
|---|---|
| `index.html` | Home — hero, press & partners, what we do, current campaign |
| `about.html` | About — mission, how we work, story, team, recognition |
| `opportunities.html` | Join us + opportunities table for youth |
| `styles.css` | All styling. Brand colors are at the top in `:root` |

## How to edit common things

- **Swap the current campaign** — in `index.html`, find the `CURRENT CAMPAIGN` comment and replace the title, text, and button link inside that section.
- **Add press/partner logos** — create an `assets/logos/` folder, drop images in, then replace the text inside a `logo-slot` div with `<img src="assets/logos/name.png" alt="Outlet Name">`.
- **Set the Apply form** — in `opportunities.html`, replace both `https://forms.gle/REPLACE-WITH-YOUR-FORM-ID` links with your real Google Form URL.
- **Add an opportunity row** — in `opportunities.html`, copy the `<tr>` template from the comment above the table.
- **Fill placeholders** — anything in *[square brackets]* (story paragraphs, team names, recognition bullets) is waiting for real content.

## Publishing

Commit and push to `main` — the site goes live automatically within a couple of minutes.
