"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We deep-dive into your existing SOPs, data sources, and operational bottlenecks. No generic demos — just focused discovery.",
    accent: "signal",
  },
  {
    number: "02",
    title: "Architecture Design",
    description:
      "We design the exact AI system architecture: agent graphs, RAG indexes, API contracts, and infra specs — all priced upfront.",
    accent: "plasma",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We build in sprints with full transparency. Daily updates, GitHub access, and staging environments at every stage.",
    accent: "signal",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "Vercel/Docker deployment with CI/CD pipelines. Your system is live, monitored, and ready to scale to millions of operations.",
    accent: "plasma",
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(123,94,255,0.12) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-signal" />
            <span className="font-mono text-xs text-signal uppercase tracking-widest">
              How We Work
            </span>
            <div className="w-6 h-px bg-signal" />
          </div>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary">
            From Idea to
            <br />
            <span className="gradient-text-signal">Production in Weeks</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={cn(
                "relative group transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-white/5 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
              )}

              <div className="card-glow rounded-2xl border border-white/8 bg-ink-light p-6 relative z-10 h-full">
                {/* Top accent */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100",
                    step.accent === "signal"
                      ? "bg-gradient-to-r from-signal to-transparent"
                      : "bg-gradient-to-r from-plasma to-transparent"
                  )}
                />

                {/* Number */}
                <div
                  className={cn(
                    "font-mono text-3xl font-bold mb-4 transition-colors duration-300",
                    step.accent === "signal"
                      ? "text-signal/20 group-hover:text-signal/40"
                      : "text-plasma/20 group-hover:text-plasma/40"
                  )}
                >
                  {step.number}
                </div>

                <h3 className="font-display font-700 text-text-primary mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
