# Deployment Guide

## Pre-Deployment Checklist

### Content & Assets
- [ ] Replace all placeholder phone numbers
- [ ] Update all email addresses
- [ ] Add company address to footer
- [ ] Replace logo SVG or add logo.png
- [ ] Add hero background images
- [ ] Add service card images
- [ ] Add portfolio/work images
- [ ] Update meta descriptions on pages
- [ ] Add og:image social share images
- [ ] Add favicon to public/

### Functionality
- [ ] Test contact form (connect to backend)
- [ ] Verify all links work
- [ ] Test mobile responsiveness
- [ ] Test navigation menu on mobile
- [ ] Check form validation
- [ ] Verify 404 error page

### Performance & SEO
- [ ] Run Lighthouse audit (target 90+)
- [ ] Optimize images (WebP format)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Google Search Console
- [ ] Configure analytics
- [ ] Test page speed

### Build & Testing
```bash
npm run lint          # Check for errors
npm run type-check   # Verify TypeScript
npm run build        # Create production build
npm run preview      # Test production build locally
```

## Deployment Platforms

### 1. Netlify (Recommended - Easiest)

#### Option A: Git Integration (Recommended)
1. Push code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy"

#### Option B: Drag & Drop
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site is live!

#### Custom Domain (Netlify)
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS setup instructions
5. Enable automatic SSL/TLS

### 2. Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd streamore-react
vercel

# Link custom domain in Vercel dashboard
```

### 3. GitHub Pages

Update `package.json`:
```json
{
  "homepage": "https://username.github.io/streamore-website"
}
```

Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/streamore-website/',
  // ... rest of config
})
```

Deploy:
```bash
npm run build
# Push dist folder to gh-pages branch or set up GitHub Actions
```

### 4. Traditional Web Hosting (Cpanel, Bluehost, etc.)

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder contents to your web root:
   - Via FTP: Upload all files from `dist/` to `public_html/`
   - Via File Manager: Same process

3. Configure domain:
   - Point domain DNS to hosting provider
   - Configure SSL certificate (usually auto with Let's Encrypt)

4. Set up redirects (if needed) in `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 5. AWS / Google Cloud / Azure

Each has different approaches. Generally:
1. Build: `npm run build`
2. Upload `dist` folder to static hosting (S3, Cloud Storage, Blob Storage)
3. Configure CDN and domain
4. Enable HTTPS

## Environment Variables

Create `.env.production` for production settings:

```env
VITE_API_URL=https://api.streamore.co.tz
VITE_CONTACT_FORM_ID=your_formspree_id
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## SSL/HTTPS

Most hosting platforms provide free SSL:
- **Netlify**: Automatic with Let's Encrypt
- **Vercel**: Automatic
- **Traditional Hosting**: Often included, or use Let's Encrypt
- **AWS**: Use ACM (AWS Certificate Manager)

Enforce HTTPS:
```javascript
// In public/netlify.toml or your hosting config
[[redirects]]
  from = "http://*"
  to = "https://:splat"
  status = 301
  force = true
```

## Contact Form Setup

### Option 1: Formspree

1. Go to [Formspree.io](https://formspree.io)
2. Create account and form
3. Get Form ID
4. Add to `.env`:
```env
VITE_CONTACT_FORM_ID=your_form_id
```
5. Update `src/pages/Contact.tsx`:
```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch(`https://formspree.io/f/${process.env.VITE_CONTACT_FORM_ID}`, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (response.ok) {
    setSubmitted(true);
    e.currentTarget.reset();
  }
};
```

### Option 2: Netlify Forms

Add to `<form>` tag:
```html
<form name="contact" method="POST" netlify>
  <!-- form fields -->
</form>
```

### Option 3: Custom Backend
Connect to your own API endpoint.

## Analytics Setup

### Google Analytics

1. Create Google Analytics account
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.production`:
```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```
4. Install gtag:
```bash
npm install @react-ga/core
```

## DNS Configuration

### For your domain (streamore.co.tz example):

**Netlify:**
```
Name: streamore.co.tz
Type: A
Value: 75.2.60.5  # (or Netlify's IP)

Name: www.streamore.co.tz
Type: CNAME
Value: streamore-1234.netlify.app
```

**Vercel:**
```
Name: streamore.co.tz
Type: A
Value: 76.76.19.165

Name: www.streamore.co.tz
Type: CNAME
Value: cname.vercel-dns.com
```

**Traditional Hosting:**
```
Name: streamore.co.tz
Type: A
Value: your_hosting_ip

Name: www.streamore.co.tz
Type: CNAME
Value: streamore.co.tz
```

## Post-Deployment

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry, Rollbar)
- Monitor Core Web Vitals

### SEO
- Submit sitemap to Google Search Console
- Submit to Bing Webmaster Tools
- Monitor search rankings
- Set up Google Business Profile

### Performance
- Monitor Lighthouse scores
- Set up error logging
- Track Core Web Vitals
- Monitor analytics

### Maintenance
- Keep dependencies updated
- Monitor security alerts
- Regular content updates
- Backup strategy

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Blank Page After Deploy
- Check browser console for errors
- Verify `base` path in vite.config.ts
- Check routing configuration
- Clear browser cache

### DNS Not Working
- Wait 24-48 hours for propagation
- Verify DNS records in domain registrar
- Check with `nslookup streamore.co.tz`

### Form Not Submitting
- Check browser console errors
- Verify API endpoint
- Test form locally first
- Check CORS settings if using custom backend

### Slow Performance
- Run Lighthouse audit
- Optimize images
- Enable compression on server
- Use CDN
- Check bundle size

## Version Updates

When updating dependencies:
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update major versions carefully
npm install react@latest react-dom@latest

# Test thoroughly
npm run lint
npm run type-check
npm run build
```

## Rollback Plan

If deployment goes wrong:
- Most platforms allow instant rollback
- Keep previous version built and ready
- Test thoroughly before deploying
- Use staging environment first

## Monitoring Checklist

- [ ] Uptime monitoring active
- [ ] Error tracking configured
- [ ] Analytics working
- [ ] Form submissions received
- [ ] SSL certificate valid
- [ ] DNS propagated
- [ ] Domain redirects working
- [ ] Social shares working correctly

## Support & Resources

- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

## Need Help?

1. Check deployment logs in your hosting platform
2. Review browser console (F12)
3. Check Network tab for failed requests
4. Test locally with `npm run preview`
