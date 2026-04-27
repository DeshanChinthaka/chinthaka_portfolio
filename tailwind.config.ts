import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#080C14",
          secondary: "#0D1220",
          card: "#111827",
          hover: "#161F30",
        },
        accent: {
          cyan: "#00E5FF",
          blue: "#4D79FF",
          purple: "#8B5CF6",
          green: "#10B981",
        },
        text: {
          primary: "#F0F4FF",
          secondary: "#94A3B8",
          muted: "#4B5563",
        },
        border: {
          subtle: "#1E2D40",
          default: "#243450",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 12px rgba(0,229,255,0.2)" },
          "50%": { boxShadow: "0 0 28px rgba(0,229,255,0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
