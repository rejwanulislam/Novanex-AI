"use client";

import { useInView } from "react-intersection-observer";
import { techStack } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function TechStackSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-ink-light border-y border-white/5 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(123,94,255,0.1) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-signal" />
            <span className="font-mono text-xs text-signal uppercase tracking-widest">
              Our Arsenal
            </span>
            <div className="w-6 h-px bg-signal" />
          </div>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-text-primary">
            Built on Battle-Tested Tech
          </h2>
        </div>

        {/* Tech pills */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-3 transition-all duration-700",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {techStack.map((tech, i) => (
            <div
              key={tech.id}
              className="group relative px-4 py-2 rounded-xl border border-white/8 bg-ink hover:border-signal/30 hover:bg-signal/5 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="font-mono text-sm text-text-secondary group-hover:text-signal transition-colors duration-300">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
