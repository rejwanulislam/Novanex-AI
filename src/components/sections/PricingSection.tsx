"use client";

import { Check, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="py-28 relative" ref={ref}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,178,0.5) 0%, transparent 70%)",
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
              Investment
            </span>
            <div className="w-6 h-px bg-signal" />
          </div>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-text-primary mb-4">
            Transparent Pricing.
            <br />
            <span className="gradient-text-signal">No Surprises.</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Every engagement is scoped precisely to your needs. We build what matters,
            when it matters.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-700",
                plan.popular
                  ? "border border-signal/30 bg-signal/5"
                  : "border border-white/8 bg-ink-light",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top glow for popular */}
              {plan.popular && (
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-signal to-transparent" />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-signal text-ink px-3 py-1 rounded-full text-xs font-display font-700 uppercase tracking-wider whitespace-nowrap">
                  <Zap size={10} fill="currentColor" />
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={cn(
                    "font-display font-800 text-4xl",
                    plan.popular ? "text-signal" : "text-text-primary"
                  )}
                >
                  {plan.price}
                </span>
                <span className="text-text-muted text-sm">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              <div className="divider mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <Check
                      size={14}
                      className={cn(
                        "flex-shrink-0 mt-0.5",
                        plan.popular ? "text-signal" : "text-signal/60"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={cn(
                  "w-full block text-center py-3 rounded-xl text-sm font-display font-700 uppercase tracking-wider transition-all duration-300",
                  plan.popular
                    ? "btn-signal"
                    : "btn-outline"
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-text-muted text-xs font-mono mt-8">
          All prices in USD. Custom scoping available for enterprise projects.
        </p>
      </div>
    </section>
  );
}
