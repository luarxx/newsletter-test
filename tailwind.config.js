/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        dark_grey: "hsl(234, 29%, 20%)",
        Charcoal_Grey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
      },
    },
  },
  plugins: [],
};
