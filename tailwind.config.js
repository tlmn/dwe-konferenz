const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#FFF",
      purple: "#811C62",
      yellow: "#FDD816",
    },
    fontFamily: {
      sans: ["Suisse Intl", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
