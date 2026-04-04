# Requirements Document

## Introduction

A wedding invitation website clone based on the Aswana Premium Template from nauhin.com. The site is a single-page Balinese wedding invitation for "Gung Gus & Sonia" built with Next.js (App Router) and Tailwind CSS. It features an opening overlay, hero section, couple introduction, event details, countdown timer, love story timeline, RSVP form, wishes form, wedding gift info, photo gallery, and a background music player. All content is in Indonesian language. The site must be fully responsive across mobile, tablet, and desktop viewports.

## Glossary

- **Wedding_App**: The Next.js application serving the wedding invitation website
- **Cover_Overlay**: The full-screen opening overlay displayed on initial page load, containing the couple's names, guest greeting, and "Buka Undangan" button
- **Hero_Section**: The main hero area displayed after the overlay is dismissed, showing couple names, wedding date, and a blessing quote
- **Couple_Section**: The section introducing the bride and groom with their full names, family details, and addresses
- **Events_Section**: The section displaying wedding ceremony and reception details including date, time, and location
- **Countdown_Timer**: A live countdown component that calculates and displays remaining days, hours, minutes, and seconds until the wedding date (April 9, 2025)
- **Timeline_Section**: A vertical timeline displaying the couple's love story milestones
- **RSVP_Form**: A form allowing guests to confirm their attendance
- **Wishes_Form**: A form allowing guests to submit congratulatory messages
- **Gift_Section**: A section displaying bank transfer details with a copy-to-clipboard button for the account number
- **Gallery_Section**: A photo gallery section displaying wedding photos in a grid layout
- **Music_Player**: A persistent audio player that plays background music and provides play/pause controls
- **Footer**: The bottom section containing credits and the music player control
- **Guest**: A person visiting the wedding invitation website

## Requirements

### Requirement 1: Project Scaffolding

**User Story:** As a developer, I want the project scaffolded with Next.js App Router and Tailwind CSS, so that I can build and run the wedding website locally.

#### Acceptance Criteria

1. THE Wedding_App SHALL use Next.js with the App Router and TypeScript
2. THE Wedding_App SHALL use Tailwind CSS for all styling
3. THE Wedding_App SHALL include a valid package.json with all required dependencies
4. THE Wedding_App SHALL include a valid tsconfig.json for TypeScript compilation
5. THE Wedding_App SHALL include a valid Tailwind CSS configuration file

### Requirement 2: Cover Overlay

**User Story:** As a guest, I want to see a beautiful opening overlay when I first visit the site, so that I feel welcomed to the wedding invitation.

#### Acceptance Criteria

1. WHEN the page loads, THE Cover_Overlay SHALL display as a full-screen overlay above all other content
2. THE Cover_Overlay SHALL display the text "The Wedding of" followed by the couple names "Gung Gus & Sonia"
3. THE Cover_Overlay SHALL display a guest greeting with the text "Kepada Bpk/Ibu/Saudara/i" and "Tamu Undangan"
4. THE Cover_Overlay SHALL display a "Buka Undangan" button
5. THE Cover_Overlay SHALL display a disclaimer text "*Mohon maaf apabila ada kesalahan penulisan nama/gelar"
6. WHEN the Guest clicks the "Buka Undangan" button, THE Cover_Overlay SHALL dismiss with a fade-out transition revealing the main content beneath
7. WHEN the Guest clicks the "Buka Undangan" button, THE Music_Player SHALL begin playing background audio automatically

### Requirement 3: Hero Section

**User Story:** As a guest, I want to see the couple's names and wedding date prominently, so that I know whose wedding I am invited to and when it takes place.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the couple names "Gung Gus & Sonia" in a prominent decorative font
2. THE Hero_Section SHALL display the wedding date "Rabu, 09 April 2025"
3. THE Hero_Section SHALL display a prayer/blessing quote from Rgveda X.85.42
4. THE Hero_Section SHALL use a background image or decorative styling consistent with the reference design

### Requirement 4: Couple Introduction

**User Story:** As a guest, I want to learn about the bride and groom, so that I can know more about the couple getting married.

#### Acceptance Criteria

1. THE Couple_Section SHALL display a "Meet the Couple" heading or equivalent introductory text
2. THE Couple_Section SHALL display the groom's full name "Anak Agung Gde Bagus Artha Wiguna, S.Tr.AB", his birth order, parents' names, and address
3. THE Couple_Section SHALL display the bride's full name "I Gusti Ayu Agung Sonia Shafna, S.Tr.Akt., M.Ak", her birth order, parents' names, and address
4. THE Couple_Section SHALL display an "&" separator between the groom and bride profiles
5. THE Couple_Section SHALL include circular photo placeholders for each person

### Requirement 5: Wedding Events

**User Story:** As a guest, I want to see the ceremony and reception details, so that I know when and where to attend.

#### Acceptance Criteria

1. THE Events_Section SHALL display a "When & Where" heading
2. THE Events_Section SHALL display the Wedding Ceremony details including date, time "Pukul 13.00 - Selesai", and location
3. THE Events_Section SHALL display the Wedding Reception details including date, time "Pukul 13.00 - Selesai", and location
4. THE Events_Section SHALL visually separate the ceremony and reception information into distinct cards or blocks

### Requirement 6: Countdown Timer

**User Story:** As a guest, I want to see a live countdown to the wedding day, so that I can feel the excitement building up to the event.

#### Acceptance Criteria

1. THE Countdown_Timer SHALL display remaining days, hours, minutes, and seconds until April 9, 2025
2. THE Countdown_Timer SHALL update every second in real time
3. WHEN the wedding date has passed, THE Countdown_Timer SHALL display zero for all units
4. THE Countdown_Timer SHALL display an inspirational quote about love above and below the timer
5. THE Countdown_Timer SHALL render on the client side only to avoid hydration mismatches


### Requirement 7: Love Story Timeline

**User Story:** As a guest, I want to read the couple's love story, so that I can appreciate their journey together.

#### Acceptance Criteria

1. THE Timeline_Section SHALL display a "How It All Began" heading
2. THE Timeline_Section SHALL display four milestones in a vertical timeline layout:
   - "Awal Bertemu" (First Meeting) with a description about meeting at a campus event
   - "Menjalin Hubungan" (Dating) with a description about deciding to be together
   - "Berkomitmen" (Commitment) with a description about discussing their future
   - "Menikah" (Marriage) with a description about starting a new chapter
3. THE Timeline_Section SHALL alternate milestone positions (left/right) on desktop viewports
4. THE Timeline_Section SHALL stack milestones vertically on mobile viewports

### Requirement 8: RSVP Form

**User Story:** As a guest, I want to confirm my attendance, so that the couple can plan accordingly.

#### Acceptance Criteria

1. THE RSVP_Form SHALL display a form with fields for guest name and attendance confirmation
2. WHEN the Guest submits the RSVP_Form with valid data, THE RSVP_Form SHALL display a success confirmation message
3. IF the Guest submits the RSVP_Form with empty required fields, THEN THE RSVP_Form SHALL display a validation error message
4. THE RSVP_Form SHALL include a dropdown or radio selection for attendance status (attending / not attending)

### Requirement 9: Wishes Form

**User Story:** As a guest, I want to send congratulatory wishes to the couple, so that they can read my message.

#### Acceptance Criteria

1. THE Wishes_Form SHALL display a "Send Us Your Wishes" heading
2. THE Wishes_Form SHALL include fields for guest name and message
3. WHEN the Guest submits the Wishes_Form with valid data, THE Wishes_Form SHALL display the submitted wish in a list of wishes below the form
4. IF the Guest submits the Wishes_Form with empty required fields, THEN THE Wishes_Form SHALL display a validation error message
5. THE Wishes_Form SHALL display previously submitted wishes in a scrollable list

### Requirement 10: Wedding Gift

**User Story:** As a guest, I want to see the couple's bank account details, so that I can send a wedding gift via bank transfer.

#### Acceptance Criteria

1. THE Gift_Section SHALL display bank transfer information including bank name, account number, and account holder name
2. THE Gift_Section SHALL display a "Copy" button next to the account number
3. WHEN the Guest clicks the Copy button, THE Gift_Section SHALL copy the account number to the clipboard
4. WHEN the Guest clicks the Copy button, THE Gift_Section SHALL display a brief confirmation that the number was copied

### Requirement 11: Photo Gallery

**User Story:** As a guest, I want to view the couple's wedding photos, so that I can appreciate their special moments.

#### Acceptance Criteria

1. THE Gallery_Section SHALL display an "Our Love in Frame" heading
2. THE Gallery_Section SHALL display an inspirational quote about love
3. THE Gallery_Section SHALL display wedding photos in a responsive grid layout
4. THE Gallery_Section SHALL use placeholder images (or external image URLs) for the photo grid
5. THE Gallery_Section SHALL display a minimum of 6 photos in the grid

### Requirement 12: Closing and Footer

**User Story:** As a guest, I want to see a closing thank-you message, so that I feel appreciated for viewing the invitation.

#### Acceptance Criteria

1. THE Wedding_App SHALL display a closing section with a thank-you message and the couple names "Gung Gus & Sonia"
2. THE Footer SHALL display a "Website Invitation by" credit line
3. THE Footer SHALL contain the Music_Player control

### Requirement 13: Background Music Player

**User Story:** As a guest, I want background music to play while I browse the invitation, so that the experience feels more immersive and celebratory.

#### Acceptance Criteria

1. THE Music_Player SHALL be a persistent floating control visible on all sections of the page
2. WHEN the Guest clicks the "Buka Undangan" button on the Cover_Overlay, THE Music_Player SHALL start playing the background audio file
3. WHEN the Guest clicks the Music_Player control, THE Music_Player SHALL toggle between play and pause states
4. THE Music_Player SHALL loop the audio track continuously
5. THE Music_Player SHALL display a visual indicator of the current play/pause state (e.g., animated icon)

### Requirement 14: Responsive Design

**User Story:** As a guest, I want the website to look great on any device, so that I can view the invitation on my phone, tablet, or computer.

#### Acceptance Criteria

1. THE Wedding_App SHALL render correctly on viewports with a minimum width of 320px (mobile)
2. THE Wedding_App SHALL render correctly on tablet viewports (768px width)
3. THE Wedding_App SHALL render correctly on desktop viewports (1024px width and above)
4. THE Wedding_App SHALL use Tailwind CSS responsive utility classes for layout adjustments across breakpoints
5. THE Wedding_App SHALL ensure all text remains readable and all interactive elements remain tappable on mobile viewports

### Requirement 15: Smooth Scroll Navigation

**User Story:** As a guest, I want smooth scrolling between sections, so that the browsing experience feels polished and seamless.

#### Acceptance Criteria

1. THE Wedding_App SHALL apply smooth scroll behavior to the page
2. WHEN the Guest clicks a navigation link or anchor, THE Wedding_App SHALL scroll smoothly to the target section

### Requirement 16: Visual Design Fidelity

**User Story:** As a developer, I want the design to closely match the reference site, so that the clone is visually faithful to the original template.

#### Acceptance Criteria

1. THE Wedding_App SHALL use a color palette consistent with the reference site (warm gold/brown tones, soft backgrounds)
2. THE Wedding_App SHALL use decorative serif fonts for headings and couple names consistent with the reference design
3. THE Wedding_App SHALL use floral or ornamental decorative elements consistent with the reference design
4. THE Wedding_App SHALL apply fade-in or scroll-triggered animations to sections as the Guest scrolls down the page
