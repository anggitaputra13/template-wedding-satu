# Custom Font Files

This directory should contain the following font files for the cover page redesign.

## Required Font Files

### Brittany (Script/Calligraphy font for couple names)
- `Brittany.woff2`
- `Brittany.woff`
- `Brittany.ttf`

### Garet Book (Sans-serif font for all other cover text)
- `Garet-Book.woff2`
- `Garet-Book.woff`
- `Garet-Book.ttf`

## Setup

1. Obtain the Brittany and Garet-Book font files (e.g., from Canva or your font provider).
2. Place all six files listed above in this `public/fonts/` directory.
3. The `@font-face` declarations in `app/globals.css` reference these files at `/fonts/`.

Without these files, the cover page will fall back to system fonts (`cursive` for Brittany, `sans-serif` for Garet).
