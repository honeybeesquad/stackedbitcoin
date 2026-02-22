# Mobile QA Checklist (Help/News)

Use this after a hard refresh with cache bypass:
- `http://localhost:8088/help?flush=1`
- `http://localhost:8088/help/support?flush=1`
- `http://localhost:8088/help/support/getting-started?flush=1`
- `http://localhost:8088/company/news?flush=1`
- `http://localhost:8088/company/news/why-bitcoin-traders-keep-using-leverage-and-why-you-shouldnt?flush=1`

## Device presets to test
- iPhone 14 Pro (393 x 852)
- iPhone SE (375 x 667)
- Pixel 7 (412 x 915)

## What to verify
- Header: logo, hamburger, and gold bottom border are visible and aligned.
- Sidebar: hidden on mobile as expected; content does not jump left/right.
- Text colors: headings teal; body text white; in-text links teal.
- Search row: input + button aligned, no duplicate icons, no clipping.
- Help categories: consistent vertical spacing between title, description, and article count.
- Popular Articles: white item text; section spacing balanced above and below.
- Contact cards: only Email Support + Live Chat shown; text colors match spec.
- News cards: title teal, excerpt/date text white; card spacing consistent.
- Pagination: numbers and Next/Prev in one row (or wrapped cleanly), no stacked odd layout.

## Quick regression check
- Rotate to landscape once and confirm no overlap in header/search/pagination.
- Tap targets: menu button and search button are comfortably tappable.
