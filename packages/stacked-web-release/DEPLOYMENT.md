# Deployment Guide

This release has two separate deployables:

- `landing-page/` -> `stackedbitcoin.com`
- `silverstripe-support-template/` -> `support.stackedbitcoin.com`

## 1) Landing Page (React + Vite)

Path:
- `packages/stacked-web-release/landing-page`

Prerequisites:
- Node.js 20.x (or 18.18+)
- npm 9+

Install and build:
```bash
cd packages/stacked-web-release/landing-page
npm ci
npm run build
```

Preview locally:
```bash
npm run preview -- --host 0.0.0.0 --port 4173
```

Production deploy:
- Publish `landing-page/dist/` to your static host (Cloudflare Pages, Netlify, Vercel static output, S3+CDN, etc.)
- Configure SPA fallback so route paths resolve to `index.html`
- Ensure canonical domain is `https://stackedbitcoin.com`

Post-deploy checks:
- `https://stackedbitcoin.com/`
- `https://stackedbitcoin.com/wallet`
- `https://stackedbitcoin.com/partners`
- `https://stackedbitcoin.com/about`
- `https://stackedbitcoin.com/solutions/bitcoin-for-businesses`

Notes:
- Google tag ID is embedded in `index.html`.
- Team images are now local assets (no external hotlink dependency).

## 2) SilverStripe Support Template

Path:
- `packages/stacked-web-release/silverstripe-support-template`

Target:
- Dedicated SilverStripe instance for `support.stackedbitcoin.com`

Prerequisites:
- PHP version compatible with your SilverStripe install
- SilverStripe CMS installed and working
- Access to app and public webroot on support environment

Install steps:
1. Copy:
   - `app/src/*` -> your SilverStripe `app/src/`
   - `app/templates/*` -> your SilverStripe `app/templates/`
   - `app/_config/theme.yml` -> your SilverStripe `app/_config/` (merge if needed)
2. Copy:
   - `public/stacked-theme/*` -> your webroot `public/stacked-theme/`
3. Run:
```bash
vendor/bin/sake dev/build flush=all
```

Post-deploy checks:
- Support listing page renders with Stacked theme
- Help section pages render
- Help article pages render
- Search field submits and loads result pages
- Fonts/images/css load from `/stacked-theme/...`

## Environment and Secrets

Landing:
- No private runtime secrets required for static deploy.
- Analytics IDs are public client-side IDs.

Support:
- Uses your existing SilverStripe environment/database credentials.

## Rollback

Landing:
- Re-point static hosting to previous artifact/version.

Support:
- Restore previous templates/theme assets from backup and run:
```bash
vendor/bin/sake dev/build flush=all
```
