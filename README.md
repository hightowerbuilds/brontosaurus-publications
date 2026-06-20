<p align="center">
  <img
    src="https://gbnizxzurmbzeelacztr.supabase.co/storage/v1/object/public/images/brontosaurus-publications/bronto-header.png"
    alt="Brontosaurus Publications"
    width="600"
  />
</p>

# Brontosaurus Publications

The Brontosaurus Publications website — an indie publishing/zine hub built with
[SolidJS](https://www.solidjs.com/) and [Vite](https://vitejs.dev/), styled with
plain CSS (no Tailwind).

## Stack

- **SolidJS** + **@solidjs/router** for the SPA and client-side routing
- **Vite** for dev/build
- Plain, component-scoped CSS
- Large image assets (zine scans, banner, etc.) are served from **Supabase Storage**
  (public bucket) rather than bundled in the repo — see `src/cloud.js`

## Routes

- `/` — home
- `/landing` — canvas landing page
- `/zine-one` — Zine One gallery
- `/zine-two` — Zine Two

## Development

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deployment

Configured for Vercel as a single-page app — `vercel.json` rewrites all routes to
`/` so client-side routing works on refresh/deep links.

## Notes

- Some smaller assets (favicon, zine logo, zine-two cover, platformer background)
  are still bundled locally in `src/assets/`; the heavy zine-one scans and homepage
  images load from Supabase via the base URL in `src/cloud.js`.
