# Handoff Checklist

Use this checklist before marking release complete.

## A) Packaging

- [ ] Confirm only intended deliverables are included:
  - [ ] `landing-page/`
  - [ ] `silverstripe-support-template/`
- [ ] Confirm Mailchimp files are excluded from this package
- [ ] Confirm `stacked-web-release.zip` generated

## B) Landing Site Deploy (`stackedbitcoin.com`)

- [ ] `npm ci` succeeds
- [ ] `npm run build` succeeds
- [ ] `dist/` deployed to hosting target
- [ ] SPA route fallback configured

Smoke checks:
- [ ] Home page loads
- [ ] `/wallet` loads
- [ ] `/partners` loads
- [ ] `/about` loads
- [ ] `/solutions/bitcoin-for-businesses` loads
- [ ] Header nav order is: Businesses, Wallet, Partners, About, Support
- [ ] Footer links resolve correctly
- [ ] Team photos render (local assets)
- [ ] OG image and canonical tags present

## C) Support Site Deploy (`support.stackedbitcoin.com`)

- [ ] Template files copied into SilverStripe app
- [ ] Theme assets copied to `public/stacked-theme/`
- [ ] `vendor/bin/sake dev/build flush=all` run successfully

Smoke checks:
- [ ] Support listing page styled correctly
- [ ] Help section page styled correctly
- [ ] Help article page styled correctly
- [ ] Sidebar nav links work
- [ ] Search input and submit works
- [ ] CSS/fonts/images load without 404s

## D) QA and Release Signoff

- [ ] Mobile + desktop visual pass on landing page
- [ ] Mobile + desktop visual pass on support pages
- [ ] No broken links in main nav/footer
- [ ] Analytics tag validated on landing domain
- [ ] Stakeholder signoff captured

## E) Ownership

- [ ] Assigned owner for landing production issues
- [ ] Assigned owner for support subdomain issues
- [ ] Rollback contact identified
