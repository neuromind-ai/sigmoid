/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "fontcolor":"#29361D",
        "fontcolor2":"#606C38"
      },
      lineHeight:{
        "customlineheight":"5rem",
        "5rem":"5rem"
      },
      spacing:{
        "26rem":"26rem",
        "29rem":"29rem",
        "33rem":"33rem",
        "53rem":"53rem",
        "2.8rem":"2.8rem",
        "11.3rem":"11.3rem",
        "16.3rem":"16.3rem",
        "7.5rem":"9.5rem",
        "24rem":"24rem",
        "27.5rem":"27.5rem"
      },
      colors:{
        "custom-bg-color":"#FEFAE0"
      },
      height:{
        "100vh":"100vh"
      },
      margin:{
        "4.3rem":"4.3rem",
        "7.6rem":"7.6rem",
        "50px":"50px",
        "27px":"27px"
      }
      
    },
  },
  plugins: [],
}