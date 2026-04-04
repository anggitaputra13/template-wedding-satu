# Implementation Plan: Wedding Website Clone

## Overview

Build a single-page Balinese wedding invitation website using Next.js App Router, TypeScript, and Tailwind CSS. The implementation proceeds from project scaffolding → shared state wrapper → static sections → interactive components → integration and polish. All content is in Indonesian. No backend needed.

## Tasks

- [x] 1. Project scaffolding and configuration
  - [x] 1.1 Create `package.json` with Next.js, React, TypeScript, and Tailwind CSS dependencies
    - Include `next`, `react`, `react-dom`, `typescript`, `tailwindcss`, `postcss`, `autoprefixer`
    - Include dev dependencies: `@types/react`, `@types/react-dom`, `@types/node`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
    - _Requirements: 1.1, 1.3_
  - [x] 1.2 Create `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, and `next.config.ts`
    - Configure Tailwind with custom warm gold/brown color palette and decorative serif font families
    - Set up path aliases (`@/` → `src/`)
    - _Requirements: 1.1, 1.2, 1.4, 1.5, 16.1, 16.2_
  - [x] 1.3 Create `src/app/layout.tsx` with root HTML structure, font imports, metadata, and smooth scroll
    - Import Google Fonts (decorative serif for headings, clean sans-serif for body)
    - Add `scroll-smooth` to the html element
    - _Requirements: 1.1, 15.1, 16.2_
  - [x] 1.4 Create `src/app/globals.css` with Tailwind directives and custom animation keyframes
    - Include `@tailwind base; @tailwind components; @tailwind utilities;`
    - Add fade-in animation keyframes, spinning disc animation for music player
    - _Requirements: 1.2, 16.3, 16.4_
  - [x] 1.5 Create `src/lib/constants.ts` with all wedding data
    - Export `WEDDING_DATE`, `COUPLE`, `EVENTS`, `TIMELINE_MILESTONES`, `BANK_INFO`, `GALLERY_IMAGES`
    - All text content in Indonesian
    - _Requirements: 3.2, 4.2, 4.3, 5.2, 5.3, 6.1, 7.2, 10.1, 11.4_

- [x] 2. Checkpoint - Verify scaffolding
  - Ensure the project compiles and runs with `npm run dev`, ask the user if questions arise.

- [x] 3. Core layout and shared state wrapper
  - [x] 3.1 Create `src/components/ClientWrapper.tsx` client component
    - Manage `isOverlayVisible` (default `true`) and `isMusicPlaying` (default `false`) state
    - Create `audioRef` using `useRef<HTMLAudioElement>`
    - Implement `handleOpen` callback: sets overlay hidden, starts music playback
    - Implement `handleToggleMusic` callback: toggles play/pause on audio element
    - Render `CoverOverlay`, all section children, and `MusicPlayer` with appropriate props
    - _Requirements: 2.6, 2.7, 13.2_
  - [x] 3.2 Create `src/app/page.tsx` server component
    - Import and compose `ClientWrapper` with all section components
    - Pass sections as children or direct composition inside ClientWrapper
    - _Requirements: 1.1_

- [x] 4. Cover overlay and hero section
  - [x] 4.1 Create `src/components/CoverOverlay.tsx` client component
    - Full-screen fixed overlay with z-50, background image/gradient
    - Display "The Wedding of", "Gung Gus & Sonia", guest greeting, "Buka Undangan" button, disclaimer text
    - Fade-out CSS transition on dismiss (animate opacity from 1 to 0, then set display none)
    - Accept `onOpen` prop, call it on button click
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_
  - [x] 4.2 Create `src/components/HeroSection.tsx` server component
    - Display couple names in decorative serif font, wedding date, Rgveda X.85.42 blessing quote
    - Background image or decorative styling
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 5. Couple introduction and events sections
  - [x] 5.1 Create `src/components/CoupleSection.tsx` server component
    - "Meet the Couple" heading, groom and bride profiles side by side (stacked on mobile)
    - Circular photo placeholders, full names, birth order, parents, addresses
    - "&" separator between profiles
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 14.4_
  - [x] 5.2 Create `src/components/EventsSection.tsx` server component
    - "When & Where" heading
    - Two distinct cards for ceremony and reception with date, time, location, address
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 6. Countdown timer and timeline
  - [x] 6.1 Create `src/components/CountdownTimer.tsx` client component
    - `useEffect` + `setInterval` computing days/hours/minutes/seconds until `WEDDING_DATE`
    - Render placeholder on server, hydrate on client to avoid mismatch
    - Display 0/0/0/0 when date has passed
    - Inspirational love quotes above and below the timer
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  - [x] 6.2 Create `src/components/TimelineSection.tsx` server component
    - "How It All Began" heading
    - Four milestones in vertical timeline layout
    - Alternate left/right on desktop, stack vertically on mobile
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 14.4_

- [x] 7. Checkpoint - Verify static sections render
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. RSVP and wishes forms
  - [x] 8.1 Create `src/components/RSVPForm.tsx` client component
    - Form with name text input and attendance dropdown ("Hadir" / "Tidak Hadir")
    - Validate name is non-empty on submit, show inline error "Nama harus diisi"
    - Show success confirmation message after valid submission
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  - [x] 8.2 Create `src/components/WishesSection.tsx` client component
    - "Send Us Your Wishes" heading
    - Form with name and message fields
    - Validate both fields non-empty, show inline errors
    - Append submitted wish to local array, render scrollable wish list below form
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
  - [x] 8.3 Write unit tests for RSVPForm and WishesSection
    - Test RSVPForm validation rejects empty name, shows success on valid submit
    - Test WishesSection validation rejects empty fields, wish appears in list after submit
    - _Requirements: 8.2, 8.3, 9.3, 9.4_

- [x] 9. Gift section and gallery
  - [x] 9.1 Create `src/components/GiftSection.tsx` client component
    - Display bank name, account number, account holder from constants
    - Copy button using `navigator.clipboard.writeText()`
    - Show brief "Tersalin!" confirmation via transient state
    - _Requirements: 10.1, 10.2, 10.3, 10.4_
  - [x] 9.2 Create `src/components/GallerySection.tsx` server component
    - "Our Love in Frame" heading with inspirational quote
    - Responsive photo grid (minimum 6 images)
    - Placeholder images with `bg-gray-200` fallback
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_
  - [x] 9.3 Write unit tests for GiftSection
    - Test copy button calls clipboard API
    - Test confirmation message appears after copy
    - _Requirements: 10.3, 10.4_

- [x] 10. Closing, footer, and music player
  - [x] 10.1 Create `src/components/ClosingSection.tsx` server component
    - Thank-you message with couple names "Gung Gus & Sonia"
    - _Requirements: 12.1_
  - [x] 10.2 Create `src/components/Footer.tsx` server component
    - "Website Invitation by" credit line
    - _Requirements: 12.2, 12.3_
  - [x] 10.3 Create `src/components/MusicPlayer.tsx` client component
    - Floating fixed button (bottom-right corner), z-40
    - Accept `isPlaying` and `onToggle` props
    - Animated icon (spinning disc when playing, static when paused)
    - Audio element with `loop` attribute rendered in ClientWrapper
    - _Requirements: 13.1, 13.3, 13.4, 13.5_

- [x] 11. Checkpoint - Verify all components render and interact
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Responsive design and visual polish
  - [x] 12.1 Apply responsive Tailwind classes across all components
    - Ensure correct layout at 320px, 768px, and 1024px+ breakpoints
    - Verify text readability and tappable element sizes on mobile
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_
  - [x] 12.2 Add scroll-triggered fade-in animations to sections
    - Use Intersection Observer or CSS animation with scroll-triggered classes
    - Apply fade-in effects as sections enter the viewport
    - _Requirements: 16.4_
  - [x] 12.3 Apply floral/ornamental decorative elements and final color/font tuning
    - Add decorative dividers, ornamental SVGs or borders between sections
    - Verify warm gold/brown color palette consistency
    - _Requirements: 16.1, 16.2, 16.3_

- [x] 13. Integration wiring and smooth scroll
  - [x] 13.1 Wire all components together in `page.tsx` and `ClientWrapper.tsx`
    - Ensure overlay dismiss → music play flow works end-to-end
    - Verify smooth scroll behavior on anchor links
    - Add section `id` attributes for anchor navigation
    - _Requirements: 2.6, 2.7, 13.2, 15.1, 15.2_
  - [x] 13.2 Write integration tests
    - Test full page render: overlay visible → click "Buka Undangan" → overlay fades → music plays
    - Test CountdownTimer renders correct values for mocked date
    - _Requirements: 2.6, 2.7, 6.1, 13.2_

- [x] 14. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- No property-based tests — this is a UI-heavy feature with no complex data transformations
- All form data is local React state only, no backend persistence
- All text content is in Indonesian (Balinese wedding context)
- Checkpoints ensure incremental validation throughout implementation
