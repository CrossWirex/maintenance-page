/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: "#00CC66",
        "russia-violet": "#2f195f",
        "royal-purple": "#7353BA",
        "Midnight-green": "#104F55",
        "myrtle-green": "#3746D2",
        night: "#011502",
        "dark-green": "#01200F",
        "pink-lavender": "#EFC3F5",
        lime: "#BAFF29",
        "honey-dew": "#F1FFE7",
        "rich-black": "#0F1020",
      },
      fontFamily: {
        "Bebas-Neue": ["Bebas Neue", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        "PT-Sans-Narrow": ["PT Sans Narrow", "sans-serif"],
        "Roboto-Mono": ["Roboto Mono", "monospace"],
        "Playfair-Display": ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
