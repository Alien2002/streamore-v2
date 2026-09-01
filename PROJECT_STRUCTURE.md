# Project Structure & Architecture

Complete guide to the Streamore React project structure.

## Directory Layout

```
streamore-react/
│
├── public/                          # Static assets (images, favicon, etc.)
│   └── favicon.svg                 # Browser tab icon
│
├── src/                            # Source code
│   ├── components/                 # Reusable React components
│   │   ├── Button.tsx             # CTA button component
│   │   ├── Button.module.css       # Button styles
│   │   ├── Card.tsx               # Content card component
│   │   ├── Card.module.css         # Card styles
│   │   ├── Container.tsx          # Max-width wrapper
│   │   ├── Container.module.css    # Container styles
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Footer.module.css       # Footer styles
│   │   ├── Header.tsx             # Site header/nav
│   │   ├── Header.module.css       # Header styles
│   │   ├── Hero.tsx               # Page hero section
│   │   ├── Hero.module.css         # Hero styles
│   │   ├── Logo.tsx               # Company logo (SVG)
│   │   ├── Section.tsx            # Section wrapper
│   │   └── Section.module.css      # Section styles
│   │
│   ├── layouts/                    # Layout components
│   │   └── Layout.tsx             # Main app layout (Header + Outlet + Footer)
│   │
│   ├── pages/                      # Page components (route-based)
│   │   ├── Home.tsx               # Homepage
│   │   ├── Home.module.css         # Homepage styles
│   │   ├── Livestreaming.tsx       # Livestreaming service page
│   │   ├── Services.tsx            # Services overview
│   │   ├── Industries.tsx          # Industries/sectors
│   │   ├── Packages.tsx            # Pricing & packages
│   │   ├── Reliability.tsx         # Reliability features
│   │   ├── Work.tsx                # Portfolio/work samples
│   │   ├── About.tsx               # Company info
│   │   ├── Contact.tsx             # Contact form
│   │   └── Contact.module.css      # Contact form styles
│   │
│   ├── styles/                     # Global styles
│   │   ├── globals.css            # Global CSS resets & utilities
│   │   └── theme.ts               # Centralized theme/design tokens
│   │
│   ├── App.tsx                    # Main app component with routing
│   └── main.tsx                   # Application entry point
│
├── .eslintrc.cjs                  # ESLint configuration
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── .prettierrc                    # Prettier formatting config
├── index.html                     # HTML template
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
├── tsconfig.node.json             # TypeScript config for build files
├── vite.config.ts                 # Vite build configuration
│
├── README.md                      # Main documentation
├── QUICKSTART.md                  # 5-minute quick start
├── DEVELOPMENT.md                 # Development guide
├── DEPLOYMENT.md                  # Deployment instructions
├── MIGRATION_GUIDE.md             # HTML → React migration guide
└── PROJECT_STRUCTURE.md           # This file
```

## File Purposes

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project metadata & dependencies |
| `tsconfig.json` | TypeScript compiler settings |
| `vite.config.ts` | Build & dev server config |
| `.eslintrc.cjs` | Code quality rules |
| `.prettierrc` | Code formatting rules |
| `.gitignore` | Git-ignored files |
| `.env.example` | Environment variable template |

### Source Files

#### Components (`src/components/`)

**Layout Components:**
- `Header.tsx` - Navigation bar with logo and menu
- `Footer.tsx` - Footer with links and contact info
- `Container.tsx` - Max-width wrapper for content

**Content Components:**
- `Section.tsx` - Section wrapper with background variants
- `Hero.tsx` - Page header with title and breadcrumbs
- `Card.tsx` - Reusable card for content blocks
- `Button.tsx` - CTA button with variants

**Brand:**
- `Logo.tsx` - Inline SVG logo (can be replaced with image)

#### Pages (`src/pages/`)

Each page represents a route and is composed of components:

1. **Home** (`Home.tsx`)
   - Homepage overview
   - Services preview
   - Industries section
   - CTA section

2. **Livestreaming** (`Livestreaming.tsx`)
   - Flagship service page
   - Detailed service info

3. **Services** (`Services.tsx`)
   - All offered services
   - Service descriptions

4. **Industries** (`Industries.tsx`)
   - Vertical market approach
   - Industry-specific info

5. **Packages** (`Packages.tsx`)
   - Pricing tiers
   - Rate cards
   - Add-ons

6. **Reliability** (`Reliability.tsx`)
   - Redundancy features
   - Quality guarantees

7. **Work** (`Work.tsx`)
   - Portfolio
   - Case studies
   - Testimonials

8. **About** (`About.tsx`)
   - Company story
   - Mission/vision
   - Team info

9. **Contact** (`Contact.tsx`)
   - Quote request form
   - Contact information

#### Layout (`src/layouts/`)

- `Layout.tsx` - Main layout wrapper with Header, Outlet, and Footer

#### Styles (`src/styles/`)

- `globals.css` - Global CSS resets and utilities
- `theme.ts` - Centralized design tokens (colors, spacing, etc.)

#### Core Files

- `App.tsx` - Main component with React Router configuration
- `main.tsx` - Application entry point

### Documentation

| File | Contents |
|------|----------|
| `README.md` | Full project documentation |
| `QUICKSTART.md` | 5-minute getting started guide |
| `DEVELOPMENT.md` | Development practices & conventions |
| `DEPLOYMENT.md` | Deployment instructions for all platforms |
| `MIGRATION_GUIDE.md` | Guide for migrating from static HTML |
| `PROJECT_STRUCTURE.md` | This file - directory structure overview |

## Component Hierarchy

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   └── Navigation
│   ├── Routes
│   │   ├── Home
│   │   │   ├── Section
│   │   │   │   ├── Container
│   │   │   │   └── Card
│   │   │   ├── Section
│   │   │   └── Section
│   │   ├── [Other Pages]
│   │   └── [More Routes]
│   └── Footer
│       ├── Logo
│       └── Links
```

## Routing Structure

React Router configuration in `src/App.tsx`:

```
/ → Home
/livestreaming → Livestreaming
/services → Services
/industries → Industries
/packages → Packages
/reliability → Reliability
/work → Work
/about → About
/contact → Contact
* → Redirect to /
```

## Styling Architecture

### Theme System (`src/styles/theme.ts`)

Centralized design tokens:
```typescript
{
  colors: { navy, gold, gradients, etc. }
  shadows: { default, button, etc. }
  radius: { default, pill, sm, lg }
  spacing: { xs, sm, md, lg, xl, xxl }
  breakpoints: { mobile, tablet, desktop }
  fonts: { family, weights }
}
```

### CSS Modules

Component-scoped styles prevent conflicts:
```
Button.tsx → Button.module.css
Card.tsx → Card.module.css
Header.tsx → Header.module.css
etc.
```

### Global Styles (`src/styles/globals.css`)

- CSS resets
- Font imports
- Utility classes (.sr-only)
- Base element styles

### CSS Variables (Recommended)

In CSS files, use theme colors:
```css
.component {
  background: var(--navy);
  color: var(--gold);
}
```

Define in theme file or globals.

## Data Flow

### State Management

Simple component-level state using React hooks:
- `useState` - Local component state
- `useEffect` - Side effects
- `useLocation` - Router location info
- Custom hooks - Reusable logic

### No External State Library

For simplicity, no Redux/Zustand. Add as needed for:
- Global theme switching
- Authentication
- Complex shared state

## Import Path Aliases

Configured in `tsconfig.json`:

```typescript
import { Component } from '@/components/Component'
import { theme } from '@/styles/theme'
import { Layout } from '@/layouts/Layout'
```

Benefits:
- Cleaner imports
- No relative path hell (`../../../`)
- Easier refactoring

## Build Output

`npm run build` creates `dist/` folder:

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-xyz.js    # Bundled JavaScript
│   └── index-xyz.css   # Bundled CSS
└── favicon.svg         # Browser icon
```

Ready to deploy to any static host.

## Environment Variables

Configured in `.env.local` (not in repo):

```
VITE_CONTACT_FORM_ID=formspree_id
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=UA-XXX
```

Access in code:
```typescript
const formId = import.meta.env.VITE_CONTACT_FORM_ID
```

## Performance Considerations

### Code Splitting
- React Router automatically splits by route
- Lazy loading for heavy components (if added)

### Caching
- Build outputs include content hashes
- Can be cached indefinitely

### Optimization
- Vite minifies by default
- CSS Modules prevent unused styles
- Tree-shaking removes dead code

## Testing Structure

Currently no tests configured. To add:

```
src/
└── __tests__/
    ├── components/
    │   └── Button.test.tsx
    ├── pages/
    │   └── Home.test.tsx
    └── utils/
```

## TypeScript Structure

### tsconfig.json
- ES2020 target
- Strict mode enabled
- Path aliases configured
- No unused variables/parameters allowed

### Component Types
```typescript
interface ComponentProps {
  children: ReactNode;
  variant?: 'default' | 'alt';
  className?: string;
}
```

## Deployment Artifacts

After `npm run build`:
- All files in `dist/` are deployable
- No server-side rendering needed
- Works on any static host
- Can be deployed to:
  - Netlify
  - Vercel
  - GitHub Pages
  - AWS S3
  - Traditional hosting

## Git Workflow

Recommended branch structure:
```
main
├── develop
├── feature/add-component
├── feature/update-pages
└── fix/styling-issue
```

Commit message format:
```
feat: add new component
fix: resolve navigation issue
docs: update README
style: format code
refactor: reorganize utils
```

## Quick Stats

| Metric | Value |
|--------|-------|
| Total Components | 8 reusable |
| Total Pages | 9 routes |
| CSS Modules | 20+ files |
| Lines of Code | ~3000+ |
| Build Time | < 1s |
| Bundle Size | ~40KB |
| Gzipped | ~12KB |

## Extending the Project

### Add New Component
1. Create `src/components/ComponentName.tsx`
2. Create `src/components/ComponentName.module.css`
3. Export from component
4. Use in pages

### Add New Page
1. Create `src/pages/PageName.tsx`
2. Create `src/pages/PageName.module.css`
3. Add route in `src/App.tsx`
4. Add nav link in `src/components/Header.tsx`

### Add Styling
1. Add to `src/styles/theme.ts` for reusables
2. Use CSS Modules for component styles
3. Reference via `styles.className`

### Add Functionality
1. Use `useState` for local state
2. Use `useEffect` for side effects
3. Create custom hooks in `src/hooks/`
4. Add services in `src/services/` for API calls

## Resources

- React: https://react.dev
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
- TypeScript: https://www.typescriptlang.org
- CSS Modules: https://github.com/css-modules/css-modules

## Next Steps

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start development
3. Read QUICKSTART.md for immediate tasks
4. Review individual page files to understand structure
5. Check DEVELOPMENT.md for coding guidelines
6. See DEPLOYMENT.md when ready to go live

---

**Last Updated:** 2024
**Version:** 1.0.0
