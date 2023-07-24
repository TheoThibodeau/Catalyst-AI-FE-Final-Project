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
        
        'primary': '#191970', // Deep Midnight Blue
        'secondary': '#FFFFFF', // White
        'light-grey': '#F0F0F0', // Very light grey
        'white-smoke':'#F5F5F5',

      },

      button: {
      
      },
  
      variants: {
        extended:{
          boxShadow: ['hover','active'],
          textDecoration: ['hover'],
          pointerEvents:['disabled']
        },
      },

    },
  },
  plugins: [],
}