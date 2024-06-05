/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": '"Jost", sans-serif',
      },
      colors: {
        'background-color': '#171D25',
        'util': '#1B2838',
        'text': '#C3C7D9',
        'hover': '#34ACF2',
        'span': '#1A9AF6',
        'gradient2': '#2A475E',
      }
    },
  },
  plugins: [],
}

