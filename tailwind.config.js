/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#ccc",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
