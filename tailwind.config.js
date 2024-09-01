/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateX: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "rotate-x": "rotateX 4s linear infinite",
        spin: "spin 1s linear infinite",
      },
      colors: {
        "neon-green": "#39FF14",
        "neon-pink": "#FF1493",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  plugins: [],
};
