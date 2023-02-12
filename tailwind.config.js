/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens:{
      'xl':'1440px',
      'md':'1024px',
    },
    extend: {
      colors:{
        'title-text':'#00537A',
        'light-text':'#99a1a6',
        'card-color':'#43525a',
        'text-gray':'#99a1a6',
        'light-grey':'#ebeced'

      },
      backgroundColor:{
        'button-red':'#e31837',
        'card-lait':'rgba(0,121,174,.06)',
        'plas':'rgba(0,121,174,.16)',
        'bord-color':'#f7fcff',
        'white-color':'rgb(255,255,255)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}