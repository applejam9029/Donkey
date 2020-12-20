const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      gray: { ...colors.coolGray, 0: "#ffffff", 1000: "#000000" },
      primary: {
        50: "#f1faf7",
        100: "#def2ea",
        200: "#c0e5d7",
        300: "#96d2bf",
        400: "#69b9a3",
        500: "#4b9f8b",
        600: "#3d8575",
        700: "#2f685d",
        800: "#2c5950",
        900: "#19332E",
      },
      secondary: {
        50: "#fdfbf1",
        100: "#faf3d7",
        200: "#f5e6ab",
        300: "#efd580",
        400: "#ecc562",
        500: "#e6ae50",
        600: "#d1924a",
        700: "#b77949",
        800: "#9f6b4b",
        900: "#8c6249",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [],
}
