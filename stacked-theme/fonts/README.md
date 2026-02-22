# Stacked Theme Fonts

This directory contains the Gotham font files for the Stacked Silverstripe theme.

## Gotham Font Licensing

Gotham is a commercial font family by Hoefler&Co. To use Gotham legally on your website, you need to:

1. **Purchase a Web Font License** from [Hoefler&Co](https://www.hoeflerco.com/)
2. **Download the font files** in WOFF2 format for web use
3. **Place the files in this directory** with the correct filenames

## Required Gotham Files

The CSS expects these exact filenames:
- Gotham-Thin.ttf
- Gotham-XLight.ttf  
- Gotham-Light.ttf
- Gotham-Book.ttf
- Gotham-Medium.ttf
- Gotham-Bold.ttf
- Gotham-Black.ttf
- Gotham-Ultra.ttf

## Alternative: Web Font Services

If you prefer not to license Gotham, you can use alternative font services:

### Option 1: Adobe Fonts
1. Sign up for [Adobe Fonts](https://fonts.adobe.com/)
2. Add Gotham to your project
3. Use Adobe's provided CSS embed code

### Option 2: Google Fonts (Fallback)
The theme includes fallback web fonts that activate when Gotham files are not available.

## File Upload Instructions

1. Purchase Gotham web font license
2. Download WOFF2 files from Hoefler&Co
3. Convert to TTF format if needed
4. Rename files to match the expected names above
5. Upload to this fonts/ directory
6. Clear Silverstripe cache to see changes

## Font Loading Performance

For optimal performance, consider:
- Using WOFF2 format instead of TTF
- Implementing font-display: swap (already included in CSS)
- Preloading critical font weights
- Using font-subsetting to reduce file sizes