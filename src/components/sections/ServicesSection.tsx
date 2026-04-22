"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ServicesSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-28 relative" ref={ref}>
      {/* Bg glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, rgba(123,94,255,0.4) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
              What We Build
            </span>
          </div>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary">
            AI Services That
            <br />
            <span className="gradient-text-signal">Actually Ship</span>
          </h2>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={cn(
                "relative bg-ink p-8 group cursor-default transition-all duration-500",
                hovered === service.id && "bg-ink-muted",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <div className="font-mono text-xs text-text-muted mb-6 tracking-widest">
                {service.number}
              </div>

              {/* Hover accent */}
              <div
                className={cn(
                  "absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-signal to-transparent transition-all duration-500",
                  hovered === service.id ? "opacity-100" : "opacity-0"
                )}
              />

              {/* Title */}
              <h3 className="font-display font-700 text-lg text-text-primary mb-3 group-hover:text-signal transition-colors duration-300 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                className={cn(
                  "absolute top-6 right-6 w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300",
                  hovered === service.id
                    ? "bg-signal/10 border-signal/30 opacity-100"
                    : "opacity-0"
                )}
              >
                <ArrowUpRight size={14} className="text-signal" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
