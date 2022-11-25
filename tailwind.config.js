/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#153649",
          secondary: "#A0A498",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ECE3C8",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
