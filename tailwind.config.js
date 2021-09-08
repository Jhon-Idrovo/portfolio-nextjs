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
      primary: "#F4D06F",
      "txt-primary": "#1D3557",
      secondary: "#F1FAEE",
      "txt-secondary": "#1D3557",
      // 10%
      "primary-accent": "#A8DADC",
      "txt-primary-accent": "#1D3557",
      "secondary-accent": "#FF8811",
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
