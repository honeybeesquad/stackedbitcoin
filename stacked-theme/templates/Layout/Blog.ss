<!-- News Listing Template -->
<!-- This template displays a list of news articles -->

<section class="news-listing-page">
  <div class="container">
    <!-- Page Header -->
    <header class="page-header">
      <h1 class="page-title">$Title</h1>
      <% if $Content %>
        <div class="page-intro">$Content</div>
      <% end_if %>
    </header>

    <!-- News Grid -->
    <% if $PaginatedNews %>
      <div class="news-grid">
        <% loop $PaginatedNews %>
          <article class="news-card">
            <a href="$Link" class="news-card-link">
              <% if $FeaturedImage %>
                <div class="news-card-image">
                  <img src="$FeaturedImage.FocusFill(400,250).URL" alt="$Title" loading="lazy">
                </div>
              <% else %>
                <div class="news-card-image news-card-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
              <% end_if %>

              <div class="news-card-content">
                <time class="news-card-date" datetime="$Date.Format('Y-MM-dd')">
                  $Date.Format('d MMMM Y')
                </time>
                <h2 class="news-card-title">$Title</h2>
                <% if $Summary %>
                  <p class="news-card-summary">$Summary.LimitCharacters(150)</p>
                <% else_if $Content %>
                  <p class="news-card-summary">$Content.Summary(150)</p>
                <% end_if %>
                <span class="news-card-cta">Read more →</span>
              </div>
            </a>
          </article>
        <% end_loop %>
      </div>

      <!-- Pagination -->
      <% if $PaginatedNews.MoreThanOnePage %>
        <nav class="pagination" aria-label="News pagination">
          <% if $PaginatedNews.NotFirstPage %>
            <a href="$PaginatedNews.PrevLink" class="pagination-prev" aria-label="Previous page">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              Previous
            </a>
          <% end_if %>

          <div class="pagination-numbers">
            <% loop $PaginatedNews.PaginationSummary(4) %>
              <% if $CurrentBool %>
                <span class="pagination-current" aria-current="page">$PageNum</span>
              <% else_if $Link %>
                <a href="$Link" class="pagination-link">$PageNum</a>
              <% else %>
                <span class="pagination-ellipsis">…</span>
              <% end_if %>
            <% end_loop %>
          </div>

          <% if $PaginatedNews.NotLastPage %>
            <a href="$PaginatedNews.NextLink" class="pagination-next" aria-label="Next page">
              Next
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </a>
          <% end_if %>
        </nav>
      <% end_if %>
    <% else %>
      <div class="empty-state">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9m2 10a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h10"/>
        </svg>
        <h3>No news articles yet</h3>
        <p>Check back soon for the latest updates from Stacked.</p>
      </div>
    <% end_if %>
  </div>
</section>
