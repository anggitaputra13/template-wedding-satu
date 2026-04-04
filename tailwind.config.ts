import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FDF8EF",
          100: "#FAF0D7",
          200: "#F5E0AE",
          300: "#E8C97A",
          400: "#C9A96E",
          500: "#B8944D",
          600: "#9A7735",
          700: "#7D5F2A",
          800: "#5E4720",
          900: "#3F2F16",
        },
        brown: {
          50: "#FAF5F0",
          100: "#F0E6D8",
          200: "#E0CCB0",
          300: "#C4A882",
          400: "#A8855E",
          500: "#8B6914",
          600: "#6E5430",
          700: "#5A4328",
          800: "#3D2E1C",
          900: "#2A1F13",
        },
        cream: {
          50: "#FFFDF7",
          100: "#FFF9EB",
          200: "#FFF3D6",
          300: "#FFEDC2",
          400: "#FFE4A8",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-in-out forwards",
        "spin-disc": "spinDisc 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spinDisc: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
