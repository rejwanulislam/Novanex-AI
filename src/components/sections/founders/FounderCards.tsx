"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const founders = [
  {
    id: "founder-1",
    name: "Riyad Hossain",
    role: "Founder & Lead AI Engineer",
    bio: "Urban planner turned AI engineer. Riyad bridges the gap between complex operational challenges and elegant AI solutions. Led the award-winning Rajshahi 2035 geospatial AI project and the OmniGuard flood resilience pipeline.",
    credentials: ["APA Member #443529", "GEOPLAN 1st Runner-up", "UNITAR Climate Programs"],
    focus: ["LangGraph Systems", "Geospatial AI", "Multi-Agent Orchestration"],
    gradient: "from-signal/10 to-plasma/10",
    accentColor: "signal",
    initials: "RH",
    bgGradient: "linear-gradient(135deg, rgba(0,255,178,0.15) 0%, rgba(123,94,255,0.1) 100%)",
    links: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    id: "founder-2",
    name: "Nafisa Rahman",
    role: "Co-Founder & ML Architect",
    bio: "Machine learning researcher specializing in predictive systems and production-grade RAG architectures. Previously interned with CROPC-IMD government programs. Speaker at Nalanda University's international AI symposium.",
    credentials: ["Int'l Speaker (Nalanda Univ)", "CROPC-IMD Govt. Intern", "Helsinki Python MOOC"],
    focus: ["Predictive BI", "RAG Systems", "FastAPI Backends"],
    gradient: "from-plasma/10 to-rose/10",
    accentColor: "plasma",
    initials: "NR",
    bgGradient: "linear-gradient(135deg, rgba(123,94,255,0.15) 0%, rgba(255,94,155,0.1) 100%)",
    links: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    id: "founder-3",
    name: "Tariq Ansari",
    role: "Co-Founder & Systems Engineer",
    bio: "Full-stack engineer with deep expertise in computer vision and workflow automation pipelines. Built the AI Traffic Counting Agent deployed across multiple Bangladeshi smart city initiatives. Passionate about zero-downtime deployments.",
    credentials: ["YOLOv8 Certified", "Docker Expert", "CI/CD Specialist"],
    focus: ["Computer Vision", "Workflow Automation", "Deployment Infra"],
    gradient: "from-cyan/10 to-signal/10",
    accentColor: "cyan",
    initials: "TA",
    bgGradient: "linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(0,255,178,0.1) 100%)",
    links: { github: "#", linkedin: "#", twitter: "#" },
  },
];

export default function FounderCards() {
  const [active, setActive] = useState<string | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="founders" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {founders.map((f, i) => (
            <div
              key={f.id}
              className={cn(
                "holo-card rounded-3xl p-8 relative overflow-hidden cursor-default group transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
              onMouseEnter={() => setActive(f.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Top line */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-0.5 transition-all duration-500",
                  active === f.id ? "opacity-100" : "opacity-40"
                )}
                style={{ background: i === 0 ? "linear-gradient(90deg, var(--signal), transparent)" : i === 1 ? "linear-gradient(90deg, var(--plasma), transparent)" : "linear-gradient(90deg, var(--cyan), transparent)" }}
              />

              {/* Avatar */}
              <div className="flex items-start justify-between mb-6">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-800 text-xl text-white relative overflow-hidden"
                    style={{ background: f.bgGradient }}
                  >
                    {f.initials}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)" }} />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-signal border-2 border-ink flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-ink" />
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {[
                    { icon: Github, href: f.links.github },
                    { icon: Linkedin, href: f.links.linkedin },
                    { icon: Twitter, href: f.links.twitter },
                  ].map(({ icon: Icon, href }, j) => (
                    <a key={j} href={href}
                      className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 hover:border-signal/30 hover:bg-signal/10 flex items-center justify-center transition-all duration-200"
                    >
                      <Icon size={12} className="text-text-secondary hover:text-signal" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Name & role */}
              <h3 className="font-display font-700 text-xl text-text-primary mb-1 leading-tight">
                {f.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: i === 0 ? "var(--signal)" : i === 1 ? "var(--plasma)" : "var(--cyan)" }}>
                {f.role}
              </p>

              {/* Bio */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {f.bio}
              </p>

              <div className="divider mb-5" />

              {/* Focus areas */}
              <div className="mb-5">
                <div className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2.5">Focus Areas</div>
                <div className="flex flex-wrap gap-2">
                  {f.focus.map((area) => (
                    <span key={area} className={cn("tag text-xs", i === 1 && "tag-plasma", i === 2 && "tag-amber")}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div>
                <div className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2.5">Credentials</div>
                <div className="space-y-1.5">
                  {f.credentials.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-xs text-text-secondary">
                      <div className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: i === 0 ? "var(--signal)" : i === 1 ? "var(--plasma)" : "var(--cyan)" }} />
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner glow */}
              <div
                className={cn("absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none")}
                style={{ background: `radial-gradient(circle at 100% 100%, ${i === 0 ? "#00FFB2" : i === 1 ? "#7B5EFF" : "#00D4FF"}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
