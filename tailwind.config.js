/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/preline/dist/*.js",
  ],
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
      'mod': '1190px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin.cjs"),
    require('preline/plugin'),
  ],
}
