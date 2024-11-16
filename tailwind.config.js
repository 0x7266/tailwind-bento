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
    },
  },
  plugins: [],
};
