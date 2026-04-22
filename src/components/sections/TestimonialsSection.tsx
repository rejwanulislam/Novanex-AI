"use client";

import { Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "InsightFlow transformed our 40-page SOP into an AI agent that handles 90% of our intake process. The time savings are immediate.",
    author: "Sarah K.",
    role: "Operations Director",
    company: "Regional NGO, Dhaka",
  },
  {
    quote:
      "The Geospatial AI pipeline they built for us surfaces flood risk signals 48 hours earlier than our previous system. That's lives saved.",
    author: "Dr. Rahman",
    role: "Lead Researcher",
    company: "Bangladesh Planning Institute",
  },
  {
    quote:
      "Zero handholding required after deployment. The CI/CD pipeline means our RAG chatbot updates itself when we update our docs.",
    author: "Tarek M.",
    role: "CTO",
    company: "Tech Startup, Chittagong",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 bg-ink-light border-y border-white/5 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(123,94,255,0.2) 0%, transparent 100%)",
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
              Client Results
            </span>
            <div className="w-6 h-px bg-signal" />
          </div>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary">
            Systems That{" "}
            <span className="gradient-text-signal">Speak for Themselves</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "card-glow rounded-2xl border border-white/8 bg-ink p-8 relative transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={20} className="text-signal/30 mb-4" />
              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="divider mb-5" />
              <div>
                <div className="font-display font-600 text-text-primary text-sm">
                  {t.author}
                </div>
                <div className="text-text-muted text-xs font-mono mt-0.5">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
