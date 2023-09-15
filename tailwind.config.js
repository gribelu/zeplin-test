/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      'body':  ["Rubik", "sans-serif"]
    },
    extend: {
      colors: {
        "cgray-100": "#e8e8e8",
        "cgray-150": "#fbfbfd",
        "cgray-200": "#919193",
        "cgray-250": "#7d7c7c",
        "cgray-300": "#5d6870",
        "cgray-400": "#d8d8dd",
        "cgray-450": "#ebebed",
        "cgray-500": "#b4b4b4",
        "cgray-600": "#9b9b9b",
        "cgray-700": "#5d6870",
        "blue-100": "#307fc1",
        "blue-200": " #1470bd",
        "cgreen-100": "#01ae8f",
        "cgreen-200": "#008d73",
      },
      fontSize: {
        "1xl": "27px",
        xsm: "10px",
        22: "22px",
      },
      padding: {
        "19px": "19px",
      },
      height: {
        173: "173px",
      },
      width: {
        310: "310px",
      },
      boxShadow: {
        "3xl": "0 4px 6px -2px rgba(0, 0, 0, 0.1)",
        "2xl": "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        "1xl": "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
        "4xl": "0 4px 16px 0 rgba(0, 0, 0, 0.05)",
        "5xl": "0 2px 16px 0 rgba(0, 0, 0, 0.11);",
        "6xl": '0 5px 5px -2px rgba(1, 174, 143, 0.55)',
        'btn-blue': '0 5px 5px -2px rgba(48, 127, 193, 0.55)'
      },
      borderRadius: {
        5: "5px",
      },
    },
  },
  plugins: [],
};
