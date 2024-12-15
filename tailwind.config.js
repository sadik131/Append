/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  container: {
    center: true,
    padding: '12px',
    screens: {
      'lg': '1366px',
    },
  },
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        default: '#212529',
        heading: '#32353a',
        link:"#3a3939",
        primary: '#e84545',
        surface: '#ffffff',
        contrast: '#ffffff',
      },
    },
  },
  plugins: [],
}

