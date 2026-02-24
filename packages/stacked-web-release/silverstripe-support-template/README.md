# SilverStripe Support Template (Stacked)

This package contains only the support/help related SilverStripe templates and required theme assets.

## Included
- `app/src/Page.php`
- `app/src/PageController.php`
- `app/src/CustomPageTypes.php`
- `app/templates/Page.ss`
- `app/templates/Layout/SupportListingPage.ss`
- `app/templates/Layout/HelpSectionPage.ss`
- `app/templates/Layout/HelpArticlePage.ss`
- `app/templates/Layout/help-section.ss`
- `app/templates/Layout/help-article.ss`
- `app/_config/theme.yml`
- `public/stacked-theme/css/stacked.css`
- `public/stacked-theme/fonts/*`
- `public/stacked-theme/images/*`

## Install into SilverStripe project
1. Copy `app/src/*` into your project `app/src/`.
2. Copy `app/templates/*` into your project `app/templates/`.
3. Copy `app/_config/theme.yml` into `app/_config/` (merge if needed).
4. Copy `public/stacked-theme/*` into `public/stacked-theme/`.
5. Run `vendor/bin/sake dev/build flush=all`.
