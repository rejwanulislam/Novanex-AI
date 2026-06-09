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
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        void: "var(--void)",
        surface: {
          DEFAULT: "var(--surface)",
          raised: "var(--surface-raised)",
          overlay: "var(--surface-overlay)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          bright: "var(--accent-bright)",
          dim: "var(--accent-dim)",
          glow: "var(--accent-glow)",
          secondary: "var(--accent-secondary)",
        },
        ink: "var(--ink)",
        "ink-light": "var(--ink-light)",
        "ink-muted": "var(--ink-muted)",
        "ink-elevated": "var(--ink-elevated)",
        signal: "var(--signal)",
        "signal-dim": "var(--signal-dim)",
        plasma: "var(--plasma)",
        "plasma-dim": "var(--plasma-dim)",
        amber: "var(--amber)",
        cyan: "var(--cyan)",
        rose: "var(--rose)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-subtle": "var(--border-subtle)",
        "border-glow": "var(--border-glow)",
      },
      borderRadius: {
        "4xl": "1.5rem",
        "5xl": "2rem",
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        float: "floatY 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "pulse-soft": "pulse-glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
