/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        white: "#EEEEEE",
        black: "#464A4E",
        dimBlack: "#706F6F",
        blue: "#1171BA",
      },
    },
  },
  plugins: [],
}
