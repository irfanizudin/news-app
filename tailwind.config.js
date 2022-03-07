module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1983FF",
        gray: "#F1F1F1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
