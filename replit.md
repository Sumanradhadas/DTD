# Digital Tech Drive - Replit Agent Guide

## Overview

Digital Tech Drive is a modern, AI-powered skill development center website for an educational institution in Lakhisarai, Bihar, India. The platform showcases training programs (KYP, DEEP, ADCA) with 90+ courses and features an AI-powered course recommendation system using Google's Gemini API. The website emphasizes vibrant, animated design with a "colorful light flow" aesthetic inspired by Google's clean design mixed with MKCL's vibrancy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (not React Router)
- TanStack Query (React Query) for server state management
- Framer Motion for sophisticated animations and transitions

**UI Component System:**
- Shadcn/ui component library (New York style variant) for consistent, accessible UI primitives
- Radix UI primitives as the foundation for all interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color palette system featuring multi-color gradients (red → orange → yellow → green → teal → blue → indigo → purple → magenta)

**Design Philosophy:**
- "Colorful Light Flow" - light backgrounds with animated gradient overlays
- AI-first experience with Gemini-powered course selector as centerpiece
- Vibrant, youth-focused design with purposeful animations on every section
- Mobile-responsive grid layouts (4 columns desktop → 2 tablet → 1 mobile)

**Animation Strategy:**
- Entry animations: fade-in, slide-up, sequential reveals
- Hover states: lift effects, glow, smooth color transitions
- Scroll-triggered animations using Framer Motion viewport detection
- Hero slider with 5-second auto-rotation and smooth transitions

**Page Structure:**
1. Home - Hero slider, course overview cards, "Why Choose Us" section
2. Courses - Filterable course catalog with 90+ courses across programs
3. About - Institution story, mission/vision, milestone timeline
4. Contact - Contact form, location details, embedded map
5. Global AI Assistant - Floating popup accessible from all pages

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- TypeScript for type-safe server code
- Session-based architecture with in-memory storage (MemStorage class)

**API Design:**
- RESTful endpoint pattern
- Single AI chat endpoint: `POST /api/ai/chat`
- Request/response logging middleware for debugging
- Error handling with structured JSON responses

**AI Integration:**
- Google Gemini API (@google/genai package) for course recommendations
- Conversational AI with maintained conversation history
- System prompt engineered for career advisor persona with knowledge of all 90+ courses
- Context-aware responses based on student background (education level, interests)

**Server Architecture Decisions:**
- Vite middleware integration for seamless dev/prod experiences
- Single server file handles both API routes and static asset serving
- Runtime error overlay in development (Replit-specific tooling)
- Custom logger with timestamp formatting

### Data Storage Solutions

**Database Schema:**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Schema location: `shared/schema.ts` for type sharing between client/server
- Current schema: Basic user table with username/password (authentication foundation)
- Connection pooling via @neondatabase/serverless

**Database Architecture:**
- Environment-based configuration (DATABASE_URL required)
- Migration system via drizzle-kit (migrations output to `/migrations`)
- Type-safe queries using Drizzle ORM
- Prepared for course catalog storage (not yet implemented - currently using static data)

**Data Models:**
- User model: id (UUID), username (unique), password
- Course data currently hardcoded in `shared/courses.ts` (90+ course objects)
- Course structure: id, name, program (KYP/DEEP/ADCA), track, duration, description, icon, color, popular flag

**Storage Strategy Decision:**
- In-memory storage (MemStorage) for current session/user data
- PostgreSQL ready for persistent data when needed
- Static course data allows for fast iteration without database complexity
- Session store configured via connect-pg-simple (ready for PostgreSQL sessions)

### Authentication and Authorization

**Current Implementation:**
- Basic user schema defined but authentication not fully implemented
- Session framework in place (express-session compatible)
- User creation and lookup methods in MemStorage
- Password stored as plaintext (needs hashing implementation before production)

**Planned Architecture:**
- Session-based authentication (not JWT)
- Cookie-based session management
- Role-based access control structure prepared in schema
- No public user registration - admin-managed accounts expected

### External Dependencies

**AI/ML Services:**
- **Google Gemini API** - Primary AI service for course recommendations
  - API key required via GEMINI_API_KEY environment variable
  - Model: Gemini Pro (text generation)
  - Use case: Conversational career advisor, personalized course matching
  - System prompt includes full course catalog (90+ DEEP courses + KYP + ADCA)

**Database & Infrastructure:**
- **Neon PostgreSQL** - Serverless PostgreSQL hosting
  - Connection via DATABASE_URL environment variable
  - Serverless driver: @neondatabase/serverless (supports connection pooling)
  - Used with Drizzle ORM for type-safe queries

**Design Assets:**
- Generated images stored in `/attached_assets/generated_images/`
- AI assistant icon, hero slider images, course visuals
- Custom logo (DTD initials in gradient circle)

**Build & Development Tools:**
- **Replit-specific plugins:**
  - @replit/vite-plugin-runtime-error-modal
  - @replit/vite-plugin-cartographer
  - @replit/vite-plugin-dev-banner
- **Tailwind CSS** with PostCSS for processing
- **ESBuild** for server bundle production builds

**Third-Party UI Libraries:**
- Radix UI component primitives (20+ components: Dialog, Dropdown, Select, Toast, etc.)
- Embla Carousel for hero slider functionality
- CMDK for command palette patterns
- Lucide React for consistent iconography (200+ icons used)
- Class Variance Authority for component variant management

**Fonts:**
- Google Fonts: Poppins (primary), Inter, DM Sans, Fira Code, Geist Mono
- Loaded via CDN in HTML head

**Environment Variables Required:**
```
DATABASE_URL=<neon-postgres-connection-string>
GEMINI_API_KEY=<google-ai-api-key>
NODE_ENV=development|production
```

**Course Data Structure:**
- 12 DEEP tracks: Software Development, Data Science, Digital Designing, Digital Creative Art, Digital Freelancing, Back Office, Front Office, Financial Accounting, CAD Careers, IT Hardware/Networking/Cyber Security, Services Management, Special Programs
- 90+ total courses across all programs
- Each course: duration (30-180 hours), icon (Lucide component), color accent, track assignment
- Popular courses flagged for homepage display