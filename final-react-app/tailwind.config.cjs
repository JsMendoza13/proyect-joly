/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A6C157",
        secundary: "#B3A943",
        tertiary: "#FAC472",
        quaternary: "#EBEDEE",
      },
    },
  },
  plugins: [],
};
