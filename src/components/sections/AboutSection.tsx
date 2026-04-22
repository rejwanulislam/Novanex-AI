"use client";

import { useInView } from "react-intersection-observer";
import { credentials } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-28 bg-ink-light border-y border-white/5 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-10"
        style={{
          background: "radial-gradient(ellipse at 100% 50%, rgba(123,94,255,0.4), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: credentials grid */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="grid grid-cols-2 gap-3">
              {credentials.map((cred, i) => (
                <div
                  key={cred.id}
                  className="rounded-xl border border-white/8 bg-ink px-4 py-3 group hover:border-signal/30 hover:bg-signal/5 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-signal opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs font-mono text-text-secondary group-hover:text-signal transition-colors duration-300">
                      {cred.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="mt-6 rounded-2xl border border-plasma/20 bg-plasma/5 p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent opacity-50" />
              <div className="font-mono text-xs text-plasma uppercase tracking-widest mb-2">
                Recognition
              </div>
              <div className="font-display font-700 text-text-primary">
                🏆 National 1st Runner-up
              </div>
              <div className="text-text-secondary text-sm mt-1">
                GEOPLAN 1.0 Mapathon — Bangladesh
              </div>
            </div>
          </div>

          {/* Right: story */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-signal" />
              <span className="font-mono text-xs text-signal uppercase tracking-widest">
                About InsightFlow AI
              </span>
            </div>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
              Built by Engineers.
              <br />
              <span className="gradient-text-signal">For Real Operations.</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                InsightFlow AI was founded to bridge the gap between cutting-edge AI
                research and the real operational challenges that businesses face every
                day. We don&apos;t just prototype — we deploy.
              </p>
              <p>
                Our team combines expertise in urban planning, geospatial intelligence,
                machine learning, and software engineering. This cross-disciplinary
                perspective lets us build AI systems that are not just technically
                sound, but operationally meaningful.
              </p>
              <p>
                From multi-agent orchestration systems to computer vision pipelines
                validated on real-world disaster events, every system we ship is built
                for production resilience at scale.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="btn-signal px-6 py-3 rounded-xl text-sm font-display font-700 uppercase tracking-wider"
              >
                Work With Us
              </a>
              <a
                href="#projects"
                className="btn-outline px-6 py-3 rounded-xl text-sm"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
