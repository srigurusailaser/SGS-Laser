/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF8F0',
        primary: '#531CB3',
        secondary: '#C2410C',
        text: '#292929',
        accent: '#6936C0',
        lightText: '#4F4F4F',
        orangeAccent: '#FF7A2F',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

