# WordPress Block Theme - Editor Guide

## Welcome to the Daniele Manca Digital Block Theme

This WordPress theme has been built using **Full Site Editing (FSE)** with custom blocks that replicate the design and functionality of the original React website. Everything is now editable directly from WordPress Admin — no coding required.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Understanding the Block Structure](#understanding-the-block-structure)
3. [Managing Content](#managing-content)
4. [Customizing Blocks](#customizing-blocks)
5. [Best Practices](#best-practices)
6. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Accessing the Editor

1. Log in to WordPress Admin
2. Go to **Appearance → Editor** (or **Pages** to edit individual pages)
3. You'll see the Full Site Editor with all available templates and blocks

### Available Pages

- **Front Page** - Homepage with all main sections
- **About** - About/About the Author page
- **Services** - Services offered
- **Learn** - Knowledge/Learning Center
- **Strategy Call** - Strategy consultation booking page

---

## Understanding the Block Structure

Your website uses **7 custom blocks** that work together to create the complete design:

### 1. **Hero Block**
**Purpose:** Main headline section with CTA button

**Editable Fields:**
- Status Text (e.g., "Calm Authority, Broader Reach")
- Headline (main title)
- Highlighted Text (text to appear in muted gray)
- Subheading
- Button Text
- Button URL (where the button links to)
- Disclaimer Text (small text below button)

**Example Use:**
```
Headline: Turn Your Website Into a Real Business Asset — Not a Source of Stress
Highlighted Text: Business Asset
Button Text: Book a Strategy Consultation
Button URL: #cta
```

---

### 2. **Problem Block**
**Purpose:** Identifies the problem/pain point section

**Editable Fields:**
- Main Heading
- Heading Highlight (text to style differently)
- Narrative Paragraphs (4 text blocks)
- Concern Title
- Concerns (3 bulleted items)

**Design Notes:**
- The second narrative paragraph is automatically styled in white with left border
- Concerns appear in a highlighted box with warning icon

---

### 3. **Solution Block**
**Purpose:** Presents the solution and key principles

**Editable Fields:**
- Main Heading
- Heading Highlight
- Intro Text
- Principles (3 items with title + description each)

**Design Notes:**
- Principle cards have a hover effect (green border on hover)
- Maintains consistent card styling across the theme

---

### 4. **Strategic Differentiator Block**
**Purpose:** Explains what makes this approach unique

**Editable Fields:**
- Main Heading
- Intro Text
- Comparisons (3 items with title + description each)
  - "vs. DIY / Template Builders"
  - "vs. Cheap Offshore Agencies"
  - "vs. 'Full-Service' Agencies"

**Design Notes:**
- Cards stack on mobile, display in a single column on desktop
- Hover effect on cards

---

### 5. **Benefits Block**
**Purpose:** Lists key benefits and outcomes

**Editable Fields:**
- Main Heading (e.g., "What You Get")
- Benefits (6 items with title + description each)

**Default Benefits:**
- Clear Commercial Direction
- Dependable Performance
- Competitive Credibility
- Reduced Risk and Cost
- Sustainable Growth
- Peace of Mind

**Design Notes:**
- Benefits display in a 2-column grid on desktop, 1 column on mobile
- Cards have blue border on hover

---

### 6. **Audience Block**
**Purpose:** Identifies the ideal audience and use cases

**Editable Fields:**
- Main Heading (e.g., "Who This Works For")
- Intro Text
- Audience Points (6 bulleted items)
- Use Cases Heading (e.g., "Typical Use Cases")
- Use Cases (3 items with title + description each)

**Design Notes:**
- Audience points have checkmark indicators (✓)
- Use cases display in a 3-column grid on desktop
- Background color is neutral-950 (dark)

---

### 7. **CTA (Call to Action) Block**
**Purpose:** Main conversion block for booking consultations

**Editable Fields:**
- Status Text (e.g., "Calm, Clear, Reassuring")
- Main Heading
- Subheading
- Button Text
- Button URL
- Disclaimer Text

**Design Notes:**
- **WHITE BACKGROUND** - stands out from the black sections
- Large button with hover effect
- Perfect for page endings or key conversion moments

---

## Managing Content

### Adding a Block to a Page

1. Open the page in the Full Site Editor
2. Click the **+** icon where you want to add a block
3. Search for the block by name (e.g., "Hero", "Problem", etc.)
4. Select it from the Daniele Manca Sections category
5. Fill in the fields in the Block Settings panel (right sidebar)

### Editing Block Content

1. Click on the block to select it
2. The **Block Settings** panel appears on the right
3. Edit any field directly in the text input boxes
4. Changes appear live in the editor preview

### Deleting a Block

1. Click the block to select it
2. Press **Delete** or click the **three dots** menu and choose **Delete**

### Reordering Blocks

1. Click and drag the block by its left edge
2. Move it up or down to reorder
3. Release to place

---

## Customizing Blocks

### Text Formatting in Block Fields

Most fields support:
- **Bold** text (using `<strong>` tags)
- *Italic* text (using `<em>` tags)
- Line breaks (use HTML `<br>` or just press Enter)

### Changing Link URLs

Every CTA block and Hero block has a **Button URL** field:
- Use full URLs: `https://calendly.com/example`
- Or anchor links: `#cta` (jumps to an ID on the page)

### Color/Styling

Colors are defined in the **theme.json** file and cannot be changed per-block. However:
- Some blocks have hover effects (green, blue, etc.)
- Text colors are determined by block type
- Background colors are fixed to maintain design consistency

---

## Best Practices

### 1. **Keep Headings Concise**
- Use short, punchy headlines
- Save details for body text
- Use the "Highlight" fields to emphasize key words

### 2. **Use Paragraph Breaks**
- Break long text into multiple paragraphs for readability
- Each narrative paragraph can be separate

### 3. **Consistent Tone**
- Maintain professional, business-first language
- Avoid technical jargon
- Match the existing tone and style

### 4. **Button URLs**
- Always test button links work correctly
- Use `#cta` to link to the main CTA block
- Use `#problem` or `#solution` for section anchors

### 5. **Mobile-Friendly Content**
- Headings should be readable on small screens
- Avoid very long sentences
- Test on mobile before publishing

### 6. **Maintain Visual Hierarchy**
- Hero block = largest text (main message)
- Section headings = medium size
- Body text = smaller, neutral gray

---

## Troubleshooting

### Block Not Showing on Front-End?
- Make sure the block is added to the correct template
- Check that you've **Published** the page/template
- Clear your browser cache

### Text Looks Different Than Expected?
- Check if you accidentally used HTML formatting tags
- Verify the block type matches what you intended
- Some blocks have fixed colors (e.g., CTA block = white background)

### Button Not Working?
- Verify the Button URL is correct
- For internal links, use `#` + the section ID
- For external links, use full URL starting with `https://`

### Multiple Blocks Showing Duplicates?
- You may have added the block twice
- Delete the duplicate and publish again

### Need Custom Styling?
- Contact the theme developer for CSS modifications
- Block styles are defined in `/blocks/[blockname]/style.css`
- Changes require developer intervention

---

## Block Template Quick Reference

```
Front Page Structure:
├── Hero (Welcome headline + main CTA)
├── Problem (Pain point identification)
├── Solution (The approach)
├── Strategic Differentiator (What's unique)
├── Benefits (What you get)
├── Audience (Who this is for)
└── CTA (Final call to action)

About Page Structure:
├── Introduction (Custom group)
├── Origin Story (Custom group)
└── CTA Block

Services Page Structure:
├── Hero Section (Custom group)
├── Philosophy (Custom group)
└── CTA Block

Learn Page Structure:
├── Knowledge Hub Intro (Custom group)
├── Content Pillars (Custom group)
└── CTA Block

Strategy Call Page Structure:
├── Primary CTA Block
└── What to Expect (Custom group)
```

---

## Editing Templates vs. Pages

### Templates
- Apply to multiple pages (e.g., "page" template applies to all pages)
- Edit at **Appearance → Editor → Templates**
- Changes affect all pages using that template

### Individual Pages
- Specific to one page
- Edit at **Pages** → select the page
- Overrides the template

---

## Publishing Changes

1. **Draft:** Save without publishing (test changes)
2. **Publish:** Make changes live immediately
3. **Scheduled:** Set a date/time for automatic publishing

All changes to templates and pages publish instantly to the front-end.

---

## Getting Help

If you encounter issues:

1. **Check this guide** for common solutions
2. **Test in Draft mode** before publishing
3. **Clear browser cache** if changes don't appear
4. **Contact the theme developer** for custom code changes

---

## Key Takeaways

✅ **You control all text content** through the blocks
✅ **No coding required** — just fill in the text fields
✅ **All pages use the same blocks** for consistency
✅ **Changes publish immediately** — be careful with live edits
✅ **Mobile responsive** — blocks automatically adjust
✅ **Professional design maintained** — block styles are locked

---

**Last Updated:** January 2026
**Theme Version:** 0.1.0
**WordPress Requirement:** 6.3+
