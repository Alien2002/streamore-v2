# Development Guide

## Setting Up Development Environment

### Prerequisites
- Node.js 16+ ([Download](https://nodejs.org/))
- Git
- Your favorite code editor (VS Code recommended)

### Initial Setup
```bash
git clone <repository-url>
cd streamore-react
npm install
cp .env.example .env.local
npm run dev
```

## Project Architecture

### Component Structure
Components are organized by type:

1. **UI Components** (`src/components/`)
   - Reusable, stateless components
   - Use CSS Modules for styling
   - Accept props for customization
   - Example: Button, Card, Section

2. **Layout Components** (`src/layouts/`)
   - Wrap page content
   - Include Header and Footer
   - Provide consistent structure

3. **Page Components** (`src/pages/`)
   - Route-based components
   - Compose smaller components
   - Handle page-specific logic

### File Naming Conventions
- Components: PascalCase (`Button.tsx`, `Header.tsx`)
- Styles: kebab-case with `.module.css` suffix (`Button.module.css`)
- Pages: PascalCase (`Home.tsx`, `About.tsx`)
- Utils/Hooks: camelCase (`useClickOutside.ts`)

## Styling Guidelines

### CSS Modules
Each component has its own module:

```css
/* Button.module.css */
.btn {
  display: inline-block;
  padding: 13px 26px;
  /* ... */
}

.variant-gold {
  background: linear-gradient(...);
}
```

Import in component:
```typescript
import styles from './Button.module.css';

function Button() {
  return <button className={styles.btn}>Click me</button>;
}
```

### Using Theme
Reference theme values from `src/styles/theme.ts`:

```typescript
import { theme } from '@/styles/theme';

// Use theme values
const buttonColor = theme.colors.gold;
const spacing = theme.spacing.lg;
```

### Responsive Design
Use CSS media queries with theme breakpoints:

```css
@media (max-width: 960px) {
  .component {
    /* mobile styles */
  }
}
```

Available breakpoints:
- `640px` - mobile
- `960px` - tablet
- `1180px` - desktop (max container width)

## Code Style

### TypeScript
- Use strict mode (enabled by default)
- Define interfaces for props
- Use type inference where obvious
- Avoid `any` type

Example:
```typescript
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'gold' | 'ghost' | 'dark';
}

function Button({ children, onClick, variant = 'gold' }: ButtonProps) {
  // ...
}
```

### Formatting
Prettier is configured to format on save. Manual formatting:
```bash
npm run format
```

### Linting
ESLint enforces code quality:
```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

## Adding a New Page

1. Create page component in `src/pages/PageName.tsx`:
```typescript
import Container from '@/components/Container';
import Section from '@/components/Section';
import Hero from '@/components/Hero';

function PageName() {
  return (
    <>
      <Hero
        title="Page Title"
        subtitle="Subtitle"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Page Name' }
        ]}
      />
      
      <Section>
        <Container>
          {/* Content here */}
        </Container>
      </Section>
    </>
  );
}

export default PageName;
```

2. Create optional CSS module `src/pages/PageName.module.css`

3. Add route to `src/App.tsx`:
```typescript
<Route path="page-name" element={<PageName />} />
```

4. Add navigation link to `src/components/Header.tsx`:
```typescript
{ label: 'Page Name', href: '/page-name' }
```

## Adding a New Component

1. Create component file `src/components/ComponentName.tsx`:
```typescript
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // Define props
}

function ComponentName({ ...props }: ComponentNameProps) {
  return <div className={styles.component}>{/* content */}</div>;
}

export default ComponentName;
```

2. Create styles `src/components/ComponentName.module.css`

3. Export from parent components as needed

4. Document usage with JSDoc:
```typescript
/**
 * Button component with multiple variants
 * @param variant - Button style variant: 'gold', 'ghost', or 'dark'
 * @param size - Button size: 'default' or 'large'
 */
```

## Working with Forms

Example from Contact page:

```typescript
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Send to form service (Formspree, etc.)
  setSubmitted(true);
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" name="name" required />
    <button type="submit">Submit</button>
  </form>
);
```

To connect form to backend:
1. Update `handleSubmit` to POST to API endpoint
2. Add error handling
3. Set loading state during submission

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/add-new-component

# Make changes
npm run lint:fix
npm run format

# Commit
git add .
git commit -m "feat: add new component"

# Push and create PR
git push origin feature/add-new-component
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `test:` - Tests
- `chore:` - Maintenance

## Performance Tips

1. **Image Optimization**
   - Use next-gen formats (WebP)
   - Lazy load below-the-fold images
   - Optimize dimensions for device

2. **Code Splitting**
   - Routes are automatically code-split by React Router
   - Use dynamic imports for heavy components

3. **Bundle Analysis**
   ```bash
   npm run build -- --analyze
   ```

4. **Lighthouse Audit**
   - Run Chrome DevTools Lighthouse tab
   - Target 90+ scores

## Debugging

### React DevTools
Install [React DevTools browser extension](https://react-devtools-tutorial.vercel.app/)

### VS Code Extensions Recommended
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense (for reference)
- ESLint
- Prettier

### TypeScript IntelliSense
Ensure `tsconfig.json` paths are correct for imports to work properly:
```json
"paths": {
  "@/*": ["src/*"]
}
```

## Common Tasks

### Add a new color to theme
```typescript
// src/styles/theme.ts
colors: {
  newColor: '#HEXCODE',
}
```

### Add spacing scale
```typescript
spacing: {
  newSize: '20px',
}
```

### Update favicon
Replace `/public/favicon.svg` with your favicon

### Add Google Analytics
```typescript
// Add to main.tsx or App.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

useEffect(() => {
  // Track page view
  gtag('pageview', { page_path: location.pathname });
}, [location]);
```

## Testing

Currently no tests are configured. To add Jest + React Testing Library:

```bash
npm install -D @testing-library/react @testing-library/jest-dom vitest @vitest/ui
```

Create `vitest.config.ts` and add test files.

## Deployment Checklist

- [ ] Update all placeholder content
- [ ] Add real images/videos
- [ ] Update contact information
- [ ] Connect contact form
- [ ] Add favicon
- [ ] Test on mobile
- [ ] Run lighthouse audit
- [ ] Check SEO meta tags
- [ ] Set up analytics
- [ ] Enable HTTPS
- [ ] Configure domain/DNS

## Getting Help

- Check existing issues/PRs
- Review component documentation
- Read TypeScript error messages carefully
- Use VS Code IntelliSense
- Refer to official docs (React, Router, Vite)

## Questions?

Refer to README.md or reach out to the team.
