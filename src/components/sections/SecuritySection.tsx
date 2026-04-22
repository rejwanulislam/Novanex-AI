"use client";

import { useInView } from "react-intersection-observer";
import { securityCards } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function SecuritySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,178,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-signal" />
              <span className="font-mono text-xs text-signal uppercase tracking-widest">
                Trust & Security
              </span>
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
              Your Data{" "}
              <span className="gradient-text-signal">Never Leaves</span>
              <br />
              Your Control
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
              We architect every system with enterprise-grade security at its core.
              SOC 2 compliant, fully isolated, and zero data training — your
              proprietary intelligence stays yours.
            </p>
            <div className="space-y-3">
              {["SOC 2 Type II compliant infrastructure", "Dedicated Docker containers per client", "Full audit logs & data lineage tracking", "Zero-knowledge deployment option available"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: cards */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            {securityCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="card-glow rounded-2xl border border-white/8 bg-ink-light p-6 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-signal/10 border border-signal/20 flex items-center justify-center mb-4 group-hover:bg-signal/15 transition-colors duration-300">
                    <Icon size={18} className="text-signal" />
                  </div>
                  <h4 className="font-display font-600 text-sm text-text-primary leading-snug">
                    {card.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
