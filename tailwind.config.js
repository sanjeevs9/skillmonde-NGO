/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "PGreen":"#8CCF27",
        "PPurple":"#472E8C"
      }
    },
  },
  plugins: [],
}