# Daniele Manca Digital Block Theme

This folder contains the WordPress block theme that mirrors the original React marketing site.

## Local setup

Use any local WordPress environment. Suggested options:

- **wp-env**: https://developer.wordpress.org/block-editor/getting-started/devenv/
- **Local** (by Flywheel): https://localwp.com/
- **Docker**: https://developer.wordpress.org/advanced-administration/hosting/docker/

### Quick wp-env example

1. From the repo root, create a `.wp-env.json` file (optional) that maps the theme:

   ```json
   {
     "themes": ["./wp-theme/daniele-manca-digital"]
   }
   ```

2. Run:

   ```bash
   npx @wordpress/env start
   ```

3. Activate **Daniele Manca Digital** under **Appearance → Themes**.
4. Create pages for **About**, **Services**, **Learn**, and **Strategy Call** and assign the matching templates.

## Page/template mapping

| Page | Template |
| --- | --- |
| Home | `front-page.html` |
| About | `page-about.html` |
| Services | `page-services.html` |
| Learn | `page-learn.html` |
| Strategy Call | `page-strategy-call.html` |

## Parity checklist

- **Visual**: Check spacing, typography scale, button styles, and section dividers.
- **Editor**: Confirm each section is editable and blocks are reusable in patterns.
- **Navigation**: Update the Navigation block to link to the correct pages.
- **Accessibility**: Verify heading order, contrast on dark sections, and focus styles.
- **Performance**: Confirm fonts load once and no unused assets are enqueued.

## Notes

- Patterns live under `patterns/` and are grouped in the **Daniele Manca Sections** category.
- `assets/css/theme.css` contains structural styles (grid overlay, section borders, button variants).
