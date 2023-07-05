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
      height: {
        header: "2.5rem",
        hero: 'calc(100vh - theme("height.header"))',
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
