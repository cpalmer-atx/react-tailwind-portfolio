/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        primary: '#000022',
        secondary: '#000066',
        primaryTxt: '#3f826d',
        secondaryTxt: '#91cab9',
        contrast: '#c03221'
      }
    },
    fontFamily: {
      logo: ["Dancing Script"],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    }
  },
  plugins: [],
}
