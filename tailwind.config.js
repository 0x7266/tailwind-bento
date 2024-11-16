/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#DBD1FC",
          500: "#7551DC",
        },
        yellow: {
          100: "#F9EEE2",
          500: "#FFCC6A",
        },
        black: "#121212",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "text-preset-1": "62px",
        "text-preset-2": "40px",
        "text-preset-3": "32px",
        "text-preset-4": "18px",
      },
      lineHeight: {
        "text-preset-1": "93.5%",
        "text-preset-2": "90%",
        "text-preset-3": "87.5%",
        "text-preset-4": "111%",
      },
      letterSpacing: {
        "text-preset-1": "-3px",
        "text-preset-2": "-2px",
        "text-preset-3": "-2px",
        "text-preset-4": "0px",
      },
      spacing: {
        100: "8px",
        200: "16px",
        300: "24px",
        400: "32px",
        500: "40px",
      },
    },
  },
  plugins: [],
};
