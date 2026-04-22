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
        display: ["'Times New Roman'", "Georgia", "Times", "serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      colors: {
        ink: "#050508",
        "ink-light": "#0D0D15",
        "ink-muted": "#14141F",
        signal: "#00FFB2",
        "signal-dim": "#00CC8E",
        plasma: "#8B6FFF",
        "plasma-dim": "#6B4FDF",
        amber: "#FFB547",
        cyan: "#00D4FF",
        rose: "#FF6BAE",
        "text-primary": "#F4F4FF",
        "text-secondary": "#A0A0C0",
        "text-muted": "#55556A",
        "border-subtle": "rgba(255,255,255,0.06)",
        "border-glow": "rgba(0,255,178,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
