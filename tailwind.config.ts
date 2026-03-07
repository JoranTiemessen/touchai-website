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
        brand: {
          50:  "#f0f8fd",
          100: "#daeef8",
          200: "#b8ddf2",
          300: "#9fcae3",
          400: "#6eadd4",
          500: "#4a8ebb",
          600: "#3474a0",
          700: "#2a5e83",
          800: "#234e6c",
          900: "#1d3f57",
        },
      },
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        tight2: "-0.03em",
      },
      lineHeight: {
        relaxed2: "1.7",
      },
      boxShadow: {
        "brand-sm": "0 2px 8px 0 rgba(110,173,212,0.12), 0 1px 2px 0 rgba(0,0,0,0.04)",
        "brand-md": "0 4px 20px 0 rgba(110,173,212,0.18), 0 2px 6px 0 rgba(0,0,0,0.06)",
        "brand-lg": "0 8px 40px 0 rgba(110,173,212,0.22), 0 4px 12px 0 rgba(0,0,0,0.08)",
        "brand-xl": "0 16px 60px 0 rgba(110,173,212,0.28), 0 6px 20px 0 rgba(0,0,0,0.10)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fadeIn 0.5s ease both",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
