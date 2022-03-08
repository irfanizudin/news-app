module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: "#1983FF",
        gray: "#F1F1F1",
      },
      screens: {
        md: "900px",
        xl: "1308px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
