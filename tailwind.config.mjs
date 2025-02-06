/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        melbg: "#FCFBFA",
        holidaygreen: "#2E6A68",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      height: {
        "26rem": "26rem", // Usage: h-custom-height
      },
      // Custom classes for width
      width: {
        "26rem": "26rem", // Usage: w-custom-width
        "28rem": "28rem", // Usage: w-custom-width
        "30rem": "30rem", // Usage: w-custom-width
        "32rem": "32rem", // Usage: w-custom-width
        "34rem": "34rem", // Usage: w-custom-width
        "36rem": "36rem", // Usage: w-custom-width
      },
    },
  },
  plugins: [],
};
