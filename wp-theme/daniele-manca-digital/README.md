# Daniele Manca Digital - WordPress Block Theme

A modern **Full Site Editing (FSE)** WordPress theme that transforms the original React/TypeScript marketing website into a fully editable, maintainable WordPress experience.

## 🎯 Overview

This theme provides:
- ✅ **7 Custom Blocks** - Hero, Problem, Solution, Differentiator, Benefits, Audience, CTA
- ✅ **Complete Page Templates** - Front page, About, Services, Learn, Strategy Call
- ✅ **Editor-First Design** - All content editable in WordPress Admin
- ✅ **Responsive & Fast** - Server-rendered PHP, SEO-optimized
- ✅ **Design Fidelity** - Visual design matches original React site
- ✅ **No Coding Required** - Editors fill in text, manage content

## 📋 Requirements

- **WordPress:** 6.3 or higher
- **PHP:** 7.4 or higher
- **Theme Category:** FSE (Full Site Editing)

## 🚀 Quick Start

### Using wp-env (Recommended)

1. From repo root, create `.wp-env.json`:
   ```json
   {
     "themes": ["./wp-theme/daniele-manca-digital"],
     "plugins": []
   }
   ```

2. Start local WordPress:
   ```bash
   npx @wordpress/env start
   ```

3. Activate theme:
   - Go to **Appearance → Themes**
   - Activate "Daniele Manca Digital"

4. Access site editor:
   - Go to **Appearance → Editor**
   - Start editing pages and blocks

### Manual Installation

```bash
cp -r wp-theme/daniele-manca-digital /path/to/wordpress/wp-content/themes/
```

Then activate via WordPress Admin.

## 📁 Theme Structure

```
daniele-manca-digital/
├── blocks/                    # Custom blocks (7 total)
│   ├── hero/
│   ├── problem/
│   ├── solution/
│   ├── strategic-differentiator/
│   ├── benefits/
│   ├── audience/
│   └── cta/
├── assets/
│   └── css/
│       └── theme.css          # Global styles
├── parts/
│   ├── header.html
│   └── footer.html
├── templates/
│   ├── front-page.html        # Homepage
│   ├── page-about.html        # About page
│   ├── page-services.html     # Services page
│   ├── page-learn.html        # Learning center
│   ├── page-strategy-call.html # Consultation booking
│   ├── page.html
│   ├── index.html
│   └── 404.html
├── functions.php
├── theme.json                 # Global config
├── style.css
└── README.md
```

## 🎨 Custom Blocks Overview

| Block | Purpose | Key Fields |
|---|---|---|
| **Hero** | Main headline & CTA | Headline, button, subheading |
| **Problem** | Pain point identification | Heading, narrative text, concerns |
| **Solution** | Solution presentation | Heading, principles (3) |
| **Strategic Differentiator** | Unique positioning | Heading, comparisons (3) |
| **Benefits** | Key outcomes | Heading, benefits (6) |
| **Audience** | Target customer | Criteria, use cases (3) |
| **CTA** | Call to action | Heading, button, disclaimer |

**All blocks:**
- ✅ Fully responsive (mobile → desktop)
- ✅ Editor-friendly (text fields in sidebar)
- ✅ Styled consistently (design locked)
- ✅ Reusable (add to any page)

## 📄 Page Templates

| Page | Template | Blocks |
|---|---|---|
| **Home** | `front-page.html` | Hero → Problem → Solution → Differentiator → Benefits → Audience → CTA |
| **About** | `page-about.html` | Custom sections + CTA |
| **Services** | `page-services.html` | Custom sections + CTA |
| **Learn** | `page-learn.html` | Custom sections + CTA |
| **Strategy Call** | `page-strategy-call.html` | CTA + Process explanation |

## 🎓 Documentation

### For Content Editors
👉 See **[EDITOR_GUIDE.md](../../../EDITOR_GUIDE.md)**
- How to add/edit content
- Block field reference
- Best practices
- Troubleshooting

### For Developers
👉 See **[MIGRATION_GUIDE.md](../../../MIGRATION_GUIDE.md)**
- Architecture overview
- Block development guide
- File structure details
- Configuration reference
- Performance considerations

## 🔧 Block Development

### Creating a Block

```bash
mkdir blocks/my-block
touch blocks/my-block/{block.json,render.php,style.css}
```

**block.json:**
```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "daniele-manca/my-block",
  "title": "My Block",
  "category": "daniele-manca",
  "attributes": {
    "heading": { "type": "string", "default": "" }
  },
  "supports": {
    "anchor": true,
    "spacing": { "padding": true }
  },
  "editorScript": "file:./render.php",
  "style": "file:./style.css"
}
```

**render.php:**
```php
<?php
$heading = isset( $attributes['heading'] ) ? sanitize_text_field( $attributes['heading'] ) : '';
$wrapper_attrs = get_block_wrapper_attributes( array( 'class' => 'dm-my-block' ) );
?>
<div <?php echo wp_kses_data( $wrapper_attrs ); ?>>
  <h2><?php echo esc_html( $heading ); ?></h2>
</div>
```

**style.css:**
```css
.wp-block-daniele-manca-my-block {
  /* styles */
}
```

Then register in **functions.php**.

## 🎨 Colors & Typography

### Palette
- **Primary:** Black (#000000) background
- **Accents:** Green (#22C55E), Blue (#3B82F6), Yellow (#EAB308)
- **Neutrals:** Grayscale from white to neutral-950
- **Text:** White on black, black on white (CTA section)

### Fonts
- **Headings:** Manrope (Bold, Semibold)
- **Body:** Inter (Regular, Medium)
- Both loaded from Google Fonts

## 🚀 Performance

### What's Optimized
- **Server-rendered:** PHP templates (no JS hydration)
- **Caching-friendly:** Standard WordPress cache support
- **SEO-ready:** Semantic HTML, structured data ready
- **Fast loading:** Minimal CSS, fonts optimized

### Setup Recommendations
```bash
# Use caching plugin
# Install: WP Super Cache or W3 Total Cache

# In wp-config.php
define( 'WP_CACHE', true );
```

## 📱 Responsive Breakpoints

- **Mobile:** Single column (< 768px)
- **Tablet:** 2-column (768px - 1024px)
- **Desktop:** Full multi-column (> 1024px)

All blocks are mobile-first responsive.

## 🔐 Security

All blocks implement:
- ✅ **Sanitization:** `sanitize_text_field()`, `wp_kses_post()`
- ✅ **Escaping:** `esc_html()`, `esc_url()`, `esc_attr()`
- ✅ **Nonces:** (where applicable)
- ✅ **Capability checks:** (where applicable)

## 🐛 Common Issues

### Blocks Not Showing
```
1. Verify WP version ≥ 6.3
2. Check theme is activated
3. Clear browser cache
4. Check wp-content/debug.log
```

### Template Not Applied
```
1. Create page with matching name
2. Edit page → select template in sidebar
3. Publish page
```

### Styles Not Loading
```
1. Hard refresh (Cmd+Shift+R)
2. Check theme.css exists
3. Verify CSS file permissions (644)
```

## ⚡ Workflow

### For Editors
1. Go to **Pages** or **Appearance → Editor**
2. Find the page you want to edit
3. Click on a block to edit its content
4. Change text in the sidebar fields
5. Publish changes

### For Developers
1. Edit block files (block.json, render.php, style.css)
2. Changes take effect immediately (no build step)
3. Test in editor preview and front-end
4. Commit changes to git

## 📊 Comparison: React vs WordPress Theme

| Aspect | React App | WordPress Theme |
|---|---|---|
| **Deployment** | Build → Deploy | Upload → Activate |
| **Editing** | Code changes | WordPress Admin |
| **Performance** | JS bundle | Server rendering |
| **SEO** | Requires SSR | Native |
| **Team Workflow** | Developers only | Editors + Developers |
| **Maintenance** | React dependencies | WordPress updates |

## 🔄 Migration from React

### What Changed
- ✅ React components → WordPress blocks
- ✅ TypeScript → PHP templates
- ✅ Tailwind CSS → CSS custom properties
- ✅ Client routing → WordPress pages
- ✅ State management → Block attributes

### What Stayed the Same
- ✅ Visual design (same colors, typography, layout)
- ✅ Content structure (same sections)
- ✅ User experience (same message)
- ✅ Performance (server-rendered, fast)

## 📞 Support

### Documentation
- **EDITOR_GUIDE.md** - For content editors
- **MIGRATION_GUIDE.md** - For developers
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)

### Local Development
- Use **wp-env** (npm @wordpress/env)
- Or Local by Flywheel
- Or Docker Compose

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/update-hero-block

# Make changes to theme files
# Test in WordPress editor

# Commit changes
git add wp-theme/daniele-manca-digital/
git commit -m "Update Hero block styling"
git push origin feature/update-hero-block

# Create Pull Request
```

## 📈 Next Steps

### Immediate
1. ✅ Activate theme
2. ✅ Create pages (About, Services, Learn, Strategy Call)
3. ✅ Assign templates to pages
4. ✅ Verify all blocks appear
5. ✅ Test on mobile

### Soon
- [ ] Add custom Navigation block
- [ ] Set up SEO metadata per page
- [ ] Configure analytics
- [ ] Set up contact form
- [ ] Add testimonials section (optional)

### Future
- [ ] Custom post types (testimonials, case studies)
- [ ] Advanced block patterns
- [ ] REST API for headless usage
- [ ] Multi-language support (WPML/Polylang)

## 📝 Changelog

### Version 0.1.0 (Initial Release)
- Created 7 custom blocks (Hero, Problem, Solution, Differentiator, Benefits, Audience, CTA)
- Built 5 page templates (Front page, About, Services, Learn, Strategy Call)
- Implemented theme.json with complete design system
- Added block registration in functions.php
- Created comprehensive documentation (Editor Guide, Migration Guide)
- Full FSE support for WordPress 6.3+

---

**Theme Version:** 0.1.0  
**WordPress Requirement:** 6.3+  
**PHP Requirement:** 7.4+  
**Last Updated:** January 2026


- Patterns live under `patterns/` and are grouped in the **Daniele Manca Sections** category.
- `assets/css/theme.css` contains structural styles (grid overlay, section borders, button variants).
