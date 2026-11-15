# MetricAscent Website

The company site for MetricAscent: custom AI operations systems for owner-led businesses.
Built with [Astro](https://astro.build) as a fully static site.

## Run it

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Requires Node 22 or newer.

## Where things live

| Path | What it is |
|---|---|
| `src/data/systems.ts` | The four systems shown on the site: status, copy, facts, screens. **Edit this to change a case study.** |
| `src/data/site.ts` | Contact details, booking link and main navigation |
| `src/pages/` | One file per page. `work/[slug].astro` renders every case study from `systems.ts` |
| `src/components/` | Header, footer, product frames, the Lead Desk illustration |
| `src/styles/global.css` | Design tokens (colours, type, spacing) and shared classes |
| `src/assets/shots/` | Product screenshots. Astro converts them to responsive WebP at build time |
| `public/` | Files copied as-is: `CNAME`, favicons, `robots.txt` |

## Rules for content

- **Sample data only.** No screenshot may show a real customer, person or email address.
  The Lead Engine uses a coded illustration with fictional companies for this reason.
- **Say where each system stands.** Every system carries a status: In production, Launching,
  In build or Demo build. Update `status` and `statusNote` in `systems.ts` when that changes.
- **Numbers must be checkable.** Facts on the ASTA OS page come from its repository
  (test count from `vitest list`, migration count from `supabase/migrations`).

## Deploying

The site is served by GitHub Pages at **metricascent.com**.

The earlier version was plain HTML served straight from the `main` branch. This version needs
a build step, so before it can go live two things must be in place:

1. A GitHub Actions workflow that runs `npm ci && npm run build` and publishes `dist/` to Pages.
2. **Settings → Pages → Build and deployment → Source = GitHub Actions.**

Do not merge this branch into `main` until both are done: with the old "deploy from branch"
setting, `main` would have no `index.html` at its root and the live site would break.

## To do

- Add the Pages deploy workflow (see above).
- Replace `bookingUrl` in `src/data/site.ts` once a new cal.com event exists. The current link
  still points at the old "free revenue recovery audit" event.
- Add in-app screenshots for Aasta Lifespace (only the sign-in screen is shown today).
