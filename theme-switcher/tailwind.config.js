/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        montserrat: ["Montserrat", 'system-ui', 'sans-serif']
      },
      colors: {
        'custom-bg': '#E3EBF2'
      , // Replace '#E5E7EB' with the color you want
      },
    },
  },
  plugins: [],
}