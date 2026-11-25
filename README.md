# Sarthak Satpute | Full-Stack Software Engineer Portfolio

An immersive, story-driven 3D animated developer portfolio built with React, TypeScript, and Three.js. Experience a cinematic journey through my development career — from curiosity to creation.

## Live Demo

[https://sarthaksatpute.dev](https://sarthaksatpute.dev)

## Tech Stack

- **React 19** + **TypeScript** — UI framework with type safety
- **Vite** — Fast build tool and dev server
- **Tailwind CSS v4** — Utility-first styling with custom theme system
- **Framer Motion** — UI animations and transitions
- **GSAP + ScrollTrigger** — Scroll-based story animations
- **Three.js** + **React Three Fiber** + **Drei** — Immersive 3D scenes
- **Lucide React** — Icon library
- **React Router DOM** — Client-side routing

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Sidebar, JourneyPanel, Layout
│   ├── story/           # SectionWrapper, SupplyChainVisual, BuildVisual
│   ├── three/           # HeroScene, FutureScene, StarField
│   └── ui/              # Reusable UI components
├── sections/
│   ├── Initialize/      # Boot sequence + hero
│   ├── Origin/          # Chapter 01
│   ├── Learn/           # Chapter 02 - Skills
│   ├── Build/           # Chapter 03
│   ├── Challenge/       # Chapter 04
│   ├── Solution/        # Chapter 05 - AgriChain
│   ├── Test/            # Chapter 06
│   ├── Universe/        # Chapter 07 - Projects
│   ├── Today/           # Chapter 08
│   └── Future/          # Chapter 09 + Contact
├── data/                # projects.ts, skills.ts, journey.ts
├── hooks/               # useScrollSpy, useReducedMotion, useTheme
├── types/               # TypeScript interfaces
├── utils/               # Helper functions, theme utilities
├── styles/              # Global CSS with theme variables
├── lib/                 # GSAP animation utilities
└── assets/              # Images, SVGs
```

## Environment Variables

Copy `.env.example` to `.env` and configure as needed:

```env
# Supabase (optional - for contact form backend)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email (optional - for contact form)
VITE_EMAIL_SERVICE=your_email_service
VITE_EMAIL_API_KEY=your_email_api_key
```

## Key Features

- Cinematic boot sequence with typing animation
- Immersive 3D hero scene with Three.js and mouse parallax
- 10 story-driven chapters with scroll-linked transitions
- Interactive project modals and case studies
- Animated supply chain visualization (AgriChain)
- Skill unlock animations with category filtering
- Responsive sidebar navigation with journey progress tracking
- Glassmorphism UI with neon glow effects
- Terminal-style contact form with validation
- Full accessibility support with reduced-motion respect
- Dark/Light theme toggle with persistence
- SEO optimized with meta tags, sitemap, and structured data

## Performance

- Code-split Three.js and animation vendors
- Lazy-loaded 3D scenes
- Reduced particle counts for lightweight starfields
- Optimized R3F geometries and materials
- Compressed assets and efficient chunking

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

WebGL is required for 3D scenes. A static fallback UI is provided for unsupported browsers.

## License

MIT
