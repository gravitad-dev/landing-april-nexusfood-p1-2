/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B88D9',
        secondary: '#FF4500',
        gray_default: '#767676',
        gray_dark: '#585858',
        gray_light: '#B8B8B8',
        gradient_blue: 'linear-gradient(90deg, #2B88D9 0%, #26E0F5 100.03%)',
      },
      fontFamily: {
        sans: ['Product Sans', 'sans-serif'],
      },
      screens: {
        break1: '700px',
        break2: '850px',
      },
    },
  },
  plugins: [],
};
