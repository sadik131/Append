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
      boxShadow: {
        box: "0 4px 16px rgba(0, 0, 0, 0.1)"
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        customMix2: 'color-mix(in srgb, #212529, transparent 20%)',
        customMix3: 'color-mix(in srgb, #212529, transparent 30%)',
        customMix4: 'color-mix(in srgb, #212529, transparent 40%)',
        customMix5: 'color-mix(in srgb, #212529, transparent 50%)',
        customMix6: 'color-mix(in srgb, #212529, transparent 60%)',
        customMix7: 'color-mix(in srgb, #212529, transparent 70%)',
        customMix8: 'color-mix(in srgb, #212529, transparent 80%)',
        customMix95: 'color-mix(in srgb, #212529, transparent 95%)',
        customMix9: 'color-mix(in srgb, #212529, transparent 90%)',
        background: '#ffffff',
        default: '#212529',
        heading: '#32353a',
        link: "#3a3939",
        primary: '#e84545',
        surface: '#ffffff',
        contrast: '#ffffff',
      },
    },
  },
  plugins: [],
}

