const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      base: colors.black,
      "base-ligth": colors.warmGray[600],
      "txt-base": colors.white,
      primary: colors.green[600],
      "txt-primary": colors.white,
      secondary: colors.warmGray[700],

      "txt-secondary": colors.white,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
