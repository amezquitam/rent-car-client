/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["selector", '[data-mode="dark"]'],
  plugins: [require("tailwindcss-3d")],
};
