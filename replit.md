# TechSol - Modern Tech Solutions Website

## Overview

TechSol is a full-stack web application built as a modern tech solutions company website with cutting-edge UI/UX design. It features a React frontend with TypeScript, an Express.js backend, and PostgreSQL database integration using Drizzle ORM. The application provides services showcasing, course offerings with enhanced features, dynamic customer reviews, and contact functionality with Google Sheets integration.

### Recent Changes (July 28, 2025)
- ✓ Removed mentor sessions and pricing from courses section  
- ✓ Removed newsletter signup from footer
- ✓ Applied modern 2025 UI/UX design trends including holographic text effects
- ✓ Enhanced glassmorphism effects with better blur and transparency
- ✓ Added animated gradient text and neon border effects
- ✓ Improved course cards with feature lists and better layout
- ✓ Modernized footer with better navigation and social media integration
- ✓ Added statistics display in hero section
- ✓ Enhanced animations and hover effects throughout the site

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Styling**: Tailwind CSS with custom CSS variables for a dark tech theme
- **UI Components**: Radix UI components with shadcn/ui design system
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database & ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with drizzle-kit for migrations
- **Schema Location**: `shared/schema.ts` for type-safe database definitions
- **Connection**: Uses `@neondatabase/serverless` for serverless PostgreSQL

### Build & Development Tools
- **Build Tool**: Vite with React plugin
- **Development Server**: Integrated Vite dev server with Express in development
- **TypeScript**: Strict mode enabled with path mapping
- **Linting**: TypeScript compiler for type checking

## Key Components

### Database Schema
Located in `shared/schema.ts`:
- **Users**: Basic user management with username/password
- **Reviews**: Customer testimonials with ratings and metadata
- **Contacts**: Contact form submissions with service selection

### API Routes (`server/routes.ts`)
- `GET /api/reviews`: Fetch all customer reviews
- `POST /api/reviews`: Create new review submissions
- `POST /api/contact`: Handle contact form submissions with Google Sheets integration

### Storage Layer (`server/storage.ts`)
- In-memory storage implementation with interface for easy database switching
- Pre-seeded with sample reviews for demonstration
- Supports users, reviews, and contacts management

### Frontend Pages & Components
- **Single Page Application**: All content on one scrollable page
- **Navigation**: Smooth scrolling navigation with glass morphism effects
- **Sections**: Hero, Services, Courses, Reviews, Contact, Footer
- **Design**: Dark theme with neon accents and glass card effects

### UI Design System
- **Theme**: Dark tech aesthetic with blue/green accent colors
- **Components**: Custom glass cards, neon buttons, and animated elements
- **Responsive**: Mobile-first design with Tailwind CSS
- **Animations**: CSS-based animations for modern feel

## Data Flow

1. **Frontend to Backend**: React Query handles API calls with automatic caching
2. **Form Submissions**: React Hook Form validates data using Zod schemas before API calls
3. **Database Operations**: Express routes use storage interface for data persistence
4. **Google Sheets Integration**: Contact submissions are sent to Google Sheets via API
5. **Real-time Updates**: Query invalidation ensures fresh data after mutations

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL driver

### UI & Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Lucide React and React Icons for iconography

### Development Tools
- Vite for fast development and building
- TypeScript for type safety
- Zod for runtime validation

### External Services
- **Google Sheets API**: For contact form data collection
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development
- Uses Vite dev server integrated with Express backend
- Hot module replacement for fast development iteration
- TypeScript compilation and error checking

### Production Build
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Database: Drizzle migrations applied via `db:push` command

### Environment Configuration
- PostgreSQL connection via `DATABASE_URL` environment variable
- Google Sheets API credentials for contact integration
- Production optimizations for both frontend and backend builds

### Hosting Considerations
- Static assets served from `dist/public`
- Express server handles API routes and SPA fallback
- Database migrations managed through Drizzle Kit
- Environment variables required for database and Google Sheets integration