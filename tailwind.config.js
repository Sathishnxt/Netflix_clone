/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    backgroundColor: {
      redButton: "rgb(229, 9, 20)",
      customBackground: "rgb(35, 35, 35)",
      getStartButton: "rgb(193, 17, 25)",
    },
    // fontFamily: {
    //   sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    // },
  },
};
export const plugins = [];
