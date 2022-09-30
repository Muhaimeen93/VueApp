/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const tailwindcss = require("tailwindcss");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss],
};
