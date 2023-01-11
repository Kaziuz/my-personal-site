/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"']
      },
      backgroundImage: {
        bandcam: "url('./assets/redes/bandcamp.png')",
        github: "url('./assets/redes/github.png')"
      }
    },
  },
  plugins: [],
}
