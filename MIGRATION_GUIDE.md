# Migration Guide: HTML to React

Guide for migrating content from the original static HTML website to the new React version.

## What Changed

### Structure
| Aspect | HTML | React |
|--------|------|-------|
| Build | None (static) | Vite + TypeScript |
| Routing | File-based | React Router |
| Styling | Inline CSS per file | CSS Modules + theme |
| Components | Duplicated HTML | Reusable React components |
| State | None | React hooks |
| Deployment | Drag-and-drop files | npm build + deploy dist |

### Benefits of React Version

1. **Maintainability** - Reusable components, DRY principle
2. **Performance** - Code splitting, optimized builds
3. **Scalability** - Easy to add features
4. **Developer Experience** - TypeScript, hot reload, tooling
5. **SEO** - Can add SSR/SSG if needed
6. **Analytics** - Integration with tools
7. **Forms** - Better form handling

## Content Migration

### 1. Navigation Links

**HTML Version** (static file paths)
```html
<a href="/livestreaming.html">Livestreaming</a>
```

**React Version** (route paths)
```tsx
<Link to="/livestreaming">Livestreaming</Link>
```

✅ Already configured in `src/components/Header.tsx`

### 2. Page Content

**HTML Version** - Large monolithic files with embedded styles

**React Version** - Modular pages composed of components

To migrate content:
1. Copy text/headings from HTML file
2. Place in corresponding React page (`src/pages/PageName.tsx`)
3. Use existing components (Section, Container, Card, Button, Hero)

Example migration:
```html
<!-- Old HTML -->
<section class="dark">
  <div class="wrap">
    <h2>Services</h2>
    <p>Description here</p>
  </div>
</section>
```

```tsx
// New React
<Section variant="dark">
  <Container>
    <h2>Services</h2>
    <p>Description here</p>
  </Container>
</Section>
```

### 3. Styling

**HTML** - Inline styles with CSS variables
```html
<style>
  :root { --navy: #0F1B33; }
  .btn { color: var(--navy); }
</style>
```

**React** - Centralized theme + CSS Modules
```typescript
// src/styles/theme.ts
export const theme = {
  colors: { navy: '#0F1B33' }
}

// Button.module.css
.btn { color: var(--navy); }
```

All colors/spacing are in `src/styles/theme.ts`

### 4. Images

**HTML** - Referenced directly
```html
<img src="assets/logo.png" alt="Streamore" />
```

**React** - Same approach, files in `public/`
```tsx
<img src="/logo.png" alt="Streamore" />
```

Place images in `public/` folder.

### 5. Links

**HTML** - File links
```html
<a href="contact.html">Contact</a>
```

**React** - Route links
```tsx
<Link to="/contact">Contact</Link>
```

For external links:
```tsx
<a href="https://example.com">External</a>
```

## Component Mapping

### Reusable Components

| HTML Pattern | React Component |
|--------------|-----------------|
| `<button class="btn btn-gold">` | `<Button>` |
| `<section class="dark">` | `<Section variant="dark">` |
| `<div class="wrap">` | `<Container>` |
| `<div class="card">` | `<Card>` |
| Page hero section | `<Hero>` |

### Creating New Components

If you have patterns that repeat:

1. Create component file:
```tsx
// src/components/YourComponent.tsx
import styles from './YourComponent.module.css';

function YourComponent() {
  return <div className={styles.component}>Content</div>;
}

export default YourComponent;
```

2. Create stylesheet:
```css
/* src/components/YourComponent.module.css */
.component {
  /* styles */
}
```

3. Use in pages:
```tsx
import YourComponent from '@/components/YourComponent';

// In your page
<YourComponent />
```

## Migration Checklist

### Setup
- [ ] Clone/download React project
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Verify dev server runs

### Content
- [ ] Copy text from Home page
- [ ] Copy text from Livestreaming page
- [ ] Copy text from Services page
- [ ] Copy text from Industries page
- [ ] Copy text from Packages page
- [ ] Copy text from Reliability page
- [ ] Copy text from Work page
- [ ] Copy text from About page
- [ ] Copy text from Contact page

### Images
- [ ] Add logo (public/logo.png or update Logo.tsx)
- [ ] Add hero images (reference in pages)
- [ ] Add service card images
- [ ] Add work/portfolio images
- [ ] Optimize images for web

### Functionality
- [ ] Update phone numbers
- [ ] Update email addresses
- [ ] Update contact info
- [ ] Connect contact form
- [ ] Test all links
- [ ] Test navigation

### Styling
- [ ] Review color scheme (theme.ts)
- [ ] Adjust spacing if needed
- [ ] Update fonts if needed
- [ ] Test responsive design

### Deployment
- [ ] Build locally: `npm run build`
- [ ] Test build: `npm run preview`
- [ ] Choose hosting platform
- [ ] Deploy to production
- [ ] Verify domain works
- [ ] Set up HTTPS

## Content Blocks to Migrate

### Statistics/Metrics Section
```tsx
<div className={styles.stats}>
  <div className={styles.stat}>
    <b>Value</b>
    <span>Label</span>
  </div>
</div>
```

### List with Icons
```tsx
<ul className={styles.check}>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Pricing Table
```tsx
<div className={styles.tiers}>
  <div className={styles.tier}>
    <h3>Package Name</h3>
    <div className={styles.price}>$999<small>/month</small></div>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
  </div>
</div>
```

## Form Migration

**Old HTML Form**
```html
<form>
  <input type="text" name="name" />
  <textarea name="message"></textarea>
  <button type="submit">Submit</button>
</form>
```

**New React Form** (src/pages/Contact.tsx)
```tsx
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Connect to Formspree, Netlify, or custom backend
  setSubmitted(true);
};

<form onSubmit={handleSubmit}>
  <input type="text" name="name" required />
  <textarea name="message"></textarea>
  <button type="submit">Submit</button>
  {submitted && <p>Thank you!</p>}
</form>
```

## Performance Notes

### Build Size Reduction
- Static HTML: ~200KB (9 files)
- React build: ~40KB (with gzip ~12KB)
- Modern bundling handles more efficiently

### Caching
- Old: Cache entire HTML files
- New: Cache assets with content hash, use service workers

## Troubleshooting Migration

### Content Not Showing
1. Check if text was added to correct component
2. Verify CSS classes match component
3. Check browser console for errors

### Styling Looks Wrong
1. Verify theme.ts has correct colors
2. Check CSS Modules are imported
3. Ensure responsive breakpoints are tested

### Links Not Working
1. Verify routes in App.tsx
2. Check Link paths match route definitions
3. Test external links use `<a>` tag

## Advanced Topics

### Adding API Integration
1. Create services in `src/services/`
2. Use `useEffect` for data fetching
3. Handle loading/error states

### Adding More Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`

### Custom Hooks
Create reusable logic in `src/hooks/`:
```typescript
// src/hooks/useClickOutside.ts
export function useClickOutside(ref, callback) {
  // Hook implementation
}
```

## Getting Help

- Check DEVELOPMENT.md for coding guides
- See DEPLOYMENT.md for hosting instructions
- Review component files for examples
- Check React documentation: https://react.dev

## Success Checklist

- [ ] Content migrated
- [ ] Images added
- [ ] Contact form working
- [ ] Mobile responsive
- [ ] Lighthouse 90+
- [ ] Build succeeds
- [ ] Deployed successfully
- [ ] Domain configured
- [ ] Analytics working

**You've successfully migrated to React!** 🎉
