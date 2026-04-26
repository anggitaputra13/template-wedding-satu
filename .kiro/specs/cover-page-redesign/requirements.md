# Requirements Document

## Introduction

Redesign the wedding invitation cover page (CoverOverlay component) to match a clean, minimal design with a single full-screen background photo, custom typography (Brittany for couple names, Garet for other text), updated couple names (Satria & Heppa), and smooth entrance animations. The current slideshow and ornament-heavy layout will be replaced with a static background image and a streamlined layout: couple names at the top, guest information and "Buka Undangan" button at the bottom.

## Glossary

- **Cover_Page**: The full-screen overlay component (CoverOverlay.tsx) displayed before the user opens the wedding invitation
- **Background_Photo**: The single static image (foto1.jpeg) used as the full-screen wallpaper behind the cover page content
- **Dark_Overlay**: A semi-transparent dark layer placed over the Background_Photo to ensure text readability
- **Couple_Names**: The groom and bride names displayed in script/calligraphy font at the top of the Cover_Page (default: "Satria & Heppa")
- **Guest_Name**: The name of the invited guest displayed in the lower section of the Cover_Page
- **Open_Button**: The "Buka Undangan" pill-shaped button with an envelope icon that triggers the invitation opening
- **Brittany_Font**: A script/calligraphy font from Canva used exclusively for the Couple_Names display
- **Garet_Font**: A clean sans-serif font used for all text on the Cover_Page except the Couple_Names
- **Entrance_Animation**: Fade-in and slide animations applied to Cover_Page elements on initial load using Framer Motion
- **Exit_Animation**: The fade-out transition applied to the Cover_Page when the user clicks the Open_Button
- **Font_Loader**: The mechanism in the Next.js layout (layout.tsx) and/or CSS that loads and registers custom fonts (Brittany and Garet) for use across the application

## Requirements

### Requirement 1: Single Static Background Image

**User Story:** As a wedding guest, I want to see a beautiful full-screen photo of the couple as the cover page background, so that the invitation feels personal and elegant.

#### Acceptance Criteria

1. WHEN the Cover_Page loads, THE Cover_Page SHALL display foto1.jpeg as a full-screen background image covering the entire viewport
2. THE Background_Photo SHALL use CSS `object-fit: cover` or `background-size: cover` to fill the viewport without distortion
3. THE Background_Photo SHALL be centered both horizontally and vertically within the viewport
4. THE Cover_Page SHALL NOT display a slideshow or cycle through multiple images

### Requirement 2: Dark Overlay on Background

**User Story:** As a wedding guest, I want the text on the cover page to be readable over the background photo, so that I can clearly see the couple names and invitation details.

#### Acceptance Criteria

1. THE Cover_Page SHALL render a Dark_Overlay on top of the Background_Photo
2. THE Dark_Overlay SHALL use a semi-transparent black color (approximately 50% opacity) to ensure white text remains legible
3. THE Dark_Overlay SHALL cover the entire viewport area matching the Background_Photo dimensions

### Requirement 3: Couple Names Display with Brittany Font

**User Story:** As the couple, I want our names displayed prominently in an elegant calligraphy font at the top of the cover page, so that guests immediately see who the invitation is from.

#### Acceptance Criteria

1. THE Cover_Page SHALL display the Couple_Names in the upper portion of the viewport
2. THE Couple_Names SHALL use the Brittany_Font (script/calligraphy style)
3. THE Couple_Names SHALL be rendered in white color with a text shadow for enhanced readability
4. THE Couple_Names SHALL display in the format "{groom} & {bride}" (default: "Satria & Heppa")
5. THE Couple_Names SHALL use a large font size (approximately 3rem to 4.5rem, scaling responsively across screen sizes)
6. WHEN the groom and bride names are provided via URL parameters, THE Cover_Page SHALL display the provided names instead of the defaults

### Requirement 4: Garet Font for Non-Couple Text

**User Story:** As the couple, I want all supporting text on the cover page to use a clean, modern font, so that the design looks polished and consistent.

#### Acceptance Criteria

1. THE Cover_Page SHALL use the Garet_Font for all text elements except the Couple_Names
2. THE Font_Loader SHALL load the Garet_Font and make it available via a CSS variable or Tailwind utility class
3. THE Garet_Font SHALL be applied to the guest greeting text, Guest_Name, Open_Button label, and disclaimer text

### Requirement 5: Clean Minimal Layout Without Ornaments

**User Story:** As the couple, I want a clean and minimal cover page layout without decorative ornaments, so that the design matches the modern aesthetic shown in the reference screenshot.

#### Acceptance Criteria

1. THE Cover_Page SHALL NOT display any ornament SVG images at the top or bottom of the layout
2. THE Cover_Page SHALL NOT display an "UNDANGAN" heading text
3. THE Cover_Page SHALL NOT display a date text on the cover page
4. THE Cover_Page SHALL arrange content in two groups: Couple_Names at the top, and guest information with the Open_Button at the bottom

### Requirement 6: Guest Information Section

**User Story:** As a wedding guest, I want to see my name on the invitation cover, so that I know the invitation is personally addressed to me.

#### Acceptance Criteria

1. THE Cover_Page SHALL display the text "Kepada Bapak/Ibu/Saudara/i." in a lighter/gray color (approximately white with 70-80% opacity) above the Guest_Name
2. THE Cover_Page SHALL display the Guest_Name in bold white text below the greeting line
3. WHEN no guest name is provided, THE Cover_Page SHALL display "Tamu Undangan" as the default Guest_Name
4. THE guest greeting text and Guest_Name SHALL use the Garet_Font

### Requirement 7: Buka Undangan Button

**User Story:** As a wedding guest, I want a clear and attractive button to open the invitation, so that I know how to proceed to view the full invitation.

#### Acceptance Criteria

1. THE Open_Button SHALL display the text "Buka Undangan" with an envelope icon to the left of the text
2. THE Open_Button SHALL have a pill/rounded-full shape with a subtle white border
3. THE Open_Button SHALL use a semi-transparent background (white with low opacity) with a backdrop blur effect
4. WHEN the user hovers over the Open_Button, THE Open_Button SHALL transition to a white background with dark text
5. WHEN the user clicks the Open_Button, THE Cover_Page SHALL trigger the onOpen callback to reveal the full invitation
6. THE Open_Button text SHALL use the Garet_Font

### Requirement 8: Disclaimer Text

**User Story:** As the couple, I want a small disclaimer at the bottom of the cover page, so that guests understand any name/title errors are unintentional.

#### Acceptance Criteria

1. THE Cover_Page SHALL display the text "*Mohon maaf bila ada kesalahan nama/gelar" below the Open_Button
2. THE disclaimer text SHALL be rendered in a small font size (approximately 8-9px) with reduced opacity (approximately 70% white)
3. THE disclaimer text SHALL use the Garet_Font

### Requirement 9: Entrance Animations and Transitions

**User Story:** As a wedding guest, I want the cover page elements to appear with smooth animations, so that the invitation feels polished and engaging.

#### Acceptance Criteria

1. WHEN the Cover_Page loads, THE Couple_Names SHALL fade in and slide down from above with a staggered delay
2. WHEN the Cover_Page loads, THE guest information section (greeting text, Guest_Name, Open_Button, and disclaimer) SHALL fade in and slide up from below with a staggered delay
3. THE Entrance_Animation SHALL use Framer Motion for all animation orchestration
4. WHEN the user clicks the Open_Button, THE Cover_Page SHALL fade out smoothly using the Exit_Animation before revealing the invitation content
5. THE Exit_Animation SHALL have a duration of approximately 0.8 seconds with an ease-in-out easing curve

### Requirement 10: Custom Font Registration

**User Story:** As a developer, I want the Brittany and Garet fonts properly loaded and registered in the application, so that they render correctly across all browsers and devices.

#### Acceptance Criteria

1. THE Font_Loader SHALL load the Brittany_Font from a local font file stored in the project (e.g., public/fonts/ directory)
2. THE Font_Loader SHALL load the Garet_Font from a local font file stored in the project (e.g., public/fonts/ directory)
3. THE Font_Loader SHALL register both fonts via @font-face declarations in the global CSS or via Next.js local font loading
4. THE Tailwind configuration SHALL include font family entries for both Brittany_Font (e.g., `font-brittany`) and Garet_Font (e.g., `font-garet`)
5. IF a custom font file fails to load, THEN THE Cover_Page SHALL fall back to a similar system font (cursive for Brittany_Font, sans-serif for Garet_Font)

### Requirement 11: Default Couple Names Update

**User Story:** As the couple (Satria & Heppa), I want our names to be the default couple names throughout the application, so that the invitation reflects our identity.

#### Acceptance Criteria

1. THE Cover_Page SHALL use "Satria" as the default groom name and "Heppa" as the default bride name
2. WHEN the URL slug provides different names, THE Cover_Page SHALL use the URL-provided names instead of the defaults
