/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'fig_tree':['Figtree','sans-serif']
      },
      backgroundColor:{
        'Yellow':'hsl(47, 88%, 63%)',
        'White':'hsl(0, 0%, 100%)',
        'Grey':'hsl(0, 0%, 50%)',
        'Black':'hsl(0, 0%, 7%)'
      },
      colors:{
        'Yellow':'hsl(47, 88%, 63%)',
        'White':'hsl(0, 0%, 100%)',
        'Grey':'hsl(0, 0%, 50%)',
        'Black':'hsl(0, 0%, 7%)'
      },
      screens:{
        'Mobile_Large_Size':{'max':'426px','min':'376px'},
        'Mobile_Medium_Size':{'max':'376px','min':'321px'},
        'Mobile_Small_Size':{'max':'321px'}
      }
    },
  },
  plugins: [],
}

