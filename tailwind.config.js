/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   pril: "#031B88",
    // },
    fontFamily: {
      'sans': ['Raleway', 'Manjari', 'ui-sans-serif', 'system-ui', '-apple-system'],
      'poppins': ['Poppins', 'Manjari', 'ui-sans-serif', 'system-ui', '-apple-system'],
    },
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
