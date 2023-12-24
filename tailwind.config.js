/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
      screens: {
        mf: "990px",
      },
      colors: {
        "glass-bg-1": "rgba(0,0,0,0.15)",
        primary: "#1652f0",
        secondry: "#f6f6f7",
      },
    },
  },
  plugins: [],
};
