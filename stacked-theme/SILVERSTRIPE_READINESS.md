# Silverstripe Readiness (DB Copy Testing)

This theme has been converted from HTML prototypes to Silverstripe templates.

## What was prepared

- Base wrapper template created:
  - `templates/Page.ss`
- Layout templates created (class-name and legacy aliases):
  - `templates/Layout/Page.ss`
  - `templates/Layout/ArticlePage.ss`
  - `templates/Layout/NewsListingPage.ss`
  - `templates/Layout/NewsHolder.ss`
  - `templates/Layout/news-listing.ss`
  - `templates/Layout/NewsArticlePage.ss`
  - `templates/Layout/NewsArticle.ss`
  - `templates/Layout/news-article.ss`
  - `templates/Layout/HelpSectionPage.ss`
  - `templates/Layout/help-section.ss`
  - `templates/Layout/HelpArticlePage.ss`
  - `templates/Layout/help-article.ss`
- CSS import fixed to match folder structure:
  - `css/stacked.css` now imports `../fonts/web-fonts.css`

## Expected result

- The visual layout should stay very close to the preview.
- Rendering differences can still appear based on real CMS data (empty fields, missing images, page hierarchy, etc.).

## Required backend/data support

These template variables/methods must exist on your PageTypes or controllers:

- News listing: `$PaginatedNews`
- News article nav: `$PrevArticle`, `$NextArticle`
- Help section: `$HelpCategories`, `$PopularArticles`, `$FAQs`, `$SearchQuery`
- Help article: `$RelatedArticles`, `$PopularArticles`, `$PrevArticle`, `$NextArticle`

If these are not implemented, related sections will render empty or not show.

## Recommended test flow on DB copy

1. Install theme into your Silverstripe project theme path.
2. Set theme via config (example):
   - `SilverStripe\\View\\SSViewer.themes: [ '$public', 'stacked-theme', '$default' ]`
3. Flush cache:
   - append `?flush=1` to URL or run your project flush command.
4. Validate pages in this order:
   - Home / generic Page
   - News listing
   - News article
   - Help section
   - Help article
5. Verify mobile behavior:
   - Hamburger menu opens/closes
   - Help sidebar hidden on mobile
   - Breadcrumb spacing and prev/next cards look correct

## Known non-blocking caveat

- Header/footer links are currently hardcoded route paths in `templates/Page.ss`.
  If your route map differs, update those href values.
