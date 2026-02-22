STACKED SILVERSTRIPE THEME
==========================

This folder contains the CSS theme and HTML templates for rebranding
the Silverstripe CMS from Lightning Pay to Stacked.


FOLDER STRUCTURE
----------------

stacked-theme/
├── css/
│   └── stacked.css          # Main stylesheet with all branding
├── fonts/
│   └── (Gotham font files)  # Copy Gotham TTF files here
├── templates/
│   ├── layout.html          # Base page layout with header/footer
│   ├── article.html         # Generic article/content page
│   ├── news-listing.html    # News listing page with pagination
│   ├── news-article.html    # Individual news article page
│   ├── help-section.html    # Help center landing page
│   └── help-article.html    # Individual help article page
└── README.txt               # This file


REQUIRED FONTS
--------------

Copy the Gotham TrueType font files to the fonts/ folder:

  fonts/
  ├── Gotham-Thin.ttf
  ├── Gotham-XLight.ttf
  ├── Gotham-Light.ttf
  ├── Gotham-Book.ttf
  ├── Gotham-Medium.ttf
  ├── Gotham-Bold.ttf
  ├── Gotham-Black.ttf
  └── Gotham-Ultra.ttf

The CSS expects these exact filenames. If your files are named
differently, update the @font-face declarations in stacked.css.


BRAND COLORS (from Stacked UX Brand Guidelines v2)
--------------------------------------------------

Stacked Slate (Background):    #161718
Light Slate (Secondary BG):    #222323
Stacked Teal (Primary):        #14afac
Stacked Gold (Highlight):      #d6985b
Stacked Teal Light (Accent):   #d9f3f1
Foreground (White):            #FFFFFF


IMPLEMENTATION NOTES
--------------------

1. These templates use Silverstripe template syntax with $Variables
   and <% loop %> / <% if %> control structures.

2. The layout.html serves as the base template. Other templates
   slot into the $Layout variable.

3. Replace all "Lightning Pay" references with "Stacked" in your
   Silverstripe database/content.

4. Update the logo images in Silverstripe to use Stacked branding:
   - Logo wide: stacked-logo-wide.png (for header)
   - Favicon: Use "Stacked Button Reverse Slate.png"

5. The CSS is self-contained with CSS custom properties (variables)
   for easy customization of colors and fonts.


DEPLOYMENT
----------

Option A: Upload files via Silverstripe admin
  - Upload CSS to Silverstripe assets and link in templates
  - Copy template HTML into Silverstripe theme folder on server

Option B: Direct server access
  - Copy entire stacked-theme folder to themes/ directory
  - Update Silverstripe config to use new theme
  - Clear Silverstripe cache


CONTACT
-------

For questions about the theme, contact the Stacked development team.
