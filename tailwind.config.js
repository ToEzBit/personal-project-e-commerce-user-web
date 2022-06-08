module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#00598a",
        "button-blue": "#2176AE",
        "button-hover": "#FEBF6E",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
