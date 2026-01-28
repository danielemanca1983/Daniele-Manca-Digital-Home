# WordPress Block Theme - Flywheel Local Deployment Guide

**Theme:** Daniele Manca Digital  
**Status:** ✅ Production Ready  
**Last Updated:** January 28, 2026

---

## Pre-Deployment Checklist

Before deploying to Flywheel Local, verify:

### ✅ Theme Structure
- [x] All 12 blocks created with `block.json` + `render.php` + `style.css`
- [x] `functions.php` registers all blocks
- [x] `theme.json` complete with design tokens (11 colors, 2 fonts, 8 sizes, 7 spacing)
- [x] `style.css` with proper theme header
- [x] `assets/css/theme.css` with global styles
- [x] `parts/header.html` and `parts/footer.html` template parts
- [x] 8 page templates: `front-page.html`, `page-*.html`, `index.html`, `404.html`

### ✅ Block Registration
- [x] Homepage blocks: hero, problem, solution, strategic-differentiator, benefits, audience, cta
- [x] About page blocks: about-hero, about-story
- [x] Services page blocks: service-intro
- [x] Learn page blocks: learn-hero
- [x] Strategy call page blocks: strategy-section

### ✅ Design System
- [x] All colors defined in `theme.json`
- [x] Typography (Manrope + Inter) configured
- [x] Spacing and sizing scales complete
- [x] Layout widths (1200px content, 1600px wide) set

### ✅ Security
- [x] All user input properly escaped (`esc_html()`, `wp_kses_post()`)
- [x] No SQL injection vectors (no database queries)
- [x] No hardcoded content (all via block attributes)
- [x] CSRF protection inherited from WordPress

### ✅ Performance
- [x] No heavy JavaScript (server-side rendering)
- [x] CSS properly organized (one per block)
- [x] Google Fonts loaded once globally
- [x] No external API dependencies

---

## Flywheel Local Setup

### Step 1: Download Flywheel Local
1. Go to **[getflywheel.com/local](https://getflywheel.com/local)**
2. Download for macOS
3. Install application

### Step 2: Create WordPress Site
1. Launch **Local by Flywheel**
2. Click **"Create a new site"**
3. Set site name: `daniele-manca-digital`
4. Set WordPress username/password (note: this is local only)
5. Choose WordPress version: **Latest** (6.3+)
6. Click **"Create Site"**

### Step 3: Install Theme
1. In Local, click **"Open site folder"**
2. Navigate to: `app/public/wp-content/themes/`
3. Copy theme folder:
   ```bash
   cp -r /Users/daniele/Desktop/Daniele-Manca-Digital-Home/wp-theme/daniele-manca-digital ./
   ```
4. Or drag-and-drop the theme folder into Local

### Step 4: Activate Theme
1. In Local, click **"Open site"**
2. Log in to WordPress Admin
3. Go to: **Appearance → Themes**
4. Find **"Daniele Manca Digital"**
5. Click **"Activate"**

### Step 5: Configure Basic Settings
1. Go to: **Settings → General**
   - Site Title: `Daniele Manca Digital`
   - Tagline: (optional)
   - URL: `http://daniele-manca-digital.local:10003` (Local provides)
2. Go to: **Settings → Permalink Structure**
   - Select: **Post name** (for clean URLs)

### Step 6: Create Navigation Menu
1. Go to: **Appearance → Menus**
2. Create menu named: `Main Menu`
3. Add pages: Home, About, Services, Learn
4. Set as: **Primary Menu**

### Step 7: Create/Publish Pages
1. Go to: **Pages → All Pages**
2. Verify these pages exist:
   - Home (front page) - should use `front-page.html` template
   - About - should use `page-about.html` template
   - Services - should use `page-services.html` template
   - Learn - should use `page-learn.html` template
   - Strategy Call - should use `page-strategy-call.html` template

3. If pages don't exist, create them:
   - Click **"Add New"**
   - Set title (e.g., "About")
   - Don't add content (blocks are in template)
   - Set template (right sidebar → **Templates**)
   - Publish

---

## Testing the Theme

### Test Homepage
1. Click **"Visit site"** in Local
2. Homepage should display with all 7 blocks:
   - Hero banner
   - Problem section
   - Solution section
   - Strategic Differentiator section
   - Benefits section
   - Audience section
   - CTA section

### Test Inner Pages
Visit each page and verify block content displays:

**About Page:**
- [x] Hero section with status, heading, intro
- [x] Story section with internal hesitation callout
- [x] CTA section

**Services Page:**
- [x] Service intro section
- [x] CTA section

**Learn Page:**
- [x] Hero section with yellow status
- [x] Card section
- [x] CTA section

**Strategy Call Page:**
- [x] CTA section
- [x] Strategy section (3-card "What to Expect")

### Test Editing (Block Editor)
1. Go to: **Pages → Edit** (any page)
2. Click **"Edit with Site Editor"** (top right)
3. Click on any block to select it
4. On right sidebar, verify you can edit:
   - Text fields
   - Heading text
   - Button text
   - Any other attributes
5. Make a small change
6. Click **"Save"** or **"Publish"**
7. Verify change appears on frontend

### Test Responsive Design
1. On published page, press **F12** (Developer Tools)
2. Click **"Toggle device toolbar"** (mobile icon)
3. Test at different widths:
   - **Mobile:** 375px - all blocks should stack
   - **Tablet:** 768px - blocks should adapt
   - **Desktop:** 1200px+ - full layout

### Test Navigation
1. Click menu items in header
2. Verify correct pages load
3. Test footer links
4. Test CTA buttons (should link to correct pages)

---

## Common Issues & Solutions

### Issue: Theme doesn't appear in Appearance → Themes
**Solution:** 
1. Clear WordPress cache (if using caching plugin)
2. Verify folder is named `daniele-manca-digital` (exact name)
3. Verify `style.css` exists in root of theme folder
4. Verify `functions.php` exists and has no syntax errors

### Issue: Blocks don't render or show errors
**Solution:**
1. Check `functions.php` block registration
2. Verify block folder names match exactly (lowercase, hyphens)
3. Verify `block.json` has valid JSON syntax
4. Verify `render.php` has correct PHP syntax
5. Check Local logs: **Local → Logs → Web Logs**

### Issue: Styles look wrong (colors, fonts, spacing)
**Solution:**
1. Clear browser cache (Cmd+Shift+Delete)
2. Go to **Appearance → Customize** and verify theme.json values
3. Check `assets/css/theme.css` is enqueued
4. Verify Google Fonts are loading (Network tab in Dev Tools)
5. Reload page with hard refresh (Cmd+Shift+R)

### Issue: Page templates not applying
**Solution:**
1. When editing page, check right sidebar → **Template**
2. Verify template dropdown shows:
   - `front-page` for Homepage
   - `page-about` for About page
   - etc.
3. If template not showing, go to **Page Attributes** section
4. Select correct template and save

### Issue: Content shows but blocks don't appear in editor
**Solution:**
1. This is normal for custom blocks without full React editors
2. Content displays correctly on frontend (via render.php)
3. To edit, go to **Edit with Site Editor** (top right in editor)
4. Or edit block.json attributes directly in page HTML

---

## Content Management

### Editing via Site Editor
1. Go to **Appearance → Edit (Site Editor)**
2. Select any page or template
3. Click blocks to edit
4. Changes saved to block attributes in database
5. Click **"Save"** to publish changes

### Adding New Pages
1. **Pages → Add New**
2. Set title and template
3. Add blocks in Site Editor
4. Publish

### Modifying Navigation
1. **Appearance → Menus**
2. Edit menu items
3. Publish changes

### Changing Styles
1. **Appearance → Customize**
2. Modify colors, fonts in Style panel
3. All changes stored in theme.json
4. Publish changes

---

## Deployment Checklist (Before Going Live)

When ready to move from Local to production:

- [ ] All pages created and content added
- [ ] Navigation menu configured
- [ ] Links all working (test internal links)
- [ ] Responsive design verified (mobile/tablet/desktop)
- [ ] Spelling and grammar checked
- [ ] Images optimized (if any added)
- [ ] SEO title/description added (if using SEO plugin)
- [ ] Contact form tested (if applicable)
- [ ] CTA buttons tested
- [ ] Color contrast verified (WCAG AA)
- [ ] Performance benchmarked (Lighthouse 80+)

---

## Production Hosting Options

When ready to deploy from Local to production:

### Option 1: Shared Hosting (GoDaddy, Bluehost, etc.)
1. Export from Local: **Local → Right-click site → Open site shell**
2. Use **All-in-One WP Migration** plugin to export
3. Upload theme folder to hosting `wp-content/themes/`
4. Activate theme in production WordPress

### Option 2: Managed WordPress (WP Engine, Kinsta, etc.)
1. Git push theme to your repository
2. Connect hosting to GitHub/Bitbucket
3. Deploy via hosting dashboard
4. Activate theme

### Option 3: Docker/VPS
1. Copy theme folder to server
2. Run WordPress via Docker or traditional stack
3. Place theme in `wp-content/themes/`
4. Activate via WordPress Admin

---

## Support & Documentation

**Theme Documentation Files:**
- [ARCHITECTURE_OVERVIEW.md](ARCHITECTURE_OVERVIEW.md) - Complete architecture
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Project overview
- [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) - React → WordPress mapping
- [AUDIT_REPORT.md](AUDIT_REPORT.md) - Design fidelity audit
- [REFACTORING_COMPLETE.md](REFACTORING_COMPLETE.md) - Block refactoring details
- [INNER_PAGES_REFACTORING_COMPLETE.md](INNER_PAGES_REFACTORING_COMPLETE.md) - Inner pages completion
- [README.md](README.md) - Main project README

**Block Documentation:**
Each block in `/blocks/{block-name}/` has:
- `block.json` - Block definition + attributes
- `render.php` - Server-side rendering
- `style.css` - Block-specific styles

---

## Quick Reference

### WordPress Admin URL
- **Local:** `http://daniele-manca-digital.local:10003/wp-admin`
- **Username:** (created during setup)
- **Password:** (created during setup)

### Important Paths
- **Theme folder:** `wp-content/themes/daniele-manca-digital/`
- **Blocks folder:** `wp-content/themes/daniele-manca-digital/blocks/`
- **Design system:** `wp-content/themes/daniele-manca-digital/theme.json`

### Keyboard Shortcuts (Site Editor)
- `Cmd+Z` - Undo
- `Cmd+Shift+Z` - Redo
- `Cmd+S` - Save
- `Escape` - Close panel

### WordPress Documentation
- [Block Handbook](https://developer.wordpress.org/block-editor/) - Block development
- [Block Theme Handbook](https://developer.wordpress.org/themes/block-themes/) - Theme development
- [theme.json Reference](https://developer.wordpress.org/themes/global-settings-and-styles/) - Design tokens

---

## Success Indicators

✅ **Theme is working correctly if:**
- Homepage displays with all 7 blocks
- All inner pages display without errors
- Blocks are editable in Site Editor
- Responsive design works on mobile/tablet/desktop
- Navigation menus work
- CTA buttons link to correct pages
- No console errors (F12 → Console)
- Site loads quickly (Lighthouse 80+)

---

**Ready to launch! Questions? Check the documentation files above.**

*Deployment Guide Created — January 28, 2026*
