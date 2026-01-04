/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "angola-red": "#E60000",
        "angola-black": "#000000",
        "angola-yellow": "#FFD700",
        "angola-gold": "#D4AF37",
        "angola-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
