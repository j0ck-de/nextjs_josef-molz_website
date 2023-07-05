/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["var(--font-nunito-sans)"],
        "amatic-sc": ["var(--font-amatic-sc)"],
        "martel-sans": ["var(--font-martel-sans)"],
      },
      colors: {
        primary: "#000",
        secondary: "#ccc",
      },
      height: {
        header: "2.5rem",
        hero: 'calc(theme("height.screen") - theme("height.header"))',
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
