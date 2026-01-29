/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./wp-theme/daniele-manca-digital/**/*.php"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        neutral: {
          850: '#1f1f1f',
          900: '#171717',
          950: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}
