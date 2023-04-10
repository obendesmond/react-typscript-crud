/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: "#0A32B3",
        myPink: "#BD365D",
      },
      backgroundImage: theme => ({
        "hero-pattern":
          "url('https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864__340.jpg')",
      }),
    },
  },
  plugins: [],
};
