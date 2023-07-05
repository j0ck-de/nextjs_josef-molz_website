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
        heading: ["var(--font-nunito-sans)"],
        subheading: ["var(--font-amatic-sc)"],
        body: ["var(--font-martel-sans)"],
      },
      colors: {
        primary: "#000",
        secondary: "#fff",
      },
      height: {
        header: "2.5rem",
        hero: 'calc(theme("height.screen") - theme("height.header"))',
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
