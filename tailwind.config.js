/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#710D0B",
        secondary: "#C7372C",
        background: "#f0f0f0",
        text: "#191121",
        success: "#4CAF50",
        warning: "#FFC107",
        error: "#f13a59",
      },
    },
  },
  plugins: [],
};
