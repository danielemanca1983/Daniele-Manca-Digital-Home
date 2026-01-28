# Homepage Setup Guide - Step-by-Step Instructions

**Theme:** Daniele Manca Digital  
**Purpose:** How to set up and configure the homepage in WordPress after theme activation  
**Time Required:** 10-15 minutes

---

## Prerequisites

Before starting, make sure you have:
- ✅ Downloaded Flywheel Local
- ✅ Created a WordPress site
- ✅ Copied the theme folder to wp-content/themes/
- ✅ Activated the theme in Appearance → Themes

---

## Step 1: Verify Theme Activation

**In WordPress Admin:**

1. Go to **Appearance → Themes**
2. Look for **"Daniele Manca Digital"** theme
3. Verify it shows **"Active"** status
4. If not active, click **"Activate"**

**What you should see:**
- Theme thumbnail appears
- Status shows "Active"
- No error messages

---

## Step 2: Create the Homepage

**In WordPress Admin:**

1. Go to **Pages → Add New**
2. Enter page title: **"Home"**
3. **DO NOT** add any content in the editor
4. On the right sidebar, look for **"Template"** section
5. Select: **"Front Page"** from dropdown
6. Click **"Publish"**

**Screenshot reference:**
```
Editor (top)
├── Title: "Home"
│
Sidebar (right)
└── Template dropdown
    └── "Front Page" ← Select this
```

---

## Step 3: Set as Front Page

**In WordPress Admin:**

1. Go to **Settings → Reading**
2. Under "Your homepage displays"
3. Select **"A static page"**
4. Homepage dropdown: Select **"Home"** (the page you just created)
5. Click **"Save Changes"**

**Verify:**
- ✅ "A static page" is selected
- ✅ Homepage = "Home"
- ✅ Posts page = (optional - leave blank if no blog yet)

---

## Step 4: View Your Homepage

**In Flywheel Local:**

1. Click **"Open Site"** button in Local
2. Browser opens your site
3. You should see the **homepage with all 7 blocks:**
   - Hero section (main banner)
   - Problem section
   - Solution section
   - Strategic Differentiator section
   - Benefits section
   - Audience section
   - CTA section

**If blocks don't appear:**
- Refresh page (Cmd+R on Mac)
- Check browser console (F12 → Console) for errors
- See "Troubleshooting" section below

---

## Step 5: Edit Homepage Content

The homepage is now set up and displaying! But you might want to customize the content.

**Option A: Quick Text Edits**

1. Go to **Pages → All Pages**
2. Click **"Edit"** on the "Home" page
3. Look at the homepage in the visual editor
4. You'll see blocks representing each section
5. Click on any block to see its content
6. **For this theme:** Content is pre-filled from block attributes (in the database)

**Option B: Full Site Editor (Recommended for Designers)**

1. Go to **Pages → All Pages**
2. Click **"Edit"** on the "Home" page
3. Top right: Click **"Edit with Site Editor"** (if available)
4. **In Site Editor:**
   - Click any block to select it
   - Right sidebar shows all editable fields
   - Edit text, change colors, adjust spacing
   - Click **"Save"** or **"Publish"**

---

## Step 6: Understand the Block Structure

The homepage uses **7 custom blocks**. Here's what each does:

### 1. Hero Block
**Location:** Top of page  
**Contains:**
- Status text (e.g., "Strategic Website Design")
- Main heading
- Intro paragraph
- CTA button

**Edit:**
- Click hero section
- Right sidebar shows: statusText, mainHeading, introText, buttonText, buttonUrl

### 2. Problem Block
**Location:** Below hero  
**Contains:**
- 2-column layout
- Left: Intro text
- Right: 3 pain points with icons

**Edit:**
- Click problem section
- Edit title, intro, and pain points array

### 3. Solution Block
**Location:** Middle of page  
**Contains:**
- Centered heading
- 3-card grid with icons
- Footer tagline

**Edit:**
- Click solution section
- Edit heading, card content, tagline

### 4. Strategic Differentiator Block
**Location:** Below solution  
**Contains:**
- 2-column layout
- Left: 4 principles/differences
- Right: SVG line chart visualization

**Edit:**
- Click differentiator section
- Edit principles and status text
- Chart updates automatically

### 5. Benefits Block
**Location:** Below differentiator  
**Contains:**
- Sticky left sidebar (heading)
- Right: 5 benefit cards
- Special "Quiet Shift" callout box

**Edit:**
- Click benefits section
- Edit heading, benefit items, callout text

### 6. Audience Block
**Location:** Below benefits  
**Contains:**
- Heading
- Dual-card layout:
  - Left: "Good Fit" with checkmark
  - Right: "Not Fit" with X icon
- Qualification points for each

**Edit:**
- Click audience section
- Edit title, good fit points, not fit points

### 7. CTA Block
**Location:** Bottom of page  
**Contains:**
- Status text
- Main heading
- Subheading
- CTA button
- Disclaimer text

**Edit:**
- Click CTA section
- Edit all text fields and button URL

---

## Step 7: Make Your First Edit

Let's make a simple test edit to verify everything works:

**In Site Editor:**

1. Go to **Appearance → Edit (Site Editor)**
2. Click on the **Hero block** at the top
3. In right sidebar, find **"Main Heading"** field
4. Change the text to something like: **"Welcome to My Site"**
5. Click **"Save"** or **"Publish"**
6. Go to front-end (click site link in browser)
7. **Verify:** Your new heading appears on the homepage

✅ **If this works, all blocks are properly registered!**

---

## Step 8: Customize Header & Footer (Optional)

The header and footer are shared across all pages.

**Edit Header:**
1. Go to **Appearance → Edit (Site Editor)**
2. Look at the top of any template
3. Click **"Header"** area
4. Click the actual header element
5. Edit navigation, logo, etc.

**Edit Footer:**
1. Go to **Appearance → Edit (Site Editor)**
2. Scroll to bottom of template
3. Click **"Footer"** area
4. Edit footer content

---

## Step 9: Navigate the Site Editor

**Key buttons/areas in Site Editor:**

| Area | What it does |
|------|------------|
| **Top bar** | Shows current page/template, save/publish buttons |
| **Left panel** | Shows page/block structure (click to navigate) |
| **Main editor** | Visual representation of page |
| **Right panel** | Block attributes for editing (when block selected) |
| **Styles tab** (top right) | Edit global colors, fonts, spacing |

**Keyboard shortcuts:**
- `Cmd+S` - Save
- `Escape` - Deselect block
- `Cmd+Z` - Undo
- `Cmd+Shift+Z` - Redo

---

## Step 10: Publish & Test

**Publish your changes:**

1. Click **"Save"** or **"Publish"** in Site Editor
2. Go to **front-end** of site (click site URL in Local)
3. **Verify all blocks display correctly**
4. Test responsive design:
   - Press F12 (Developer Tools)
   - Click mobile device icon
   - Test at different widths (375px, 768px, 1200px)

**Test navigation:**
- Click navigation menu items
- Verify links work
- Check footer links

**Test CTA buttons:**
- Click "Learn More" or CTA buttons
- Verify they link to correct pages

---

## Troubleshooting

### Issue: Blocks don't appear on homepage

**Solution:**
1. Check if "Home" page is set as front page:
   - Settings → Reading → Homepage dropdown should say "Home"
2. Check page template:
   - Pages → Home → Right sidebar → Template should be "Front Page"
3. Clear browser cache:
   - Cmd+Shift+Delete (on Mac)
   - Refresh page (Cmd+R)
4. Check WordPress debug log:
   - Local → Logs → Web Logs
   - Look for PHP errors

### Issue: Text looks wrong (fonts/colors)

**Solution:**
1. Hard refresh (Cmd+Shift+R)
2. Check Google Fonts loaded:
   - F12 → Network tab → filter "fonts.googleapis"
   - Should see Inter and Manrope loading
3. Clear WordPress cache (if using cache plugin)
4. Check theme.json is valid:
   - Go to theme folder
   - Open theme.json
   - Verify JSON syntax is correct

### Issue: Buttons don't work

**Solution:**
1. Check button URL in block attributes
2. Verify pages exist:
   - Pages → All Pages
   - Create missing pages if needed
3. Check menu links:
   - Appearance → Menus
   - Verify all menu items link to correct pages

### Issue: Homepage doesn't load at all

**Solution:**
1. Check WordPress is running in Local
2. Check theme is activated:
   - Appearance → Themes → Verify "Active"
3. Check for PHP errors:
   - Local → Logs → Web Logs
4. Re-activate theme:
   - Appearance → Themes → Activate again

---

## Next Steps After Homepage Setup

Once homepage is working:

1. **Create inner pages:**
   - About page (use page-about.html template)
   - Services page (use page-services.html template)
   - Learn page (use page-learn.html template)
   - Strategy Call page (use page-strategy-call.html template)

2. **Set up navigation menu:**
   - Appearance → Menus
   - Create menu
   - Add pages to menu
   - Set as Primary Menu

3. **Add your content:**
   - Edit each block with your real content
   - Replace placeholder text
   - Update images (if any)

4. **Test everything:**
   - All pages load
   - Navigation works
   - Responsive design looks good
   - No console errors

---

## Important Notes

### About Block Attributes
- All block content is stored as **attributes** in the page
- Changes are saved to the database
- You can export/import content between sites

### Editing via Code (Advanced)
If you need to edit a block template:
1. Go to theme folder: `wp-theme/daniele-manca-digital/blocks/{block-name}/`
2. Edit `render.php` file
3. Save and reload WordPress

### No Hardcoded Content
- Every bit of text can be edited via Site Editor
- No hardcoded content in templates
- Makes site fully customizable

---

## Quick Reference: Common Tasks

### Change homepage title
Pages → Home → Edit → Title field → Publish

### Change hero heading
Site Editor → Click Hero block → Edit "Main Heading" → Publish

### Change CTA button text
Site Editor → Click CTA block → Edit "Button Text" → Publish

### Change CTA button link
Site Editor → Click CTA block → Edit "Button URL" → Publish

### Add new page
Pages → Add New → Title → Select Template → Publish

### Set as front page
Settings → Reading → Homepage dropdown → Select page → Save

### Edit navigation menu
Appearance → Menus → Edit menu → Save

### Change colors/fonts
Appearance → Customize → Styles → Modify colors/fonts → Publish

---

## Success Checklist

After following these steps, verify:

- [ ] Home page created and published
- [ ] Set as front page in Settings → Reading
- [ ] Homepage displays with all 7 blocks
- [ ] All blocks show correct content
- [ ] Hero block text appears at top
- [ ] CTA block appears at bottom
- [ ] No console errors (F12 → Console)
- [ ] Responsive design works (mobile/tablet/desktop)
- [ ] Navigation menu works
- [ ] CTA buttons are clickable

---

## Support

If you get stuck:

1. Check **FLYWHEEL_DEPLOYMENT_GUIDE.md** for general setup
2. Check **ARCHITECTURE_OVERVIEW.md** for block details
3. Check **FILE_MANIFEST.md** for file locations
4. Review block documentation in `/blocks/{block-name}/block.json`

---

*Homepage Setup Guide — January 28, 2026*
