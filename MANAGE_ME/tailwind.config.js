/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'card_background':'#363636',
        'flag_background':'#272727',
        'shadow_purple': '#8687E7'
        
      }
    },
    
  },
  plugins: [],
}
