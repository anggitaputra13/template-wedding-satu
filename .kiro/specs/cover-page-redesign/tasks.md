# Implementation Plan: Cover Page Redesign

## Overview

Redesign the CoverOverlay component from an ornament-heavy slideshow layout to a clean, minimal cover page with a single static background, custom Brittany and Garet fonts, staggered Framer Motion entrance animations, and updated default couple names (Satria & Heppa). Implementation proceeds incrementally: font setup first, then Tailwind config, then component rewrite, then default name updates across the codebase.

## Tasks

- [x] 1. Add custom font files and register via @font-face
  - [x] 1.1 Add Brittany and Garet font files to `public/fonts/`
    - Place `Brittany.woff2`, `Brittany.woff`, `Brittany.ttf` in `public/fonts/`
    - Place `Garet-Book.woff2`, `Garet-Book.woff`, `Garet-Book.ttf` in `public/fonts/`
    - _Requirements: 10.1, 10.2_

  - [x] 1.2 Add @font-face declarations in `app/globals.css`
    - Add `@font-face` for `Brittany` with woff2, woff, ttf sources from `/fonts/` and `font-display: swap`
    - Add `@font-face` for `Garet` with woff2, woff, ttf sources from `/fonts/` and `font-display: swap`
    - Place declarations before the `@layer base` block
    - _Requirements: 10.3, 10.5_

  - [x] 1.3 Add font family entries to `tailwind.config.ts`
    - Add `brittany: ["Brittany", "cursive"]` to `theme.extend.fontFamily`
    - Add `garet: ["Garet", "sans-serif"]` to `theme.extend.fontFamily`
    - This enables `font-brittany` and `font-garet` Tailwind utility classes
    - _Requirements: 10.4, 10.5_

- [x] 2. Rewrite CoverOverlay component
  - [x] 2.1 Remove slideshow logic and ornament elements from `app/components/CoverOverlay.tsx`
    - Remove `slideshowImages` array, `currentSlide` state, and the slideshow `useEffect` interval
    - Remove top and bottom ornament `<img>` elements
    - Remove "UNDANGAN" heading `<p>` element
    - Remove date text `<p>` element
    - Keep the `useEffect` that locks body scroll
    - _Requirements: 1.4, 5.1, 5.2, 5.3_

  - [x] 2.2 Implement single static background with dark overlay
    - Replace slideshow `div` elements with a single `<div>` using `background-image: url('/images/foto1.jpeg')`, `bg-cover`, `bg-center`, `bg-no-repeat`
    - Keep the existing dark overlay `<div className="absolute inset-0 bg-black/50" />`
    - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3_

  - [x] 2.3 Implement couple names section with Brittany font and entrance animation
    - Create a `motion.div` wrapper for the top group with initial `{ opacity: 0, y: -30 }`, animate `{ opacity: 1, y: 0 }`, delay 0.3s, duration 0.8s
    - Render `<h1>` with `font-brittany` class displaying `{groom} & {bride}`
    - Apply white color, drop shadow, and responsive font sizing (text-5xl sm:text-6xl md:text-7xl)
    - Update default props to `groom = "Satria"`, `bride = "Heppa"`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 9.1, 11.1_

  - [x] 2.4 Implement bottom section with Garet font and staggered animations
    - Create `motion.div` wrappers for each bottom element with slide-up animations:
      - Guest greeting "Kepada Bapak/Ibu/Saudara/i." — `font-garet`, opacity ~70-80%, delay 0.5s
      - Guest name — `font-garet font-bold`, white, delay 0.7s
      - "Buka Undangan" button — `font-garet`, pill shape, semi-transparent bg, backdrop blur, envelope SVG icon, delay 0.9s
      - Disclaimer text — `font-garet`, small font (text-[8px] sm:text-[9px]), opacity ~70%, fade-in only, delay 1.1s
    - All slide-up elements use initial `{ opacity: 0, y: 30 }`, animate `{ opacity: 1, y: 0 }`, duration 0.8s
    - Disclaimer uses initial `{ opacity: 0 }`, animate `{ opacity: 1 }`, duration 0.6s
    - _Requirements: 4.1, 4.2, 4.3, 6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 8.1, 8.2, 8.3, 9.2, 9.3_

  - [x] 2.5 Implement exit animation on cover dismissal
    - Ensure `AnimatePresence` wraps the cover and the `motion.div` has `exit={{ opacity: 0 }}` with `transition={{ duration: 0.8, ease: "easeInOut" }}`
    - Verify `onOpen` callback fires on button click to trigger exit
    - _Requirements: 9.4, 9.5, 7.5_

- [x] 3. Checkpoint
  - Ensure the app builds without errors (`npm run build`), ask the user if questions arise.

- [x] 4. Update default couple names across the codebase
  - [x] 4.1 Update `app/data/content.ts` default names
    - Change `groom.name` from `"Satria"` to `"Satria"`
    - Change `bride.name` from `"Heppa"` to `"Heppa"`
    - _Requirements: 11.1_

  - [x] 4.2 Update `app/[slug]/[guest]/page.tsx` parseNames fallback
    - Change fallback return from `{ groom: "Satria", bride: "Heppa" }` to `{ groom: "Satria", bride: "Heppa" }`
    - Change default slug from `"Satria-Heppa"` to `"Satria-Heppa"`
    - _Requirements: 11.1, 11.2_

  - [x] 4.3 Update `app/[slug]/page.tsx` parseNames fallback
    - Change fallback return from `{ groom: "Satria", bride: "Heppa" }` to `{ groom: "Satria", bride: "Heppa" }`
    - Change default slug from `"Satria-Heppa"` to `"Satria-Heppa"`
    - _Requirements: 11.1, 11.2_

- [x] 5. Final checkpoint
  - Ensure the app builds without errors, verify all default names show "Satria & Heppa", ask the user if questions arise.

## Notes

- No property-based tests are included — the design document confirms PBT does not apply to this UI-focused redesign
- Font files must be manually placed in `public/fonts/` — the coding agent cannot create binary font files
- Visual verification (font rendering, animation smoothness, responsive layout) should be done manually in the browser
- Each task references specific requirement acceptance criteria for traceability
- Checkpoints ensure incremental validation of the build
