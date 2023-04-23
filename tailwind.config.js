/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'sm-p': '540px',
        'md-p': '720px',
        'lg-p': '960px',
        'xl-p': '1140px',
        'xxl-p': '1320px',
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    }
  },
  plugins: [],
}
