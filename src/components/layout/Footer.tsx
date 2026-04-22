import { Zap, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-signal flex items-center justify-center">
                <Zap size={14} className="text-ink" fill="currentColor" />
              </div>
              <span className="font-display font-800 text-xl">
                InsightFlow<span className="text-signal">AI</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-6">
              We build enterprise AI systems that transform static processes into
              intelligent, self-executing pipelines.
            </p>
            <div className="flex items-center gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-text-muted hover:text-signal hover:border-signal/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-600 text-sm uppercase tracking-widest text-text-muted mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "SOP-to-Agent Systems",
                "Predictive BI",
                "Workflow Automation",
                "Geospatial AI",
                "Computer Vision",
                "Chatbot Systems",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-600 text-sm uppercase tracking-widest text-text-muted mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} InsightFlow AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-text-muted text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            All systems operational
          </div>
          <p className="text-text-muted text-xs">
            Built with{" "}
            <span className="text-signal">♥</span>
            {" "}in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
