/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            lexend: ["Lexend"],
        },
        keyframes : {
            translate : {
                "0%" : {transform: "rotate(-135deg) translateX(0)"},
                "100%" : {transform: "rotate(-135deg) translateX(-2000px)"},
            }
        },
        animation : {
            'twinkling-star': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
            'shooting-star' : 'translate 4s linear 1;'
        },
        boxShadow: {
            'shooting-star': '0 0 0 4px rgba(255, 255, 255, .1)'
        },
    },
  },
  plugins: [],
}
