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
      "blue": "#2962FF",
      "green": "#0BB07B",
      "warning": "#FFCE52",
      "error": "#F03D3D",
      "information": "#E0E0E0",
      "text": "#FEFBFB"
    },
    backgroundImage: {
      "user": "url('./src/assets/user.svg')",
      "at-sign": "url('./src/assets/at-sign.svg')",
      "lock": "url('./src/assets/lock.svg')",
    },
    backgroundPosition: {
      left: "8px"
    }
  },
  plugins: [],
}