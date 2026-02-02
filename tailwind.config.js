/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Muli', 'sans-serif'],
        title: ['Saira Extra Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
