/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        md: "10rem"
      }
    },
    extend: {
      colors: {
        "gray-100": "#D0D0D0",
        "gray-200": "#54647A",
        "gray-300": "#7A7A9D",
        "primary-blue": "#007DFE",
        "light-blue": "#E4ECF7",
        "dark-blue": "#407BFF",
        "primary-black": "#0D1829",
        "smoke-white": "#F7F7FB",
        "primary-orange": "#E16F06",
        "primary-pink": "#F6435F",
        'orange-gradient-color': "linear-gradient(89deg, #FF9625 0%, #FF405E 100%)",
        "error": "#FF0000",

      },
      fontFamily: {
        barlow: ['Barlow Condensed', "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ['Inter', "sans-serif"]
      },
      fontSize: {
        sm: '13px',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      }
    }
  },
  plugins: [ nextui() ],
}