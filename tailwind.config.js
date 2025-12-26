/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "angola-red": "#D52B1E",
        "angola-black": "#000000",
        "angola-yellow": "#FCD116",
        "angola-gold": "#F4C430",
      },
    },
  },
  plugins: [],
};
