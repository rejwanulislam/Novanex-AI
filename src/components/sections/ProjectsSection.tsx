"use client";

import { ExternalLink, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      {/* Bg glow */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(0,255,178,0.4) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={cn(
            "mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-signal" />
            <span className="font-mono text-xs text-signal uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary">
            Systems We&apos;ve
            <br />
            <span className="gradient-text-signal">Deployed in the Wild</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={cn(
                "card-glow group rounded-2xl border border-white/8 bg-ink-light p-8 relative overflow-hidden cursor-default transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top border accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-signal/60 via-plasma/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 100% 0%, #00FFB2, transparent)",
                }}
              />

              {/* Badge */}
              {project.badge && (
                <div className="flex items-center gap-2 mb-4 text-amber text-xs font-mono bg-amber/10 border border-amber/20 rounded-full px-3 py-1 w-fit">
                  <Trophy size={10} />
                  {project.badge}
                </div>
              )}

              {/* Project index */}
              <div className="font-mono text-xs text-text-muted mb-3 tracking-widest">
                PROJECT_{String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="font-display font-700 text-xl text-text-primary mb-3 group-hover:text-signal transition-colors duration-300 leading-snug">
                {project.title}
              </h3>

              {/* Detail */}
              {project.detail && (
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.detail}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ExternalLink size={13} className="text-signal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
