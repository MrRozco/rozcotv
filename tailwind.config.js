/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sixtyfour': ['"Sixtyfour"', 'sans-serif'],
        'jersey': ['"Jersey 15"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}