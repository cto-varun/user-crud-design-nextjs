/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    "bg-red-500",
    "hover:bg-red-600",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
