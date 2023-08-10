/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'slide': {  
          '100%': {
          'opacity':1,
          'transform' : 'translate3d(0,0,0)'
        }
      }
      },
      animation: {
        'slide': 'slide .3s forwards'
      }
    },
  },
  plugins: [],
};
