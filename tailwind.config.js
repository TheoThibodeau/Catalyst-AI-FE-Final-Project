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

      },

      button: {
        '25': {
          backgroundColor: '#36A9AE',
          backgroundImage: 'linear-gradient(#37ADB2, #329CA0)',
          borderColor: '#2A8387',
          borderRadius: '4px',
          boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 1px',
          color: '#FFFFFF',
          cursor: 'pointer',
          display: 'block',
          fontFamily: '-apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: '17px',
          lineHeight: '100%',
          margin: '5px',
          outline: '0',
          padding: '11px 15px 12px',
          textAlign: 'center',
          transition: 'box-shadow .05s ease-in-out, opacity .05s ease-in-out',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'manipulation',
          width: '50%',
        }
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