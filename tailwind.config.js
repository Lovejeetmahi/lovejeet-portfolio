/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- THIS LINE IS CRITICAL FOR THE BUTTON TO WORK
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#fff1f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        onyx: '#020202'
      }
    },
  },
  plugins: [],
}