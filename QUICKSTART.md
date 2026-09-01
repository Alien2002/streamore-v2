# Quick Start Guide

Get Streamore React website running in 5 minutes.

## 1. Install Dependencies

```bash
cd streamore-react
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

The site opens automatically at `http://localhost:3000`

## 3. Edit Content

### Update Navigation & Footer
**File:** `src/components/Header.tsx` and `src/components/Footer.tsx`
- Update phone numbers
- Update email addresses
- Update social links

### Create New Page
1. Create file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add nav link in `src/components/Header.tsx`

### Edit Existing Pages
- `src/pages/Home.tsx` - Homepage
- `src/pages/Livestreaming.tsx` - Flagship service
- `src/pages/Services.tsx` - All services
- `src/pages/Industries.tsx` - Target industries
- `src/pages/Packages.tsx` - Pricing
- `src/pages/Reliability.tsx` - Reliability features
- `src/pages/Work.tsx` - Portfolio
- `src/pages/About.tsx` - Company info
- `src/pages/Contact.tsx` - Quote form

## 4. Add Images & Assets

Place images in `public/` folder:
```
public/
├── hero-home.jpg
├── service-card-1.jpg
├── service-card-2.jpg
└── logo.png
```

Reference in components:
```tsx
<img src="/hero-home.jpg" alt="Hero" />
```

## 5. Update Theme Colors

**File:** `src/styles/theme.ts`

Change colors:
```typescript
colors: {
  navy: '#0F1B33',      // Primary dark color
  gold: '#F7B500',      // Primary accent
  goldDark: '#DE9200',  // Darker accent
}
```

## 6. Connect Contact Form

**File:** `src/pages/Contact.tsx`

Add Formspree ID:
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch(
    `https://formspree.io/f/YOUR_FORM_ID`,
    {
      method: 'POST',
      body: formData
    }
  );
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

Or use Netlify Forms by adding to the form:
```tsx
<form name="contact" method="POST" netlify>
```

## 7. Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready to deploy.

## 8. Deploy

### Netlify (Easiest)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repo
5. Deploy!

### Vercel
```bash
npm install -g vercel
vercel
```

### Traditional Hosting
Upload contents of `dist/` folder to your web host.

## Common Edits

### Change Button Text/Links
```tsx
<Button as="a" href="/contact">
  Get a Quote
</Button>
```

### Add New Section
```tsx
<Section variant="alt">
  <Container>
    <h2>Section Title</h2>
    <p>Content here</p>
  </Container>
</Section>
```

### Change Logo
Replace SVG in `src/components/Logo.tsx` or upload image:
```tsx
<img src="/logo.png" alt="Streamore" height="32" />
```

### Add Service Card
```tsx
<Card>
  <h3>Service Name</h3>
  <p>Service description</p>
  <Link to="/service">Learn more →</Link>
</Card>
```

## Folder Reference

```
streamore-react/
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Layout wrappers
│   ├── pages/            # Page components
│   ├── styles/           # Global styles & theme
│   ├── App.tsx          # Main routing
│   └── main.tsx         # Entry point
├── public/              # Static files (images, favicon)
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.ts      # Build config
├── tsconfig.json       # TypeScript config
├── README.md           # Full documentation
├── DEVELOPMENT.md      # Dev guide
├── DEPLOYMENT.md       # Deploy guide
└── .eslintrc.cjs      # Linting rules
```

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run format` | Format code automatically |
| `npm run type-check` | Check TypeScript errors |

## Need More Help?

- **Setup Issues?** → See `DEVELOPMENT.md`
- **Deployment?** → See `DEPLOYMENT.md`
- **Component Guide?** → See `README.md`
- **Best Practices?** → See `DEVELOPMENT.md`

## Checklist Before Going Live

- [ ] Updated all contact info (phone, email)
- [ ] Added company logo and images
- [ ] Updated all page content
- [ ] Connected contact form
- [ ] Added favicon
- [ ] Tested on mobile
- [ ] Set custom domain
- [ ] Enabled HTTPS
- [ ] Set up analytics
- [ ] Run Lighthouse audit

## Common Issues

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**TypeScript errors?**
```bash
npm run type-check
```

**Need to reinstall?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Install: `npm install`
2. ✅ Dev: `npm run dev`
3. 📝 Edit: Update `src/pages/` and `src/components/`
4. 🎨 Theme: Customize `src/styles/theme.ts`
5. 📤 Deploy: Run `npm run build` then push to hosting

**You're ready to go!** 🚀
