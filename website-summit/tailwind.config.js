/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   pril: "#031B88",
    // },
    backgroundImage: {
      'ban-ner': "url('./images/banner.png')",
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
  animation: {
    'bounce-slow': 'bouce 3s',
  }
};
