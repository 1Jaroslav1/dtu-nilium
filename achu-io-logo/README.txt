achu.io LOGO PACKAGE  ·  v1.0  ·  November 2026
=================================================

All artwork is outlined vector. No fonts are needed to use these files.
Wordmark: Outfit SemiBold, lowercase, tracking -0.03 em.


WHICH FILE DO I USE?
--------------------

Website and app (screens)
  web/svg/    First choice for the web. Sharp at any size, tiny file size.
  web/png/    Transparent PNGs (512, 1024, 2048 px wide) for tools that don't take SVG.

    achu-logo-primary    Light backgrounds (Cloud, Mint Air, white)
    achu-logo-ink        Turquoise backgrounds (everything in Deep Lagoon)
    achu-logo-reversed   Deep Lagoon or other dark backgrounds
    achu-logo-white      Photos and one-colour use on dark or mid-tone backgrounds
    achu-logo-black      One-colour use where only black is available
    achu-symbol-*        The symbol alone (avatars, loading screens, small spaces)
    achu-app-icon        Rounded app icon with the Breath gradient

Favicon
  web/favicon/   Copy all files to the root of the website, then add to <head>:

    <link rel="icon" href="/favicon.ico" sizes="48x48">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="theme-color" content="#12D8C8">

Social media
  web/social/achu-avatar_1080px.png      Profile picture (safe for circle crops)
  web/social/achu-og-image_1200x630.png  Link preview image. Add to <head>:
    <meta property="og:image" content="https://achu.io/achu-og-image_1200x630.png">

App stores
  app-store/achu-app-icon_1024px_full-bleed.png
    Square, no rounded corners, no transparency. Apple and Google round it themselves.

Print (CMYK)
  print-cmyk/*.pdf   First choice for printers, merch and packaging.
  print-cmyk/*.eps   For older software that cannot place PDF.
  Note: achu-logo-white and achu-symbol-white are white knock-outs, so they look
  empty on a white page. That is expected.

Designers
  illustrator/*.ai          Opens and edits in Adobe Illustrator (see note below).
  colors/achu-colors.ase    Swatches for Illustrator, InDesign and Photoshop (RGB and CMYK groups).
  colors/achu-colors.css    Colour and font tokens for web developers.

About the .ai files: they are PDF-compatible Illustrator files with outlined artwork
and CMYK fills. They open and edit normally in Illustrator but carry no Illustrator
layers or global swatches. For a fully native file, open one in Illustrator and
use Save As > Adobe Illustrator (.ai).


COLOURS
-------
Name             HEX       RGB             CMYK (FOGRA39 coated)
Achu Turquoise   #12D8C8   18 216 200      58  0 33  0
Deep Lagoon      #062F36    6  47  54      90 47 45 73
Cloud            #F5FBFA  245 251 250      paper white in print
Mint Air         #E2F7F4  226 247 244      10  2  7  0
Sky Breath       #5CC8FF   92 200 255      56  7  0  0
Deep Turquoise   #007A73    0 122 115      83 21 49 26
Coral Puff       #FF7867  255 120 103       0 65 56  0
Slate            #43636A   67  99 106      73 42 42 33

CMYK values were converted from sRGB with the FOGRA39 (ISO Coated v2) profile,
relative colorimetric. For uncoated paper, ask the printer to convert and approve
a proof first.

Achu Turquoise is a bright screen colour. In CMYK it prints noticeably duller.
Where the colour really matters (merch, packaging, signage), choose a Pantone spot
colour against a physical Pantone guide and order a printed proof.


LOGO RULES (short version, full rules in the brand master deck)
------------------------------------------------------------
- Clear space: the height of the letter "a" on every side.
- Minimum size: 96 px wide on screens, 25 mm wide in print, 24 px tall for the symbol alone.
- Never stretch, rotate, recolour, add effects, or move the symbol.
- Never set the logo in white on turquoise. Use achu-logo-ink there.

Typefaces: Outfit and Inter, both free on Google Fonts under the SIL Open Font License.
