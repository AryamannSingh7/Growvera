/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#2d2d2d",
      },

      white: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },

      secondary: {
        50: "#f4f9f8",
        100: "#daede8",
        200: "#a3d1c6",
        300: "#88c0b4",
        400: "#5fa296",
        500: "#45877c",
        600: "#366b65",
        700: "#2e5752",
        800: "#284744",
        900: "#253c3a",
        950: "#112221",
      },

      primary: {
        50: "#eefff3",
        100: "#d8ffe5",
        200: "#b3ffcd",
        300: "#79fca6",
        400: "#29f06f",
        500: "#0dda55",
        600: "#04b543",
        700: "#078e38",
        800: "#0c6f31",
        900: "#0c5b2a",
        950: "#003314",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "scrollbar-width": "none", // Firefox
          "-ms-overflow-style": "none", // IE 10+
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, Opera
        },
      });
    },
  ],
};
