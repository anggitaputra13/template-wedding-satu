import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4A574",
          light: "#e0be96",
          dark: "#b8894e",
        },
        wedding: {
          bg: "#1a0e0a",
          "bg-dark": "#120a07",
          text: "#c9a87c",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        brittany: ["Brittany", "cursive"],
        garet: ["Garet", "sans-serif"],
      },
      keyframes: {
        "music-bar-1": {
          "0%, 100%": { height: "14px" },
          "50%": { height: "6px" },
        },
        "music-bar-2": {
          "0%, 100%": { height: "18px" },
          "50%": { height: "8px" },
        },
        "music-bar-3": {
          "0%, 100%": { height: "10px" },
          "50%": { height: "18px" },
        },
        "music-bar-4": {
          "0%, 100%": { height: "16px" },
          "50%": { height: "6px" },
        },
      },
      animation: {
        "music-bar-1": "music-bar-1 0.8s ease-in-out infinite",
        "music-bar-2": "music-bar-2 0.6s ease-in-out infinite",
        "music-bar-3": "music-bar-3 0.9s ease-in-out infinite",
        "music-bar-4": "music-bar-4 0.7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
