<!-- News Article Detail Template -->
<!-- This template displays a single news article -->

<article class="news-article-page">
  <div class="container">
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="separator">/</span>
      <a href="$Parent.Link">News</a>
      <span class="separator">/</span>
      <span class="current">$Title</span>
    </nav>

    <!-- Article Header -->
    <header class="news-article-header">
      <time class="news-article-date" datetime="$Date.Format('Y-MM-dd')">
        $Date.Format('d MMMM Y')
      </time>
      <h1 class="news-article-title">$Title</h1>
      <% if $Author %>
        <p class="news-article-author">By $Author</p>
      <% end_if %>
    </header>

    <!-- Featured Image -->
    <% if $FeaturedImage %>
      <figure class="news-article-featured">
        <img src="$FeaturedImage.ScaleMaxWidth(1200).URL" alt="$FeaturedImage.Title" loading="lazy">
        <% if $FeaturedImage.Caption %>
          <figcaption>$FeaturedImage.Caption</figcaption>
        <% end_if %>
      </figure>
    <% end_if %>

    <!-- Article Content -->
    <div class="news-article-content">
      $Content
    </div>

    <!-- Tags -->
    <% if $Tags %>
      <div class="news-article-tags">
        <span class="tags-label">Tags:</span>
        <% loop $Tags %>
          <a href="$Link" class="tag">$Title</a>
        <% end_loop %>
      </div>
    <% end_if %>

    <!-- Share -->
    <div class="news-article-share">
      <span class="share-label">Share this article:</span>
      <div class="share-buttons">
        <a href="https://twitter.com/intent/tweet?url=$AbsoluteLink&text=$Title.URLENC"
           target="_blank"
           rel="noopener noreferrer"
           class="share-btn share-twitter"
           aria-label="Share on Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=$AbsoluteLink"
           target="_blank"
           rel="noopener noreferrer"
           class="share-btn share-linkedin"
           aria-label="Share on LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="mailto:?subject=$Title.URLENC&body=Check out this article: $AbsoluteLink"
           class="share-btn share-email"
           aria-label="Share via Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 6l-10 7L2 6"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="news-article-nav">
      <% if $PrevArticle %>
        <a href="$PrevArticle.Link" class="nav-prev">
          <span class="nav-label">← Previous</span>
          <span class="nav-title">$PrevArticle.Title</span>
        </a>
      <% else %>
        <div></div>
      <% end_if %>

      <% if $NextArticle %>
        <a href="$NextArticle.Link" class="nav-next">
          <span class="nav-label">Next →</span>
          <span class="nav-title">$NextArticle.Title</span>
        </a>
      <% end_if %>
    </nav>

    <!-- Back to News -->
    <div class="article-navigation">
      <a href="$Parent.Link" class="btn btn-secondary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to News
      </a>
    </div>
  </div>
</article>
