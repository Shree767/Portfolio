/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00FF99",
          hover: "#00e187",
        },
        secondary: "#2a2a33",
        muted: "#3a3a44",
        destructive: "#ef4444",
        border: "#2a2a33",
        input: "#2a2a33",
        ring: "#00FF99",
      },
      fontFamily: {
        primary: ["var(--font-jetbrainsMono)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};