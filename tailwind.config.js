/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#3C486B",
        light: "#F0F0F0",
        primary: "#F9D949",
        secondary: "#F45050",
      },
      fontFamily: {
        mons:['Montserrat', 'sans-serif'],
        sans:['Work Sans', 'sans-serif'],
        poor:['Poor Story', 'system-ui']
      },
    },
  },
  plugins: [],
};
