/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C3F39",
        secondary: "#0A8270",
        tertiary: "#FFBC00",
        quaternary: "#FFFAEC",
      },
      fontFamily: {
        Naskh: ['"Noto Naskh Arabic"', "serif"],
        Merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
