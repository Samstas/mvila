/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
    },
    extend: {
      colors: {
        cBeige1: "#E8E8E8",
        cBeige2: "#D6D3CA",

        cGreen: "#56503F",
        cBlack: "#202020",
        cBlack2: "#2e2d2d",
        cRed: "#802a2a",
      },
      backgroundImage: {
        "main-hero-bg": "url('/images/main/home_hero.jpg')",
        "visual-hero-bg": "url('/images/visual/visual_hero.jpg')",
      },
      fontFamily: {
        lora: ["var(--font-lora)"],
        forum: ["var(--font-forum)"],
      },
      backgroundPosition: {
        left: "left",
        "left-2": "-29rem",
      },
    },
  },
  plugins: [],
};
