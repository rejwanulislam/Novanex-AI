"use client";

import { X, Check, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { oldWayPoints, insightFlowPoints } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ComparisonSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-ink-light relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,178,0.08) 0%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

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
              The Transformation
            </span>
            <div className="w-6 h-px bg-signal" />
          </div>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary">
            Before vs After{" "}
            <span className="gradient-text-signal">InsightFlow AI</span>
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Old Way */}
          <div
            className={cn(
              "rounded-2xl border border-white/8 bg-ink p-8 transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X size={14} className="text-red-400" />
              </div>
              <h3 className="font-display font-700 text-lg text-text-secondary">
                The Old Way
              </h3>
            </div>
            <ul className="space-y-4">
              {oldWayPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-secondary text-sm"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <X
                    size={14}
                    className="text-red-400 flex-shrink-0 mt-0.5"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* InsightFlow Way */}
          <div
            className={cn(
              "rounded-2xl border border-signal/20 bg-ink p-8 relative transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            {/* Top glow bar */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-signal/10 border border-signal/20 flex items-center justify-center">
                <Check size={14} className="text-signal" />
              </div>
              <h3 className="font-display font-700 text-lg text-signal">
                InsightFlow AI
              </h3>
            </div>
            <ul className="space-y-4">
              {insightFlowPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-primary text-sm"
                >
                  <Check
                    size={14}
                    className="text-signal flex-shrink-0 mt-0.5"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-signal px-8 py-4 rounded-xl text-sm font-display font-700 uppercase tracking-wider group"
          >
            Start the Transformation
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
