"use client";

import { ArrowRight, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div
          className={cn(
            "relative rounded-3xl border border-signal/20 p-12 md:p-16 text-center overflow-hidden transition-all duration-700",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          style={{
            background: "linear-gradient(135deg, rgba(0,255,178,0.05) 0%, rgba(123,94,255,0.05) 100%)",
          }}
        >
          {/* Top glow bar */}
          <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
          {/* Bottom glow bar */}
          <div className="absolute bottom-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-plasma/50 to-transparent" />

          {/* Floating orbs */}
          <div
            className="absolute -top-12 -left-12 w-40 h-40 orb opacity-20 float-anim"
            style={{ background: "radial-gradient(circle, #00FFB2, transparent)" }}
          />
          <div
            className="absolute -bottom-12 -right-12 w-40 h-40 orb opacity-15 float-anim"
            style={{
              background: "radial-gradient(circle, #7B5EFF, transparent)",
              animationDelay: "3s",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-signal/10 border border-signal/20 rounded-full px-4 py-1.5 mb-6">
              <Zap size={12} className="text-signal" fill="currentColor" />
              <span className="font-mono text-xs text-signal uppercase tracking-widest">
                Start Today
              </span>
            </div>

            <h2 className="font-display font-800 text-4xl md:text-6xl text-text-primary mb-6 leading-tight">
              Your Operations Are Waiting
              <br />
              <span className="gradient-text-signal">to Be Automated.</span>
            </h2>

            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Every day without AI is a day of manual overhead. Let&apos;s scope your
              system this week — no commitment required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="btn-signal flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-display font-700 uppercase tracking-wider group"
              >
                Book a Discovery Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="btn-outline flex items-center gap-2 px-8 py-4 rounded-xl text-sm"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
