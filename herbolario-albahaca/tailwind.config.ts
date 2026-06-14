import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F3D2E",
          light: "#2C5240",
          dark: "#162B20",
        },
        leaf: "#5F8F63",
        cream: "#F7F4ED",
        sand: "#E5DCC8",
        amber: "#C9A876",
        ink: "#1A1F1B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "drift": "drift 12s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(12px, -16px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
