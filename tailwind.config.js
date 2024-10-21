/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { colors } = require('@mui/material');
module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        dropShadow: {
          '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
          '4xl': [
              '0 35px 35px rgba(0, 0, 0, 0.25)',
              '0 45px 65px rgba(0, 0, 0, 0.15)'
          ]
        }

      },
      colors:{
        orange:{
          800:"#ff8f00",
          900:"#ff6f00"
        }
      }
    },
  },
  plugins: [],
})

