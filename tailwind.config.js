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
      grayscale: {
        50: "50%",
      },
      backgroundImage: {
        home: "url('https://res.cloudinary.com/myclound/image/upload/v1654705613/codecamp-e-commerce/webImage/background/bg_ms3_fmk45k.jpg')",
        shop: "url('https://res.cloudinary.com/myclound/image/upload/v1654705606/codecamp-e-commerce/webImage/background/bg_ms1_rq7m8s.jpg')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("preline/plugin")],
};
