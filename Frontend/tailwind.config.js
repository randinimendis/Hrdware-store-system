/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/page/Inventory/**.{html,jsx}"],
  theme: {   
    extend: {
      spacing: {
        'xdl': '30rem',
        
      },
      fontSize: {
        'xxs': '9px',
      },
    },
  },
  plugins: [],
}

