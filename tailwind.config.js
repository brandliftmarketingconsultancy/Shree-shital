/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#16252A', // deep teal-charcoal — primary dark
          700: '#1F343B',
          600: '#2A444C',
        },
        ivory: '#FAF6EF', // warm background
        sand: '#F1EAD9',
        brass: {
          DEFAULT: '#B9874A', // signature gold/brass accent
          50: '#F7EEE1',
          400: '#C99A60',
          600: '#A06F32',
        },
        sage: '#6E7F6B', // sustainability accent
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        site: '1440px',
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(185,135,74,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(185,135,74,0.18) 1px, transparent 1px)',
      },
      backgroundSize: {
        blueprint: '32px 32px',
      },
    },
  },
  plugins: [],
}
