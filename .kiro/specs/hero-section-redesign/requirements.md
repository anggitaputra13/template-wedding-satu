# Requirements Document

## Introduction

Redesign the Hero Section component (`app/components/HeroSection.tsx`) of the Next.js wedding invitation app. The current Hero Section uses a video background with floral SVG decorations and a "Save The Date" button. The redesigned Hero Section replaces this with a photo slideshow background (using images from `public/images/`), integrates the countdown timer directly into the section, displays a Sanskrit/Vedic quote, and follows a specific visual layout matching the provided reference screenshot. The existing standalone `CountdownTimer` section will be absorbed into the Hero Section.

## Glossary

- **Hero_Section**: The full-screen section displayed immediately after the cover overlay is dismissed, implemented in `app/components/HeroSection.tsx`
- **Slideshow**: An automated, cyclical image carousel that transitions between photos with support for touch/swipe navigation
- **Countdown_Timer**: A real-time countdown display showing remaining time until the wedding date (August 17, 2026, 13:00 WITA), broken into days, hours, minutes, and seconds
- **Dark_Overlay**: A semi-transparent dark layer rendered on top of the slideshow background to ensure white text remains readable
- **Brittany_Font**: A decorative script typeface already declared via `@font-face` in `globals.css` and available as the `font-brittany` Tailwind utility class
- **Garet_Font**: A clean sans-serif typeface already declared via `@font-face` in `globals.css` and available as the `font-garet` Tailwind utility class
- **Swipe_Gesture**: A horizontal touch-drag interaction on mobile devices used to manually advance or reverse the slideshow

## Requirements

### Requirement 1: Photo Slideshow Background

**User Story:** As a wedding guest, I want to see a slideshow of the couple's photos as the Hero Section background, so that the invitation feels personal and visually engaging.

#### Acceptance Criteria

1. WHEN the Hero_Section mounts, THE Slideshow SHALL display images `foto2.jpeg` through `foto9.jpeg` from `public/images/` as full-screen background slides.
2. WHILE the Hero_Section is visible, THE Slideshow SHALL automatically advance to the next image at a fixed interval between 4 and 6 seconds.
3. WHEN the Slideshow reaches the last image, THE Slideshow SHALL cycle back to the first image and continue the rotation.
4. WHEN a user performs a Swipe_Gesture to the left, THE Slideshow SHALL advance to the next image.
5. WHEN a user performs a Swipe_Gesture to the right, THE Slideshow SHALL return to the previous image.
6. WHEN a slide transition occurs, THE Slideshow SHALL apply a crossfade or fade animation lasting between 500ms and 1500ms.
7. THE Slideshow SHALL render each image using CSS `object-fit: cover` to fill the entire viewport without distortion.

### Requirement 2: Dark Overlay for Text Readability

**User Story:** As a wedding guest, I want the background photos to have a dark overlay, so that the white text on top remains easy to read.

#### Acceptance Criteria

1. THE Dark_Overlay SHALL render a semi-transparent dark layer on top of the Slideshow background and behind all text content.
2. THE Dark_Overlay SHALL use an opacity value between 40% and 60% to balance photo visibility with text readability.
3. THE Dark_Overlay SHALL cover the full width and height of the Hero_Section.

### Requirement 3: "We Are Getting Married" Header Text

**User Story:** As a wedding guest, I want to see a clear announcement that the couple is getting married, so that the purpose of the invitation is immediately obvious.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the text "WE ARE GETTING MARRIED" at the top area of the section.
2. THE Hero_Section SHALL render the "WE ARE GETTING MARRIED" text using the Garet_Font.
3. THE Hero_Section SHALL render the "WE ARE GETTING MARRIED" text in white color.
4. THE Hero_Section SHALL render the "WE ARE GETTING MARRIED" text with uppercase letter-spacing for an elegant appearance.

### Requirement 4: Couple Names Display

**User Story:** As a wedding guest, I want to see the couple's names prominently displayed in a decorative script font, so that I immediately know whose wedding this is.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the couple names in the format "{groom} & {bride}" below the "WE ARE GETTING MARRIED" text.
2. THE Hero_Section SHALL render the couple names using the Brittany_Font.
3. THE Hero_Section SHALL render the couple names in white color.
4. THE Hero_Section SHALL render the couple names at a large, prominent font size that serves as the visual focal point of the section.

### Requirement 5: Sanskrit/Vedic Quote Display

**User Story:** As a wedding guest, I want to see a meaningful quote on the Hero Section, so that the invitation conveys cultural and spiritual significance.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the Sanskrit quote text sourced from the `weddingContent.quote.sanskrit` field in `app/data/content.ts`.
2. THE Hero_Section SHALL render the Sanskrit quote using the Garet_Font in italic style.
3. THE Hero_Section SHALL render the Sanskrit quote in white color.
4. THE Hero_Section SHALL display the quote source reference from `weddingContent.quote.source` below the Sanskrit text.
5. THE Hero_Section SHALL position the quote in the middle area of the section, between the couple names and the bottom content.

### Requirement 6: Integrated Countdown Timer

**User Story:** As a wedding guest, I want to see a countdown to the wedding date directly on the Hero Section, so that I know how much time remains until the event.

#### Acceptance Criteria

1. THE Countdown_Timer SHALL display the remaining time until August 17, 2026 at 13:00 WITA, broken into four units: hari (days), jam (hours), menit (minutes), and detik (seconds).
2. THE Countdown_Timer SHALL update the displayed values every 1 second.
3. THE Countdown_Timer SHALL use the `calculateCountdown` function from `app/utils/countdown.ts` for time calculations.
4. THE Countdown_Timer SHALL be positioned at the bottom-left area of the Hero_Section in a 2x2 grid layout (hari and jam on the top row, menit and detik on the bottom row).
5. THE Countdown_Timer SHALL render numeric values and unit labels using the Garet_Font in white color.
6. WHEN the target date has passed, THE Countdown_Timer SHALL display zero values for all four units.

### Requirement 7: "Save The Date" Text

**User Story:** As a wedding guest, I want to see a "Save The Date" message on the Hero Section, so that I am reminded to mark the wedding date on my calendar.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the text "Save The Date" at the bottom-right area of the section.
2. THE Hero_Section SHALL render the "Save The Date" text using the Brittany_Font.
3. THE Hero_Section SHALL render the "Save The Date" text in white color.
4. THE Hero_Section SHALL position the "Save The Date" text opposite the Countdown_Timer, creating a balanced bottom layout.

### Requirement 8: Full-Screen Layout and Responsive Design

**User Story:** As a wedding guest viewing on any device, I want the Hero Section to fill the screen and look good on both mobile and desktop, so that the experience is consistent.

#### Acceptance Criteria

1. THE Hero_Section SHALL occupy the full viewport height (100vh) and full viewport width.
2. THE Hero_Section SHALL maintain the described layout structure (header text at top, couple names below, quote in middle, countdown at bottom-left, "Save The Date" at bottom-right) across mobile and desktop screen sizes.
3. THE Hero_Section SHALL scale font sizes responsively so that text remains readable on small screens and proportionate on large screens.
4. THE Hero_Section SHALL ensure all interactive elements (Swipe_Gesture areas) remain functional on touch-enabled devices.

### Requirement 9: Consistent Styling with Existing Project

**User Story:** As a developer, I want the redesigned Hero Section to use the project's existing font and color declarations, so that the codebase remains consistent and maintainable.

#### Acceptance Criteria

1. THE Hero_Section SHALL use the `font-brittany` Tailwind utility class for all Brittany_Font text.
2. THE Hero_Section SHALL use the `font-garet` Tailwind utility class for all Garet_Font text.
3. THE Hero_Section SHALL use white (`#ffffff` or Tailwind `text-white`) as the font color for all text elements.
4. THE Hero_Section SHALL use the existing wedding color scheme (background `#1a0e0a`) for gradient blending with adjacent sections.
5. IF Framer Motion is used for animations, THEN THE Hero_Section SHALL import motion components from the `framer-motion` package already installed in the project.
