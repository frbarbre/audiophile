/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#D87D4A",
        "near-black": "#101010",
        "orange-pale": "#fbaf85",
        grey: "#F1F1F1",
        "dark-gray": "#4C4C4C",
        "li-gray": "#FAFAFA",
        red: "#CD2C2C",
      },
      backgroundImage: {
        "circle-pattern": "url('/home/desktop/pattern-circles.svg')",
        "speaker-banner-mobile": "url('/home/mobile/image-speaker-zx7.jpg')",
        "speaker-banner-tablet": "url('/home/tablet/image-speaker-zx7.jpg')",
        "speaker-banner-desktop": "url('/home/desktop/image-speaker-zx7.jpg')",
      },
    },
    screens: {
      md: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
};
