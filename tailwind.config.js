/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "380px" }
      }
      // listStyleType: {
      //   revert: "revert"
      // }
    },

    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      oleo: ["Oleo Script", "sans-serif"]
    }
  },

  plugins: []
};
