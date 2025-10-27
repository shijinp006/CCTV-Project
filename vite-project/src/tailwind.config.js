// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // ✅ Custom extra-small screen
      },
    },
  },
  plugins: [],
};
