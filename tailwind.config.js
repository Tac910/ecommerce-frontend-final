/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f2f2f2",

          secondary: "#f2f2f2",

          accent: "#F2F2F2",

          neutral: "#111111",

          "base-100": "#111111",

          info: "#69AED3",

          success: "#50E794",

          warning: "#EFB06B",

          error: "#F72B4D",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        whyte: ["Neue Montreal"],
        ibm: ["Neue Montreal"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
