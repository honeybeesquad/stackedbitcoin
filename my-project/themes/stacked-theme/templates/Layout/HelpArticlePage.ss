<!-- Help Article Template -->
<!-- This template displays a single help/support article -->

<article class="help-article-page">
  <div class="container">
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="separator">/</span>
      <a href="/help">Help</a>
      <% if $Parent.Parent %>
        <span class="separator">/</span>
        <a href="$Parent.Link">$Parent.Title</a>
      <% end_if %>
      <span class="separator">/</span>
      <span class="current">$Title</span>
    </nav>

    <div class="help-article-layout">
      <!-- Sidebar -->
      <aside class="help-sidebar">
        <nav class="sidebar-nav">
          <div class="sidebar-section">
            <h3 class="sidebar-title">Home</h3>
            <% loop $HomeLinks %>
              <a href="$Link" class="sidebar-link<% if $isCurrent || $isSection %> is-active<% end_if %>">$Title</a>
            <% end_loop %>
          </div>
          
          <div class="sidebar-section">
            <h3 class="sidebar-title">Learn</h3>
            <% loop $LearnLinks %>
              <a href="$Link" class="sidebar-link<% if $isCurrent || $isSection %> is-active<% end_if %>">$Title</a>
            <% end_loop %>
          </div>
          
          <div class="sidebar-section">
            <h3 class="sidebar-title">Support</h3>
            <% loop $SupportLinks %>
              <a href="$Link" class="sidebar-link<% if $isCurrent || $isSection %> is-active<% end_if %>">$Title</a>
            <% end_loop %>
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <div class="help-article-main">
        <div class="help-article-content">
          $Content
        </div>

        <!-- Article Feedback -->
        <div class="article-feedback">
          <p class="feedback-question">Was this article helpful?</p>
          <div class="feedback-buttons">
            <button type="button" class="feedback-btn feedback-yes" data-article-id="$ID" data-helpful="yes">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
              </svg>
              Yes
            </button>
            <button type="button" class="feedback-btn feedback-no" data-article-id="$ID" data-helpful="no">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"/>
              </svg>
              No
            </button>
          </div>
        </div>

        <!-- Related Articles -->
        <% if $RelatedArticles %>
          <div class="related-help-articles">
            <h3>Related Articles</h3>
            <ul class="related-list">
              <% loop $RelatedArticles.Limit(5) %>
                <li>
                  <a href="$Link">$Title</a>
                </li>
              <% end_loop %>
            </ul>
          </div>
        <% end_if %>

        <!-- Popular Articles Section (GifGaf-style) -->
        <% if $PopularArticles %>
          <div class="popular-help-articles">
            <h3>Popular Articles</h3>
            <div class="popular-articles-grid">
              <% loop $PopularArticles.Limit(6) %>
                <a href="$Link" class="popular-article-card">
                  <div class="popular-article-content">
                    <h4>$Title</h4>
                    <% if $Summary %>
                      <p>$Summary.LimitCharacters(100)</p>
                    <% end_if %>
                  </div>
                </a>
              <% end_loop %>
            </div>
          </div>
        <% end_if %>

        <!-- Still Need Help Section (GifGaf-style) -->
        <div class="help-contact-section">
          <div class="help-contact-card">
            <div class="help-contact-header">
              <div class="contact-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3>Still need help?</h3>
              <p>Can't find what you're looking for? Our support team is here to help you get the most out of Stacked.</p>
            </div>
            
            <div class="help-contact-options">
              <a href="/contact" class="contact-option">
                <div class="option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="option-content">
                  <h4>Email Support</h4>
                  <p>Get detailed help from our team</p>
                </div>
              </a>
              
              <a href="/help/live-chat" class="contact-option">
                <div class="option-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </div>
                <div class="option-content">
                  <h4>Live Chat</h4>
                  <p>Chat with us in real-time</p>
                </div>
              </a>
              
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="help-article-nav">
          <% if $PrevArticle %>
            <a href="$PrevArticle.Link" class="nav-prev">
              <span class="nav-direction">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
                Previous
              </span>
              <span class="nav-title">$PrevArticle.Title</span>
            </a>
          <% else %>
            <div></div>
          <% end_if %>

          <% if $NextArticle %>
            <a href="$NextArticle.Link" class="nav-next">
              <span class="nav-direction">
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </span>
              <span class="nav-title">$NextArticle.Title</span>
            </a>
          <% end_if %>
        </nav>
      </div>
    </div>
  </div>
</article>
