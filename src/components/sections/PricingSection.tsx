"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="pricing" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-ink-light" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10">
        <SectionHeader
          label="Pricing"
          title={
            <>
              Transparent plans for{" "}
              <span className="gradient-text-accent">every stage</span>
            </>
          }
          description="Fixed-scope project pricing with no hidden fees. Pick a tier that matches your operational needs — or talk to us for something custom."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className={cn(
                "stack-card p-7 md:p-8 flex flex-col relative",
                plan.popular && "border-accent/40 ring-1 ring-accent/20 md:-translate-y-2"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent text-white">
                    <Sparkles size={10} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-1">{plan.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border-subtle">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-text-primary tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-text-muted text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-grow mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <Check size={15} className="text-accent flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={cn(
                  "w-full text-center py-3 rounded-lg text-sm font-semibold transition-all",
                  plan.popular ? "btn-primary" : "btn-ghost"
                )}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-text-muted text-sm mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          All plans include source code handoff, documentation, and a zero data training guarantee.
        </motion.p>
      </div>
    </section>
  );
}
