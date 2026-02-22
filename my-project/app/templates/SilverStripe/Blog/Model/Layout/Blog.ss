<section class="news-listing-page">
  <div class="container">
    <header class="page-header">
      <h1 class="page-title">$Title</h1>
      <% if $Content %>
        <div class="page-intro">$Content</div>
      <% end_if %>
    </header>

    <% if $PaginatedList.Exists %>
      <div class="news-grid">
        <% loop $PaginatedList %>
          <article class="news-card">
            <a href="$Link" class="news-card-link">
              <% if $FeaturedImage %>
                <img class="news-card-image" src="$FeaturedImage.ScaleWidth(640).URL" alt="$Title" loading="lazy">
              <% end_if %>

              <div class="news-card-content">
                <time class="news-card-date" datetime="$PublishDate.Format('Y-MM-dd')">
                  $PublishDate.Format('d MMMM Y')
                </time>
                <h2 class="news-card-title">$Title</h2>
                <% if $Summary %>
                  <p class="news-card-excerpt">$Summary.LimitCharacters(160)</p>
                <% else %>
                  <p class="news-card-excerpt">$Content.Summary(160)</p>
                <% end_if %>
              </div>
            </a>
          </article>
        <% end_loop %>
      </div>

      <% with $PaginatedList %>
        <% if $MoreThanOnePage %>
          <nav class="pagination" aria-label="News pagination">
            <% if $NotFirstPage %>
              <a href="$PrevLink" class="pagination-prev">Previous</a>
            <% end_if %>
            <div class="pagination-numbers">
              <% loop $PaginationSummary(4) %>
                <% if $CurrentBool %>
                  <span class="pagination-current">$PageNum</span>
                <% else_if $Link %>
                  <a href="$Link" class="pagination-link">$PageNum</a>
                <% else %>
                  <span class="pagination-ellipsis">...</span>
                <% end_if %>
              <% end_loop %>
            </div>
            <% if $NotLastPage %>
              <a href="$NextLink" class="pagination-next">Next</a>
            <% end_if %>
          </nav>
        <% end_if %>
      <% end_with %>
    <% else %>
      <div class="empty-state">
        <h3>No news articles yet</h3>
        <p>Check back soon for updates.</p>
      </div>
    <% end_if %>
  </div>
</section>
