/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    minWidth:{
      '5': '5rem'
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
        15: '15%',
        85: '85%'

      },
      borderWidth:{
        1: '1px',
      },
      height:{
        80: '80px',
      },
      minHeight:{
        590: '590px',
      },
    },
  },
  plugins: [],
  
}
