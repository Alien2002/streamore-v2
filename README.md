# Streamore Website - React Version

A production-ready React application for Streamore, a professional livestreaming and event production company in Tanzania.

## Project Structure

```
streamore-react/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   ├── Section.tsx
│   │   └── *.module.css      # Component styles (CSS Modules)
│   ├── layouts/              # Layout components
│   │   └── Layout.tsx
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── Livestreaming.tsx
│   │   ├── Services.tsx
│   │   ├── Industries.tsx
│   │   ├── Packages.tsx
│   │   ├── Reliability.tsx
│   │   ├── Work.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── *.module.css
│   ├── styles/               # Global styles and theme
│   │   ├── globals.css
│   │   └── theme.ts
│   ├── App.tsx              # Main app component with routing
│   └── main.tsx             # Entry point
├── public/                   # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
cd streamore-react
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## Technology Stack

- **Framework**: React 18
- **Routing**: React Router 6
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Linting**: ESLint
- **Formatting**: Prettier

## Component Architecture

### Atomic Components
- **Button**: Reusable button with variants (gold, ghost, dark)
- **Card**: Flexible card component for content grouping
- **Container**: Max-width wrapper for content
- **Section**: Section wrapper with background variants
- **Hero**: Page header component with breadcrumbs

### Layout
- **Header**: Sticky navigation with responsive menu
- **Footer**: Company info, links, and contact details
- **Layout**: Main layout wrapper with header/footer

### Pages
Each page follows a consistent structure:
- Hero section with title and breadcrumbs
- Content sections using Section and Container
- Call-to-action elements

## Styling

The project uses CSS Modules for component-scoped styling with a centralized theme system.

### Theme
Located in `src/styles/theme.ts`, contains:
- Color palette (navy, gold gradients, etc.)
- Shadows and radius values
- Spacing scale
- Breakpoints
- Font configuration

### Global Styles
- `src/styles/globals.css` - Base styles, resets, and utilities

## Before Deploying

1. **Replace Contact Information**
   - Phone number in Footer
   - Email addresses (info, support, etc.)
   - Physical address if needed

2. **Update Content**
   - Replace placeholder text in pages
   - Add real images and videos
   - Update portfolio/work samples
   - Add testimonials

3. **Connect Forms**
   - Connect contact form to Formspree, Netlify Forms, or custom backend
   - Update form submission handler in `src/pages/Contact.tsx`

4. **Add Assets**
   - Replace logo SVG in `src/components/Logo.tsx`
   - Add favicon in `public/`
   - Add hero images and service card images
   - Add portfolio/work images

5. **SEO**
   - Update meta descriptions in each page
   - Add og:image tags for social sharing
   - Update sitemap if applicable
   - Add robots.txt

6. **Analytics**
   - Add Google Analytics or preferred tracking
   - Add Hotjar or user feedback tools if needed

## Deployment Options

### Netlify (Recommended)
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify, or connect your Git repo
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/streamore-website",
  "scripts": {
    "build": "vite build --base=/streamore-website/"
  }
}
```

### Traditional Hosting (Cpanel, etc.)
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web root
3. Point domain to the hosting

## Environment Variables

Create a `.env.local` file for development:

```
VITE_API_URL=your_api_url
VITE_CONTACT_FORM_ID=formspree_id
```

## Performance

- Vite provides fast development and optimized production builds
- CSS Modules prevent style conflicts
- Code splitting for route-based bundles
- Image optimization recommended for assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
npm run type-check
```

## Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

© 2024 Streamore. All rights reserved.

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Review and update pages with real content
4. Add images and media assets
5. Test on mobile devices
6. Connect contact form
7. Set up deployment
