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
            twinkle : {
                "50%" : {opacity: ".5"},
            }
        },
        animation : {
            'twinkling-star': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
        }

    },
  },
  plugins: [],
}
