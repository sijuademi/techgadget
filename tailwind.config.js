/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // "sans" is the default font for everything. We set it to Inter.
        sans: ["Inter", "sans-serif"],
        // We make a custom class "font-heading" for Poppins.
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
