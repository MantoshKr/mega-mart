const {fontFamily} = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contentContainer: "1280px",
    },
    extend: {
      screens: {
        "xs": "320px",
        "sm": "375px",
        "sm2": "467px",
        "sml": "500px",
        "sml2": "600px",
        "md": "667px",
        "mdl": "768px",
        "mdl2": "783px",
        "lg": "960px",
        "lgl": "1024px",
        "lgl2": "1070px",
        "xl": "1280px",
        "2xl": "1440px",
        "3xl": "1630px",
       

      },
      colors: {
        blue: "#0071dc",
        lightBlue: "#e6f1fc",
        yellow: "#ffc220",
        hoverBg: "#2D2725",
        lightText: "#46474a",
      },
      boxShadow: {
        bannerShadow: "0 1px 2px 1px #00000026"
      },
      fontFamily: {
        sans: ["var(--font-open_sans)", ...fontFamily.sans],
      },

    },
  },
  plugins: [],
}
