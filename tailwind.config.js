/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center : true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#38bdf8',
        secondary : '#475569',
        dark: '#334155',
      },
      screens:{
        '2xl':'1320px',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%",
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
      },
      animation: {
        typing: "typing 2s infinite alternate, blink 7s infinite",
      }
    },
  },
  plugins: [],
}
