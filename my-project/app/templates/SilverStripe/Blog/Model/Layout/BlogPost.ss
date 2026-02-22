<article class="news-article-page">
  <div class="container container-narrow">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="separator">/</span>
      <a href="$Parent.Link">$Parent.Title</a>
      <span class="separator">/</span>
      <span class="current">$Title</span>
    </nav>

    <header class="news-article-header">
      <time class="news-article-date" datetime="$PublishDate.Format('Y-MM-dd')">
        $PublishDate.Format('d MMMM Y')
      </time>
      <h1 class="news-article-title">$Title</h1>
      <% if $AuthorNames %>
        <p class="news-article-author">By $AuthorNames</p>
      <% end_if %>
    </header>

    <% if $FeaturedImage %>
      <figure class="news-article-featured">
        <img src="$FeaturedImage.ScaleMaxWidth(1200).URL" alt="$Title" loading="lazy">
      </figure>
    <% end_if %>

    <div class="news-article-content">
      $Content
    </div>

    <div class="article-navigation">
      <a href="$Parent.Link" class="btn btn-secondary">Back to News</a>
    </div>
  </div>
</article>
