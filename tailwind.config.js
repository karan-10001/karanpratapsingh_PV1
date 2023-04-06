/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        maxWidth: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
