# Implementation Plan: Hero Section Redesign

## Overview

Rewrite `app/components/HeroSection.tsx` to replace the video background with a photo slideshow, integrate the countdown timer, display a Sanskrit quote, and add a "Save The Date" label. Then remove the standalone `CountdownTimer` usage from both page routes. Property-based tests use `fast-check` to validate slideshow cycling, swipe detection, and name formatting.

## Tasks

- [x] 1. Rewrite HeroSection component with slideshow and layout
  - [x] 1.1 Implement photo slideshow background with crossfade transitions
    - Define `SLIDESHOW_IMAGES` array with `foto2.jpeg` through `foto9.jpeg`
    - Use `useState` for `currentSlide` index, auto-advance every 5s via `useEffect` + `setInterval`
    - Render stacked absolute-positioned images with Framer Motion `AnimatePresence` for crossfade (~700ms opacity transition)
    - Each image uses `object-cover` to fill the viewport
    - Wrap back to index 0 after the last image
    - _Requirements: 1.1, 1.2, 1.3, 1.6, 1.7_

  - [x] 1.2 Add dark overlay for text readability
    - Render a semi-transparent dark div (`bg-black/50`) on top of slideshow images, behind text content
    - Overlay covers full width and height of the section
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 1.3 Add touch swipe support for slideshow navigation
    - Track `touchstart`/`touchend` X coordinates via `useRef`
    - Threshold of 50px: swipe left → next slide, swipe right → previous slide
    - Reset auto-advance timer on swipe to prevent double-advance
    - _Requirements: 1.4, 1.5_

  - [x] 1.4 Implement text content layout (header, names, quote, bottom row)
    - Top area: "WE ARE GETTING MARRIED" in `font-garet`, uppercase, white, letter-spaced
    - Below header: `{groom} & {bride}` in `font-brittany`, large prominent size, white
    - Middle area: Sanskrit quote from `weddingContent.quote.sanskrit` in `font-garet italic`, white; source reference below
    - Bottom-left: Countdown 2×2 grid (Hari/Jam top row, Menit/Detik bottom row) using `calculateCountdown` from `app/utils/countdown.ts`, `font-garet`, white, updates every 1s
    - Bottom-right: "Save The Date" in `font-brittany`, white
    - Use `mounted` flag to show "--" placeholders until client-side hydration
    - Section is `h-screen w-full overflow-hidden`
    - Responsive font sizes via Tailwind breakpoint utilities
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 7.1, 7.2, 7.3, 7.4, 8.1, 8.2, 8.3, 8.4, 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 2. Remove standalone CountdownTimer from page routes
  - [x] 2.1 Update `app/[slug]/page.tsx`
    - Remove the `CountdownTimer` import
    - Remove the `<AnimatedSection><CountdownTimer /></AnimatedSection>` block
    - _Requirements: 6.1_

  - [x] 2.2 Update `app/[slug]/[guest]/page.tsx`
    - Remove the `CountdownTimer` import
    - Remove the `<AnimatedSection><CountdownTimer /></AnimatedSection>` block
    - _Requirements: 6.1_

- [x] 3. Checkpoint — Verify hero section renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Property-based tests for correctness properties
  - [x] 4.1 Write property test: Slideshow index cycling is circular
    - **Property 1: Slideshow index cycling is circular**
    - For any array length N > 0 and current index in [0, N), verify `(index + 1) % N` for next and `(index - 1 + N) % N` for prev, result always in [0, N)
    - Use `fast-check` with `fc.integer` for array length and index
    - **Validates: Requirements 1.3, 1.4, 1.5**

  - [x] 4.2 Write property test: Swipe direction detection
    - **Property 2: Swipe direction detection**
    - For any pair (startX, endX), if `startX - endX > 50` → "next", if `endX - startX > 50` → "prev", if `|diff| <= 50` → no navigation
    - Use `fast-check` with `fc.float` for coordinate pairs
    - **Validates: Requirements 1.4, 1.5**

  - [x] 4.3 Write property test: Couple name display format
    - **Property 3: Couple name display format**
    - For any non-empty groom and bride strings, the formatted output contains `"{groom} & {bride}"`
    - Use `fast-check` with `fc.string` filtered to non-empty
    - **Validates: Requirements 4.1**

- [x] 5. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The existing `CountdownTimer.tsx` file is kept in the codebase (not deleted) — only its usage in page routes is removed
- `HeroSection` props (`groom`, `bride`) remain unchanged — no API breaking change
- All animations use Framer Motion which is already installed in the project
- Property tests use `fast-check` to validate the 3 correctness properties from the design document
