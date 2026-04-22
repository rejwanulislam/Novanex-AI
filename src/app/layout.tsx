import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Body font — DM Sans (clean, readable)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Mono font — JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Display font = Times New Roman (system font, no Google import needed)

export const metadata: Metadata = {
  title: "InsightFlow AI — Enterprise AI Systems",
  description:
    "InsightFlow AI builds enterprise-grade AI systems: SOP-to-Agent pipelines, Geospatial AI, Computer Vision, and Intelligent Workflow Automation.",
  keywords: [
    "AI automation", "LangGraph", "RAG systems",
    "geospatial AI", "enterprise AI", "workflow automation", "computer vision",
  ],
  openGraph: {
    title: "InsightFlow AI",
    description: "Enterprise AI Systems & Automation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-ink text-text-primary overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
