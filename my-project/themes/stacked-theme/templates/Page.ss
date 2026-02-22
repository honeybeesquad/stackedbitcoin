<!DOCTYPE html>
<html lang="en">
<head>
  <% base_tag %>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> | Stacked</title>
  <meta name="description" content="$MetaDescription">

  <link rel="stylesheet" href="/stacked-theme/css/stacked.css?v=2.1">
  <link rel="icon" type="image/png" href="/stacked-theme/images/stacked-button-teal.png">
  <link rel="apple-touch-icon" href="/stacked-theme/images/stacked-button-teal.png">
</head>
<body>
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="https://stackedbitcoin.com" class="site-logo">
          <img src="/stacked-theme/images/stacked-logo-wide-teal.png" alt="Stacked" class="site-logo-desktop">
          <img src="/stacked-theme/images/stacked-button-teal.png" alt="Stacked" class="site-logo-mobile">
        </a>

        <nav class="main-nav">
          <a href="https://app.stackedbitcoin.com/login" class="btn btn-ghost">Login</a>
          <a href="https://app.stackedbitcoin.com/register" class="btn btn-primary">Register</a>
        </nav>

        <button class="mobile-menu-btn" type="button" aria-label="Toggle menu" aria-controls="mobile-menu-drawer" aria-expanded="false" data-mobile-menu-toggle>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-menu-overlay" data-mobile-menu-overlay></div>
  <nav class="mobile-menu-drawer" id="mobile-menu-drawer" aria-hidden="true">
    <div class="mobile-menu-section">
      <a href="/help" class="mobile-menu-link">Help Center</a>
      <a href="/company/news" class="mobile-menu-link">News</a>
    </div>

    <div class="mobile-menu-section">
      <h4 class="mobile-menu-label">Learn</h4>
      <a href="/help/learn/about-stacked" class="mobile-menu-link">About Stacked</a>
      <a href="/help/learn/bitcoin-for-beginners" class="mobile-menu-link">Bitcoin for Beginners</a>
      <a href="/help/learn/lightning-network-education" class="mobile-menu-link">Lightning Network Education</a>
      <a href="/help/learn/saving-in-bitcoin" class="mobile-menu-link">Saving in Bitcoin</a>
      <a href="/help/learn/how-to-use-bitcoin" class="mobile-menu-link">How to use Bitcoin</a>
      <a href="/help/learn/bitcoin-and-nz-law" class="mobile-menu-link">Bitcoin and NZ Law</a>
    </div>

    <div class="mobile-menu-section">
      <h4 class="mobile-menu-label">Support</h4>
      <a href="/help/support/getting-started" class="mobile-menu-link">Getting Started</a>
      <a href="/help/support/how-to-verify-my-identity" class="mobile-menu-link">How to verify my identity</a>
      <a href="/help/support/stacked-products" class="mobile-menu-link">Stacked Products</a>
      <a href="/help/support/the-stacked-wallet" class="mobile-menu-link">The Stacked Wallet</a>
      <a href="/help/support/merchant-services" class="mobile-menu-link">Merchant Services</a>
    </div>

  </nav>

  <main>
    $Layout
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h4 class="footer-column-title">Help Center</h4>
          <ul class="footer-links">
            <li><a href="/help">Home</a></li>
            <li><a href="/help/learn">Learn</a></li>
            <li><a href="/help/support">Support</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-column-title">News</h4>
          <ul class="footer-links">
            <li><a href="/company/news">Latest News</a></li>
            <li><a href="/company/news">Updates</a></li>
            <li><a href="/company/news">Announcements</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4 class="footer-column-title">Legal</h4>
          <ul class="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2024 Stacked. All rights reserved.</div>
        <div>NZBN: 9429051417789 | FSP: FSP1005773</div>
      </div>
    </div>
  </footer>

  <script>
    (function () {
      var toggle = document.querySelector('[data-mobile-menu-toggle]');
      var overlay = document.querySelector('[data-mobile-menu-overlay]');
      var drawer = document.getElementById('mobile-menu-drawer');

      if (!toggle || !overlay || !drawer) return;

      function setOpen(open) {
        document.body.classList.toggle('mobile-menu-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      }

      toggle.addEventListener('click', function () {
        var isOpen = document.body.classList.contains('mobile-menu-open');
        setOpen(!isOpen);
      });

      overlay.addEventListener('click', function () {
        setOpen(false);
      });

      drawer.addEventListener('click', function (event) {
        var link = event.target.closest('a');
        if (link) setOpen(false);
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') setOpen(false);
      });
    })();
  </script>
</body>
</html>
