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
        primary: "#03B2CA",
        secondary: "#0361CA",
        "near-black": "#101010",
        "primary-pale": "#fbaf85",
        grey: "#F1F1F1",
        "dark-gray": "#4C4C4C",
        "li-gray": "#FAFAFA",
        error: "#CD2C2C",
      },
      backgroundImage: {
        grad: "linear-gradient(95deg, #03B2CA 0%, #0361CA 100%)",
        "grad-pale":
          "linear-gradient(95deg, rgba(3, 178, 202, 0.80) 0%, rgba(3, 95, 202, 0.80) 100%)",
        "circle-pattern": "url('/home/desktop/pattern-circles.svg')",
        "speaker-banner-desktop": "url('/home/beast-promo.png')",
      },
    },
    screens: {
      md: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
};
