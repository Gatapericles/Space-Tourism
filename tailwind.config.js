/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BarlowCondensed: ["Barlow Condensed, sans-serif"],
        Barlow: ["Barlow"],
      },
      screens: {
        sm: "380px",
        sm_md: "700px",
        md: "770px",
        lg: "976px",
        xl: "1440px",
      }
    },
  },
  plugins: [],
}

