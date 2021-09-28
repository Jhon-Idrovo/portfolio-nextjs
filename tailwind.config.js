const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // 60%
      base: "#1D3557",
      "txt-base": "#F1FAEE",
      // 30%
      primary: "#A8DADC", // YELLOW => Clear Blue
      "txt-primary": "#1D3557", // => black
      secondary: "#F1FAEE", //White
      "txt-secondary": "#1D3557", // Black
      // 10%
      "primary-accent": "#66B848", //Clear blue => Yellow => green
      "txt-primary-accent": "#1D3557",
      "secondary-accent": "#FF8811", //Orange
      "txt-secondary-accent": "#1D3557",
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
