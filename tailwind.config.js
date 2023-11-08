/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: { "rubik": ["Rubik", "monospace", "sans-serif"] },
    colors: {
      "brand": "#00A3FF",
      "dark-blue": "#0054C6",
      "dark-10": "#1A191E",
      "dark-20": "#09090B",
      "dark-30": "#151B26",
      "dark-40": "#A3A3A3",
      "footer": "#090E18",
      "gradient-image-to": "rgba(9, 9, 11, 0.10)",
      "gradient-image-from": "rgba(9, 9, 11, 1)",
      "blue": "#2962FF",
      "green": "#0BB07B",
      "warning": "#FFCE52",
      "error": "#F03D3D",
      "information": "#E0E0E0",
      "white": "#FEFBFB"
    },
    backgroundPosition: {
      left: "8px"
    }
  },
  plugins: [],
}