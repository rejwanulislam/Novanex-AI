"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Globe, Bot, Code, Layers, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";

const icons = [Brain, Bot, Globe, Sparkles, Code, Layers];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].id);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const activeService = services.find((s) => s.id === active) ?? services[0];

  return (
    <section id="services" className="section-pad relative" ref={ref}>
      <div className="section-container">
        <SectionHeader
          label="What We Build"
          title={
            <>
              AI services that{" "}
              <span className="gradient-text-accent">ship to production</span>
            </>
          }
          description="Six core disciplines. Every system scoped, built, and deployed with full transparency."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <motion.div
            className="lg:col-span-5 stack-card p-7 md:p-8 flex flex-col justify-between min-h-[380px]"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="text-xs font-medium text-accent">{activeService.number}</span>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-2 mb-3 leading-tight">
                {activeService.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{activeService.description}</p>
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-5">
                {activeService.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all group"
              >
                Discuss this service
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, i) => {
              const Icon = icons[i];
              const isActive = active === service.id;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActive(service.id)}
                  className={cn(
                    "stack-card p-4 text-left transition-all duration-300",
                    isActive && "border-accent/40 bg-accent/5 ring-1 ring-accent/20"
                  )}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="flex items-start justify-between mb-2.5">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                        isActive ? "bg-accent/15 text-accent" : "bg-surface-raised text-text-muted"
                      )}
                    >
                      <Icon size={17} />
                    </div>
                    <span className="text-[10px] text-text-muted font-medium">{service.number}</span>
                  </div>
                  <h4
                    className={cn(
                      "text-sm font-semibold leading-snug transition-colors",
                      isActive ? "text-accent" : "text-text-primary"
                    )}
                  >
                    {service.title}
                  </h4>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
