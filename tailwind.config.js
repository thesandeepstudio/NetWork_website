/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // move full width of duplicated content
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 20s linear infinite', // slower for smooth loop
      },
    },
  },
  plugins: [],
};
