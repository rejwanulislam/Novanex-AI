"use client";

import { useState } from "react";
import { ArrowLeft, ExternalLink, Github, Linkedin, Twitter, MapPin, Award, Code2, Globe } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const founders = [
  {
    id: "founder-1",
    name: "Md. Rejwanul Islam",
    role: "Founder & Chief AI Architect",
    tagline: "Building AI that thinks like an operator, not a researcher.",
    bio: "Rejwanul is the driving force behind InsightFlow AI's technical vision. With a background spanning urban planning, geospatial intelligence, and production ML systems, he bridges the gap between cutting-edge AI research and real-world operational deployment. His work on the OmniGuard-AI flood resilience pipeline and Rajshahi 2035 climate analysis earned national recognition at the GEOPLAN 1.0 Mapathon.",
    expertise: ["LangGraph Orchestration", "Geospatial AI", "RAG Architecture", "Computer Vision", "FastAPI Systems"],
    credentials: [
      "APA Member #443529",
      "Int'l Speaker — Nalanda University",
      "CROPC-IMD Government Intern",
      "GEOPLAN 1st Runner-up (National)",
      "UNITAR Climate Programs",
      "Helsinki Python MOOC",
    ],
    location: "Rajshahi, Bangladesh",
    accent: "signal",
    gradient: "linear-gradient(135deg, #00FFB2, #00D4FF)",
    avatar: "RI",
    links: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "founder-2",
    name: "Sarah Al-Amin",
    role: "Co-Founder & Head of AI Products",
    tagline: "Turning messy operations into elegant autonomous systems.",
    bio: "Sarah leads product strategy and client delivery at InsightFlow AI. She specializes in translating complex business workflows into deployable multi-agent systems. With experience across NGO operations, fintech automation, and enterprise chatbot deployments, Sarah ensures every system shipped is not just technically brilliant but operationally irreplaceable.",
    expertise: ["Product Strategy", "Workflow Automation", "n8n Orchestration", "Chatbot Systems", "Client Architecture"],
    credentials: [
      "MSc. Computer Science — BUET",
      "AWS Certified Solutions Architect",
      "Meta Developer Circles Lead",
      "Bangladesh Startup Weekend Mentor",
    ],
    location: "Dhaka, Bangladesh",
    accent: "plasma",
    gradient: "linear-gradient(135deg, #8B6FFF, #FF6BAE)",
    avatar: "SA",
    links: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "founder-3",
    name: "Tanvir Hassan",
    role: "Co-Founder & Lead Infrastructure Engineer",
    tagline: "If it can't scale to a million, it won't ship.",
    bio: "Tanvir is the backbone of InsightFlow AI's infrastructure. He designs the Docker-based isolated deployment pipelines, CI/CD automation, and production monitoring stacks that ensure every AI system ships reliably and scales effortlessly. His philosophy: production AI isn't about the model — it's about the system around the model.",
    expertise: ["Docker & Kubernetes", "GitHub Actions CI/CD", "PostgreSQL Architecture", "FastAPI Backends", "Production MLOps"],
    credentials: [
      "BSc. Software Engineering — KUET",
      "Docker Certified Associate",
      "Google Cloud Professional",
      "Open Source Contributor — LangChain",
    ],
    location: "Khulna, Bangladesh",
    accent: "cyan",
    gradient: "linear-gradient(135deg, #00D4FF, #00FFB2)",
    avatar: "TH",
    links: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

const accentMap: Record<string, string> = {
  signal: "var(--signal)",
  plasma: "var(--plasma)",
  cyan: "var(--cyan)",
};

const glowMap: Record<string, string> = {
  signal: "rgba(0,255,178,0.25)",
  plasma: "rgba(139,111,255,0.25)",
  cyan: "rgba(0,212,255,0.25)",
};

export default function FoundersClient() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink relative overflow-hidden">

        {/* Background orbs */}
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] orb opacity-12 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(139,111,255,0.3), transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] orb opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,255,178,0.25), transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">

          {/* Back link */}
          <Link href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-signal transition-colors duration-300 mb-12 group font-mono text-xs uppercase tracking-[0.15em]">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-20" style={{ animation: "fadeSlideUp 0.8s ease both" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "var(--signal)" }} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--signal)" }}>
                The Team
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-text-primary mb-6 leading-tight">
              Built by People Who{" "}
              <br />
              <span className="gradient-text-signal glow-signal-text">
                Ship Real AI.
              </span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              InsightFlow AI was founded by engineers and researchers who got frustrated
              watching great AI ideas die in demos. We build systems that actually deploy,
              actually scale, and actually save real operations real time.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="space-y-8">
            {founders.map((f, i) => {
              const accent = accentMap[f.accent];
              const glow = glowMap[f.accent];
              const isActive = active === f.id;

              return (
                <div
                  key={f.id}
                  className="rounded-3xl border cursor-pointer transition-all duration-500 overflow-hidden"
                  style={{
                    borderColor: isActive ? `${accent}40` : "rgba(255,255,255,0.06)",
                    background: isActive
                      ? `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))`
                      : "rgba(13,13,21,0.8)",
                    boxShadow: isActive ? `0 30px 80px ${glow}, 0 0 0 1px ${accent}20` : "none",
                    animation: `fadeSlideUp 0.7s ease ${i * 0.15}s both`,
                    opacity: 0,
                  }}
                  onClick={() => setActive(isActive ? null : f.id)}
                >
                  {/* Top accent line */}
                  <div className="h-px w-full"
                    style={{ background: isActive ? `linear-gradient(90deg, transparent, ${accent}, transparent)` : "transparent",
                      transition: "all 0.5s ease" }} />

                  <div className="p-8 md:p-10">
                    {/* Main row */}
                    <div className="flex flex-col md:flex-row md:items-start gap-8">

                      {/* Avatar */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                          style={{
                            background: `linear-gradient(135deg, ${accent}15, ${accent}08)`,
                            border: `1px solid ${accent}30`,
                          }}>
                          <span className="font-display text-2xl" style={{ color: accent }}>
                            {f.avatar}
                          </span>
                          {/* Pulse ring when active */}
                          {isActive && (
                            <div className="absolute -inset-2 rounded-2xl border pulse-ring-anim"
                              style={{ borderColor: `${accent}50` }} />
                          )}
                        </div>
                        {/* Location */}
                        <div className="flex items-center gap-1.5 mt-3">
                          <MapPin size={10} style={{ color: "var(--text-muted)" }} />
                          <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                            {f.location}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                          <div>
                            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-1">
                              {f.name}
                            </h2>
                            <p className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: accent }}>
                              {f.role}
                            </p>
                          </div>
                          {/* Social links */}
                          <div className="flex items-center gap-2">
                            {[Github, Linkedin, Twitter].map((Icon, si) => (
                              <a key={si} href="#"
                                className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 hover:scale-110"
                                style={{ borderColor: "rgba(255,255,255,0.08)", color: "var(--text-muted)" }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.borderColor = `${accent}40`;
                                  (e.currentTarget as HTMLElement).style.color = accent;
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                                }}
                                onClick={(e) => e.stopPropagation()}>
                                <Icon size={13} />
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-text-secondary text-base italic mb-4" style={{
                          fontFamily: "'Times New Roman', Georgia, serif",
                          fontStyle: "italic",
                        }}>
                          &ldquo;{f.tagline}&rdquo;
                        </p>

                        {/* Expertise tags */}
                        <div className="flex flex-wrap gap-2">
                          {f.expertise.map((ex) => (
                            <span key={ex} className="tag" style={{
                              background: `${accent}08`,
                              borderColor: `${accent}20`,
                              color: accent,
                            }}>
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div style={{
                      maxHeight: isActive ? "800px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.6s cubic-bezier(0.23,1,0.32,1)",
                    }}>
                      <div className="pt-8 mt-8" style={{ borderTop: `1px solid ${accent}15` }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Bio */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Globe size={13} style={{ color: accent }} />
                              <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: accent }}>
                                Background
                              </span>
                            </div>
                            <p className="text-text-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                              {f.bio}
                            </p>
                          </div>

                          {/* Credentials */}
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <Award size={13} style={{ color: accent }} />
                              <span className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: accent }}>
                                Credentials
                              </span>
                            </div>
                            <ul className="space-y-2.5">
                              {f.credentials.map((cred) => (
                                <li key={cred} className="flex items-start gap-3 text-text-secondary text-sm">
                                  <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                                    style={{ background: accent }} />
                                  {cred}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Bottom CTA row */}
                        <div className="flex items-center justify-between mt-8 pt-6"
                          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.15em]">
                            Open to collaboration
                          </span>
                          <a href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300"
                            style={{
                              background: `${accent}10`,
                              border: `1px solid ${accent}30`,
                              color: accent,
                            }}
                            onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={12} />
                            Get in touch
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Expand hint */}
                    <div className="flex items-center justify-center mt-6">
                      <div className="flex items-center gap-2 font-mono text-xs text-text-muted uppercase tracking-[0.15em]">
                        <div className="w-3 h-px" style={{ background: isActive ? accent : "var(--text-muted)", transition: "all 0.3s" }} />
                        <span style={{ color: isActive ? accent : "var(--text-muted)", transition: "all 0.3s" }}>
                          {isActive ? "Collapse" : "View Profile"}
                        </span>
                        <div className="w-3 h-px" style={{ background: isActive ? accent : "var(--text-muted)", transition: "all 0.3s" }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Culture section */}
          <div className="mt-24 rounded-3xl border border-white/6 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(0,255,178,0.04), rgba(139,111,255,0.04))",
              animation: "fadeSlideUp 0.8s ease 0.6s both", opacity: 0 }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,178,0.4), rgba(139,111,255,0.4), transparent)" }} />
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-3 mb-6">
                <Code2 size={16} style={{ color: "var(--signal)" }} />
                <span className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--signal)" }}>
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
                We Don&apos;t Build Demos.
                <br />
                <span className="gradient-text-signal">We Build Operations.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  { title: "Ship First", desc: "Every system is scoped to deploy in weeks — not months. We iterate fast and get AI into production where it creates real value.", accent: "signal" },
                  { title: "Own the Stack", desc: "We don't hand off to black boxes. We control every layer — from RAG indexes to Docker containers — so you always know what's running.", accent: "plasma" },
                  { title: "Zero Bloat", desc: "No unnecessary models, no vanity metrics. Every component earns its place by solving a real operational problem for a real user.", accent: "cyan" },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-2xl border border-white/6 group hover:border-opacity-30 transition-all duration-400"
                    style={{ background: "rgba(255,255,255,0.02)" }}>
                    <h3 className="font-display text-xl mb-3" style={{ color: accentMap[item.accent] }}>
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16" style={{ animation: "fadeSlideUp 0.8s ease 0.8s both", opacity: 0 }}>
            <p className="text-text-secondary mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Want to build something ambitious with us?
            </p>
            <Link href="/#contact"
              className="btn-signal inline-flex items-center gap-2.5 px-9 py-4 rounded-xl text-sm group">
              Let&apos;s Talk
              <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
