import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Novanex AI — Enterprise AI Systems & Agentic Automation",
  description:
    "Novanex AI builds enterprise-grade AI systems: SOP-to-Agent pipelines, Geospatial AI, Computer Vision, and Intelligent Workflow Automation.",
  keywords: [
    "Novanex AI", "AI automation", "LangGraph", "RAG systems",
    "geospatial AI", "enterprise AI", "workflow automation", "computer vision",
  ],
  openGraph: {
    title: "Novanex AI",
    description: "Enterprise AI Systems & Agentic Automation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-void text-text-primary overflow-x-hidden font-sans">
        <div className="grid-overlay" aria-hidden="true" />
        <div className="aurora-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
