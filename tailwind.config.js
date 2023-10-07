/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['dist/index.html'],
  theme: {
    extend: {
      fontFamily : {
        Inter : ['Inter'],
        tittle : ['Syne']
      },
      colors : {
        greenL : ['#C0FF00']
      }
    },
  },
  plugins: [],
}

