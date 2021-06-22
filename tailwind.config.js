const { warmGray } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      base: colors.black,
      "base-ligth": warmGray[600],
      "txt-base": colors.white,
      primary: colors.lime[400],
      "txt-primary": colors.black,
      secondary: colors.warmGray[700],

      "txt-secondary": colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
