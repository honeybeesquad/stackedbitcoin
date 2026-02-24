<!-- Help Section Template -->
<!-- This template displays the help/support section with categories and FAQs -->

<section class="help-section-page">
  <div class="container">
    <div class="help-section-layout">
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

      <div class="help-main">
        <!-- Page Header -->
        <header class="page-header help-header">
          <h1 class="page-title">$Title</h1>
          <% if $Content %>
            <div class="page-intro">$Content</div>
          <% end_if %>

          <!-- Search Box -->
          <div class="help-search">
            <form action="$Link" method="get" class="help-search-form">
              <input
                type="search"
                name="q"
                placeholder="Search help articles..."
                value="$SearchQuery"
                class="help-search-input"
              >
              <button type="submit" class="btn btn-primary help-search-submit"><span>Search</span></button>
            </form>
          </div>
        </header>

        <!-- Help Categories -->
        <% if $HelpCategories %>
          <div class="help-categories">
            <% loop $HelpCategories %>
              <a href="$Link" class="help-category-card">
                <h3 class="category-title">$Title</h3>
                <p class="category-description">$MetaDescription</p>
              </a>
            <% end_loop %>
          </div>
        <% end_if %>

        <!-- Popular Articles -->
        <% if $PopularArticles %>
          <div class="help-popular">
            <h2 class="section-title">Popular Articles</h2>
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

        <!-- FAQ Section -->
        <% if $FAQs %>
          <div class="help-faq">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <div class="faq-accordion">
              <% loop $FAQs %>
                <details class="faq-item">
                  <summary class="faq-question">
                    $Question
                    <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </summary>
                  <div class="faq-answer">
                    $Answer
                  </div>
                </details>
              <% end_loop %>
            </div>
          </div>
        <% end_if %>

        <!-- Contact Support -->
        <div class="help-contact">
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
      </div>
    </div>
  </div>
</section>
