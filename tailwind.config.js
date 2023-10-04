/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      fontFamily: {
        'gotham': 'gotham-book',
      },
      colors:{
        redbtn:'#FF0000',
        headingred:'linear-gradient(to right, #FF0000 81%, #000000 100%);'
      },
      maxWidth: {
        '1/2': '50%',
      }
    },

    backgroundImage: {
      'hero-pattern': "url('https://raw.githubusercontent.com/khurshid2idrees/traffury/master/src/assets/images/abt-slide-bg.jpg')",
    
      
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}