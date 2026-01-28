# WordPress Block Theme Migration Guide

## Overview

This document details the complete migration from a React + TypeScript marketing website to a WordPress Block Theme using Full Site Editing (FSE).

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Custom Blocks Created](#custom-blocks-created)
3. [File Structure](#file-structure)
4. [Block Registration](#block-registration)
5. [Template Structure](#template-structure)
6. [Styling & CSS](#styling--css)
7. [Configuration Files](#configuration-files)
8. [Development Workflow](#development-workflow)
9. [Known Limitations & Considerations](#known-limitations--considerations)

---

## Architecture Overview

### React → WordPress Translation

| React Element | WordPress Equivalent |
|---|---|
| React Components (.tsx) | Custom Blocks (block.json + render.php) |
| Component Props | Block Attributes (block.json) |
| Tailwind CSS | CSS Custom Properties + Block Styles |
| Client-side Routing | WordPress Page Templates |
| State Management | Block Attributes (stored in post meta) |

### Core Philosophy

- **Editor-First:** All content is editable in WordPress Admin
- **Attribute-Driven:** Block configuration stored as JSON attributes
- **PHP Rendering:** Server-side rendering for performance
- **CSS Preserved:** Visual design mirrors the original React site
- **No JavaScript Build:** Blocks work with standard WordPress (PHP-based)

---

## Custom Blocks Created

### 1. Hero Block
**Path:** `/blocks/hero/`

**Files:**
- `block.json` - Block configuration & attributes
- `render.php` - Server-side rendering
- `style.css` - Block-specific styles
- `view.js` - Frontend JavaScript (smooth scrolling)

**Attributes:**
```json
{
  "status": "string (default: 'Calm Authority, Broader Reach')",
  "headline": "string (main title)",
  "highlightedText": "string (text to style in neutral-500 gray)",
  "subheading": "string (supporting text)",
  "buttonText": "string (CTA button label)",
  "buttonUrl": "string (button link URL)",
  "disclaimerText": "string (small disclaimer below button)",
  "minHeight": "string (CSS height value)"
}
```

**Rendering:**
- Server-side PHP render ensures fast initial page load
- Status indicator has CSS-based pulse animation
- Dynamic highlighting of specified text in headline

---

### 2. Problem Block
**Path:** `/blocks/problem/`

**Attributes:**
```json
{
  "mainHeading": "string",
  "headingHighlight": "string (text to color neutral-500)",
  "narrativeParagraphs": "array of strings (4 items)",
  "concernTitle": "string",
  "concerns": "array of strings (3 items)"
}
```

**Design Features:**
- Two-column layout on desktop, single column on mobile
- Second narrative paragraph styled as emphasized quote (white + left border)
- Concern box with warning icon SVG

---

### 3. Solution Block
**Path:** `/blocks/solution/`

**Attributes:**
```json
{
  "mainHeading": "string",
  "headingHighlight": "string (text to color green-500)",
  "introText": "string",
  "principles": "array of objects [{title, description}, ...]"
}
```

**Design Features:**
- 3-column grid on desktop
- Hover effect: border changes to green-500
- Card-based layout with padding and borders

---

### 4. Strategic Differentiator Block
**Path:** `/blocks/strategic-differentiator/`

**Attributes:**
```json
{
  "mainHeading": "string",
  "introText": "string",
  "comparisons": "array of objects [{title, description}, ...]"
}
```

**Design Features:**
- Vertical stack of comparison cards
- Hover effect for interactivity

---

### 5. Benefits Block
**Path:** `/blocks/benefits/`

**Attributes:**
```json
{
  "mainHeading": "string",
  "benefits": "array of objects [{title, description}, ...]"
}
```

**Design Features:**
- 2-column grid on desktop
- Blue border on hover (blue-500)
- 6 default benefits provided

---

### 6. Audience Block
**Path:** `/blocks/audience/`

**Attributes:**
```json
{
  "mainHeading": "string",
  "introText": "string",
  "audiencePoints": "array of strings (6 items)",
  "usesCaseHeading": "string",
  "useCases": "array of objects [{title, description}, ...]"
}
```

**Design Features:**
- Two sections: audience criteria + use cases
- Audience points have yellow checkmarks
- Use cases in 3-column grid
- Dark background (neutral-950)

---

### 7. CTA Block
**Path:** `/blocks/cta/`

**Attributes:**
```json
{
  "statusText": "string",
  "mainHeading": "string",
  "subheading": "string",
  "buttonText": "string",
  "buttonUrl": "string",
  "disclaimerText": "string"
}
```

**Design Features:**
- **WHITE BACKGROUND** - inverted from other blocks
- Large button with black background
- Hover effect on button
- Calendar icon in status badge

---

## File Structure

```
wp-theme/daniele-manca-digital/
├── blocks/                          # Custom block directory
│   ├── hero/
│   │   ├── block.json              # Block configuration
│   │   ├── render.php              # PHP template
│   │   ├── style.css               # Block styles
│   │   └── view.js                 # Frontend script
│   ├── problem/
│   │   ├── block.json
│   │   ├── render.php
│   │   └── style.css
│   ├── solution/
│   ├── strategic-differentiator/
│   ├── benefits/
│   ├── audience/
│   └── cta/
├── assets/
│   └── css/
│       └── theme.css               # Global theme styles (Tailwind output)
├── parts/
│   ├── header.html                 # Header template part
│   └── footer.html                 # Footer template part
├── patterns/                        # Reusable block patterns (optional)
│   └── [patterns for common layouts]
├── templates/
│   ├── front-page.html             # Homepage template
│   ├── page-about.html             # About page
│   ├── page-services.html          # Services page
│   ├── page-learn.html             # Learning/Resources page
│   ├── page-strategy-call.html     # Strategy call booking page
│   ├── page.html                   # Default page template
│   ├── index.html                  # Default post template
│   └── 404.html                    # 404 error page
├── functions.php                   # Theme setup & block registration
├── theme.json                      # Global theme configuration
├── style.css                       # Main stylesheet (required)
├── README.md                       # Theme documentation
└── screenshot.png                  # Theme screenshot

WORKSPACE ROOT/
├── EDITOR_GUIDE.md                 # Editor instructions
├── MIGRATION_GUIDE.md              # This file
└── [Original React/TypeScript files] (can be archived/removed)
```

---

## Block Registration

All blocks are registered in `functions.php`:

```php
// Register custom blocks
add_action( 'init', function () {
    $blocks = array(
        'hero',
        'problem',
        'solution',
        'strategic-differentiator',
        'benefits',
        'audience',
        'cta',
    );

    foreach ( $blocks as $block ) {
        register_block_type( 
            get_theme_file_path( "/blocks/{$block}/block.json" ) 
        );
    }
} );
```

**Block.json Structure:**

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "daniele-manca/hero",
  "title": "Hero Section",
  "category": "daniele-manca",
  "description": "Main hero section with headline and CTA",
  "attributes": { /* ... */ },
  "supports": {
    "anchor": true,
    "className": true,
    "spacing": { "padding": true, "margin": true },
    "html": false
  },
  "editorScript": "file:./render.php",
  "style": "file:./style.css"
}
```

---

## Template Structure

### Front Page (`front-page.html`)

```html
<!-- wp:template-part {"slug":"header","tagName":"header"} /-->
<!-- wp:group {"className":"dm-header-spacer"} -->
  <div class="wp-block-group dm-header-spacer"></div>
<!-- /wp:group -->

<!-- wp:group {"tagName":"main","layout":{"type":"constrained"}} -->
<main class="wp-block-group">
  <!-- Each custom block added here -->
  <!-- wp:daniele-manca/hero {...attributes} /-->
  <!-- wp:daniele-manca/problem {...attributes} /-->
  <!-- ... etc -->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
```

### Block Instantiation

Each block is instantiated with default attributes:

```html
<!-- wp:daniele-manca/hero {
  "status": "Calm Authority, Broader Reach",
  "headline": "Turn Your Website Into...",
  "highlightedText": "Business Asset",
  "buttonText": "Book a Strategy Consultation",
  "buttonUrl": "#cta"
} /-->
```

---

## Styling & CSS

### Global Styles (`theme.json`)

```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        {"name": "Black", "slug": "black", "color": "#000000"},
        {"name": "White", "slug": "white", "color": "#ffffff"},
        {"name": "Green 500", "slug": "green-500", "color": "#22c55e"},
        {"name": "Blue 500", "slug": "blue-500", "color": "#3b82f6"},
        /* ... more colors ... */
      ]
    },
    "typography": {
      "fontFamilies": [
        {"fontFamily": "'Inter', sans-serif", "name": "Inter", "slug": "inter"},
        {"fontFamily": "'Manrope', sans-serif", "name": "Manrope", "slug": "manrope"}
      ],
      "fontSizes": [
        {"name": "Small", "slug": "small", "size": "0.875rem"},
        {"name": "Display", "slug": "display", "size": "4rem"},
        /* ... more sizes ... */
      ]
    },
    "spacing": {
      "spacingSizes": [
        {"name": "XS", "slug": "xs", "size": "0.75rem"},
        {"name": "3XL", "slug": "3xl", "size": "6rem"}
      ]
    }
  },
  "styles": {
    "color": {
      "background": "var(--wp--preset--color--black)",
      "text": "var(--wp--preset--color--white)"
    }
  }
}
```

### Block-Specific Styles

Each block has its own `style.css`:

```css
/* Hero Block Styles */
.wp-block-daniele-manca-hero {
    position: relative;
    min-height: var(--min-height, 90vh);
}

.dm-hero {
    padding-top: 2rem;
}

@media (min-width: 1024px) {
    .dm-hero {
        padding-top: 4rem;
    }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.dm-hero .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### CSS Custom Properties

Tailwind is NOT used in the rendering. Instead:
- Colors use CSS custom properties from theme.json
- Responsive behavior uses media queries
- Layout uses Flexbox/Grid with explicit classes

**Example:**
```css
.text-neutral-500 {
    color: var(--wp--preset--color--neutral-500, #737373);
}

.bg-black {
    background-color: var(--wp--preset--color--black, #000000);
}
```

---

## Configuration Files

### `theme.json`

Defines:
- Color palette
- Font families & sizes
- Spacing scale
- Global block styles
- Editor settings

**Key Sections:**
```json
{
  "settings": {
    "color": { "defaultPalette": false, "palette": [...] },
    "typography": { "customFontSize": false, "fontSizes": [...] },
    "layout": { "contentSize": "1200px", "wideSize": "1600px" }
  },
  "styles": {
    "color": { "background": "...", "text": "..." },
    "elements": { "h1": {...}, "h2": {...} }
  }
}
```

### `functions.php`

Handles:
- Theme setup & supports
- Block registration
- Asset enqueueing
- Block pattern categories

**Key Functions:**
```php
add_action( 'after_setup_theme', function () {
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'editor-styles' );
    add_editor_style( 'assets/css/theme.css' );
} );

add_action( 'init', function () {
    register_block_type( get_theme_file_path( "/blocks/{$block}/block.json" ) );
} );
```

---

## Development Workflow

### Creating a New Block

1. **Create directory:**
   ```bash
   mkdir wp-theme/daniele-manca-digital/blocks/my-block
   ```

2. **Create block.json:**
   ```json
   {
     "$schema": "https://schemas.wp.org/trunk/block.json",
     "apiVersion": 3,
     "name": "daniele-manca/my-block",
     "title": "My Block",
     "category": "daniele-manca",
     "attributes": {
       "content": { "type": "string", "default": "" }
     },
     "supports": {
       "anchor": true,
       "className": true,
       "spacing": { "padding": true }
     },
     "editorScript": "file:./render.php",
     "style": "file:./style.css"
   }
   ```

3. **Create render.php:**
   ```php
   <?php
   $content = isset( $attributes['content'] ) ? wp_kses_post( $attributes['content'] ) : '';
   $wrapper_attrs = get_block_wrapper_attributes( array( 'class' => 'dm-my-block' ) );
   ?>
   <div <?php echo wp_kses_data( $wrapper_attrs ); ?>>
     <?php echo wp_kses_post( $content ); ?>
   </div>
   ```

4. **Create style.css:**
   ```css
   .wp-block-daniele-manca-my-block {
       /* styles */
   }
   ```

5. **Register in functions.php:**
   Add `'my-block'` to the `$blocks` array.

### Editing Existing Blocks

1. Update `block.json` for new attributes
2. Update `render.php` to use new attributes
3. Update `style.css` for styling changes
4. Blocks auto-reload in WordPress (no build step needed)

### Testing Blocks

1. Go to WordPress Admin → Pages
2. Create/edit a page
3. Add your custom block from the Daniele Manca Sections category
4. Edit attributes in the sidebar
5. Preview changes in real-time

---

## Known Limitations & Considerations

### 1. **No Real-Time Block Preview**
- Block preview in editor uses `render.php`
- Not a true WYSIWYG (some styling may differ)
- Always preview on front-end before publishing

### 2. **Attributes are Stored in Post Meta**
- Block attributes are JSON in the post_content
- Changing block.json attributes doesn't migrate existing content
- Existing blocks must be re-edited to save new attributes

### 3. **No Dynamic Content**
- Blocks are static content, not dynamic queries
- To add related posts, testimonials, etc., requires custom development

### 4. **CSS is Fixed per Block Type**
- Editors can't change colors, fonts per-block
- Color palette defined in theme.json applies globally
- Custom styling requires theme developer assistance

### 5. **PHP Rendering Only**
- No JavaScript-based rendering (unlike React)
- Animations are CSS-only (no JS state management)
- Performance benefit: no client-side rendering overhead

### 6. **Migration Notes**
- React components are no longer used
- TypeScript is not needed for blocks
- All logic is PHP server-side

---

## Performance Considerations

### Advantages of PHP Blocks vs React

| Aspect | PHP Blocks | React SPA |
|---|---|---|
| Initial Load | Faster (server-rendered) | Slower (JS bundle) |
| Server Load | Higher CPU (PHP rendering) | Lower (static files) |
| SEO | Excellent (server HTML) | Good (requires SSR) |
| Interactivity | CSS/minimal JS | Full JS app |
| Caching | Standard WP caching | More complex |
| Bundle Size | ~0KB | ~50-100KB+ |

### Recommended Setup

1. **Enable Caching:**
   - Use WP Super Cache or W3 Total Cache
   - Cache rendered pages for 24 hours
   - Invalidate on content updates

2. **Use CDN:**
   - Serve static assets (CSS, images) from CDN
   - Improves performance globally

3. **Optimize Images:**
   - Use AVIF/WebP formats
   - Lazy-load below-the-fold images
   - Compress all images

4. **Database Optimization:**
   - Regular cleanup of post revisions
   - Optimize database tables monthly

---

## Future Enhancements

### Potential Additions

1. **Custom Block Patterns:**
   - Pre-made page layouts
   - Reusable section combinations

2. **Dynamic Content Blocks:**
   - Pull testimonials from custom post type
   - Display recent blog posts
   - Team member listings

3. **Advanced Controls:**
   - Color picker per block (with validation)
   - Typography controls
   - Spacing controls per breakpoint

4. **REST API:**
   - Expose block data for headless consumption
   - Allow external applications to read/write block content

---

## Troubleshooting

### Block Not Registering
```php
// Check functions.php has correct path
var_dump( get_theme_file_path( "/blocks/hero/block.json" ) );
// Should output: /path/to/theme/blocks/hero/block.json
```

### Attributes Not Saving
1. Clear browser cache
2. Ensure block.json attribute types match data being saved
3. Check PHP render function for typos

### Styles Not Loading
1. Verify style.css file path
2. Check class names match in render.php and style.css
3. Hard refresh browser (Cmd+Shift+R on Mac)

### White Screen of Death
1. Enable WP_DEBUG in wp-config.php
2. Check /wp-content/debug.log
3. Likely PHP syntax error in render.php

---

## Git Workflow

### Suggested .gitignore

```
# WordPress
/wp-admin/
/wp-includes/
/wp-content/plugins/*
!/wp-content/plugins/[your-plugins]
wp-config.php
wp-content/uploads/
wp-content/cache/

# Theme
.DS_Store
node_modules/
*.log

# IDE
.vscode/
.idea/
*.swp
```

### Version Control

```bash
# Commit block changes
git add wp-theme/daniele-manca-digital/blocks/
git commit -m "Update Hero block with new attributes"

# Don't commit generated files
git add -u  # Stage deletions only
```

---

## Support & Resources

### Official Documentation
- [WordPress Block Editor](https://developer.wordpress.org/block-editor/)
- [Block JSON Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)
- [Block Rendering](https://developer.wordpress.org/plugins/block-editor/block-registration/block-render/)

### Theme Documentation
- See `EDITOR_GUIDE.md` for editor instructions
- See `README.md` in theme directory for setup

---

**Last Updated:** January 2026
**Theme Version:** 0.1.0
**WordPress Requirement:** 6.3+
**PHP Requirement:** 7.4+
