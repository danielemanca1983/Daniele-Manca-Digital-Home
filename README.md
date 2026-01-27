<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ZPWniKZ1rJbpTenPdCDqVuihW--6t-nh

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## WordPress block theme (migration)

The WordPress Full Site Editing theme lives in `wp-theme/daniele-manca-digital`.

### Local WordPress setup (wp-env)

1. Start wp-env from the repo root:
   `npx @wordpress/env start`
2. Activate **Daniele Manca Digital** under **Appearance → Themes**.
3. Create pages for **About**, **Services**, **Learn**, and **Strategy Call** and assign the matching templates.

For more details, see the theme README: `wp-theme/daniele-manca-digital/README.md`.
