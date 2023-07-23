/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'sm': '0.875rem',
        'md': '1rem',     
        'lg': '1.125rem', 
        'xl': '1.25rem', 
     
      },
      colors: {
        'primary': '#FF0000',
        'secondary': '#00FF00',
      },

    },
  },
  plugins: [],
}