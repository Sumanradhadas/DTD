# Digital Tech Drive - Design Guidelines

## Design Approach
**Reference-Based + Custom Approach**: Inspired by Google's clean aesthetic mixed with MKCL's vibrancy, creating a modern, colorful, and futuristic educational platform with AI-powered interactivity.

## Core Design Principles
- **Colorful Light Flow**: Light backgrounds with animated gradient overlays and smooth transitions
- **AI-First Experience**: Gemini-powered course selector as the centerpiece feature
- **Vibrant & Alive**: Every section should feel dynamic with purposeful animations
- **Youth-Focused**: Modern, energetic, and approachable design language

## Color Palette
**Primary Multi-Color Gradient System**:
- Red (#FF3B30) → Orange (#FF9500) → Yellow (#FFD60A) → Lime Green (#34C759) → Teal (#00796B) → Blue (#0A84FF) → Indigo (#5856D6) → Purple (#AF52DE) → Magenta (#FF2D55)

**Base Colors**:
- Background: White / Soft Grey (#f9f9f9)
- Text: Deep Grey / Black for readability
- Course-Specific Accents: KYP-Orange, DEEP-Blue, ADCA-Green

**Gradient Applications**:
- Linear gradients for buttons and CTAs: `linear-gradient(90deg, #FF9500, #0A84FF, #AF52DE)`
- Smooth hue shifts on hover
- Animated gradient borders for AI assistant and featured elements

## Typography
- **Font Family**: Poppins / Inter (clean, rounded, modern)
- **Hierarchy**: Large, bold headlines with animated fade-ins; body text in deep grey for readability

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
**Container Widths**: max-w-7xl for full sections, max-w-6xl for content areas

## Component Library

### Navigation
- Fixed header with logo left, menu center, "Call Now" button right
- Gradient underline on active menu items
- Slides down on load, shrinks on scroll

### Hero Sections
- Full-width sliders (1366×351px) with 5-7 rotating images
- Overlay text with multi-color gradient backgrounds
- Animated fade-in text lines with bounce-in buttons
- Smooth horizontal slide transitions every 5 seconds

### Course Cards
- Grid layout: 3-4 per row desktop, 2 tablet, 1 mobile
- Colored top ribbon matching track
- Icon + Course name + Duration + Description + Buttons
- Sequential slide-up animation on scroll
- Hover: lift + colored glow shadow matching track color

### AI Assistant
- **Floating Button**: Bottom-right, pulsating glow animation
- **Chat Modal**: Glassmorphism effect with gradient-glow border (Blue → Pink → Orange)
- **Interaction**: Slide-up popup, typing dots animation, letter-by-letter responses
- **Multi-choice Cards**: For questionnaire responses

### Modals/Popups
- Centered with blurred background
- Zoom-in entry animation
- Course details with AI-generated descriptions

### Buttons
- Gradient glow pulse (Orange → Blue → Pink)
- Subtle animation loop
- Color-specific for each course track

### Timeline
- Horizontal or vertical scrollable
- Multi-color gradient dots per milestone
- Sequential bounce-in animation for nodes

### Gallery
- Masonry grid layout
- Zoom-in on scroll, lightbox on click
- Border-radius: 10px with soft shadows

## Animation Strategy

**Page Load**: Gradient shimmer → Logo zoom + fade → Content slide-up

**Scroll Triggers** (using AOS/Framer Motion):
- Fade-in: About sections, text blocks
- Slide-up: Course cards (sequential)
- Slide-left/right: Two-column layouts
- Scale + glow: Icon grids, team cards
- Bounce: Timeline nodes, buttons

**Interactive**:
- Hover lifts: Cards elevate with shadow glow
- Color transitions: Gradient shifts on button hover
- Typing effect: AI chat responses
- Carousel auto-scroll: Featured courses

**Specific Timings**:
- Hero slider: 5-second intervals
- Card sequence delay: 100-150ms between each
- Hover transitions: 300ms ease
- Modal animations: 400ms

## Page-Specific Guidelines

### Homepage
- Hero slider with colorful overlay gradients
- 3-card courses overview (KYP/DEEP/ADCA)
- Prominent AI Career Advisor section with gradient background
- Masonry gallery grid
- Contact section: two-column (info left, map right)

### DEEP Courses Page
- Full-width gradient header (Blue → Violet → Pink)
- 12 Skill Tracks circular/grid layout with rainbow colors
- Filter bar with search + dropdowns
- 80+ course cards in responsive grid
- Featured courses carousel
- Embedded AI advisor chat section

### KYP & ADCA Pages
- Program-themed hero images
- About program two-column layout
- 6-10 course cards with track-specific colors
- CTA banner at bottom

### About Page
- Animated milestone timeline (2017-2024)
- Team section with photo grid
- Mission/Vision/Values with icon animations

### Contact Page
- Two-column: Contact form left, Google Map right
- Form fields glow on focus
- Icons pulse on hover

## Images
**Hero Sections**: All pages feature full-width hero banners (1366×351px)
- Homepage: Rotating 5-7 images (students, labs, certificates, DEEP/MKCL branding)
- DEEP: Students learning, AI/tech imagery
- KYP: Youth digital skills training
- ADCA: Computer lab, certification events
- About: Classroom/institute photos
- Contact: Professional/welcoming imagery

**Content Images**:
- About sections: Institute photos, instructor images
- Gallery: Masonry grid of training sessions, events, awards
- Team: Instructor headshots with cards

**Image Treatment**: Subtle parallax, zoom-in animations, gradient overlays for text readability

## Accessibility
- High contrast text (deep grey/black on white)
- Focus states with gradient glows
- Keyboard navigation support
- Clear visual hierarchy

## Technical Notes
- Framework: React + Vite + TailwindCSS
- Animations: Framer Motion + AOS (Animate On Scroll)
- Carousel: Swiper.js
- Icons: Lucide-react / Heroicons
- AI Integration: Gemini API for course recommendations