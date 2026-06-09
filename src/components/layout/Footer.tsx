import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    "Predictive BI",
    "Workflow Automation",
    "Geospatial AI",
    "Chatbot Systems",
    "Web Development",
    "SaaS Engineering",
  ],
  company: [
    { label: "Services", href: "#services" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Pricing", href: "#pricing" },
    { label: "Team", href: "/founders" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-surface">
      <div className="section-container pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <Image
                src="/logo1.png"
                alt="Novanex AI"
                width={28}
                height={28}
                className="w-7 h-7 object-contain rounded"
              />
              <span className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                Novanex AI
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-5">
              Production-grade AI systems — from SOP-to-Agent automation
              to geospatial intelligence — built for real operations at scale.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/novanex-ai" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent hover:border-border-glow transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-text-secondary text-sm hover:text-accent transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-text-secondary text-sm hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">
              Contact
            </h4>
            <a
              href="mailto:hello@novanexai.com"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              hello@novanexai.com
              <ArrowUpRight size={12} />
            </a>
            <p className="text-text-muted text-xs mt-2">Response within 24 hours</p>
          </div>
        </div>

        <div className="divider mb-5" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Novanex AI</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-glow" />
            All systems operational
          </div>
          <p>Built with care in Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
