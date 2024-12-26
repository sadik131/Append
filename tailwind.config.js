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
        box: "0 4px 16px rgba(0, 0, 0, 0.1)",
        card: "0px 10px 50px rgba(0, 0, 0, 0.1)",
        priceCard: "0 3px 20px -2px rgba(0, 0, 0, 0.1)",
        img: "0 15px 30px -10px rgba(0, 0, 0, 0.1)",
        faq: "0px 5px 25px 0px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
      },
      colors: {
        tag: 'color-mix(in srgb, #e84545, transparent 95%)',
        red9: 'color-mix(in srgb, #e84545, transparent 90%)',
        curcle: 'color-mix(in srgb, #e84545, transparent 70%)',
        red8: 'color-mix(in srgb, #e84545, transparent 80%)',
        quate: 'color-mix(in srgb, #e84545, transparent 60%)',
        customMix05: 'color-mix(in srgb, #ffffff, transparent 05%)',
        customMix2: 'color-mix(in srgb, #212529, transparent 20%)',
        customMix3: 'color-mix(in srgb, #212529, transparent 30%)',
        customMix4: 'color-mix(in srgb, #212529, transparent 40%)',
        whiteMix2: 'color-mix(in srgb, #ffffff, transparent 20%)',
        whiteMix4: 'color-mix(in srgb, #ffffff, transparent 40%)',
        whiteMix5: 'color-mix(in srgb, #ffffff, transparent 50%)',
        customMix5: 'color-mix(in srgb, #212529, transparent 50%)',
        customMix6: 'color-mix(in srgb, #212529, transparent 60%)',
        customMix7: 'color-mix(in srgb, #212529, transparent 70%)',
        customMix8: 'color-mix(in srgb, #212529, transparent 80%)',
        customMix95: 'color-mix(in srgb, #212529, transparent 95%)',
        customMix9: 'color-mix(in srgb, #212529, transparent 90%)',
        background: '#ffffff',
        navlink: '#ffffff80',
        default: '#212529',
        heading: '#32353a',
        link: "#3a3939",
        primary: '#e84545',
        surface: '#f9f9f9',
        contrast: '#ffffff',
      },
    },
  },
  plugins: [],
}

