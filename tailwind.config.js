const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    "./pages/**/*.{html,js,jsx,tsx}",
    "./components/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
