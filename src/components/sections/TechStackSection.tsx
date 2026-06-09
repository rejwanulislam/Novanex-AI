"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import TechStackIcon from "@/components/ui/TechStackIcon";

export default function TechStackSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <section id="stack" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-surface" />
      <div className="glow-line absolute top-0 left-0 right-0" />

      <div className="section-container relative z-10">
        <SectionHeader
          label="Future Stack"
          align="center"
          title={
            <>
              Built on a{" "}
              <span className="gradient-text-accent">production-ready stack</span>
            </>
          }
          description="Every layer chosen for reliability, speed, and scale — from orchestration to deployment."
        />

        <motion.div
          className="stack-card p-6 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border-subtle">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-text-muted font-medium">novanex-stack.config</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.id}
                className="group relative flex flex-col items-center gap-2.5 px-3 py-4 rounded-lg border border-border-subtle bg-surface-raised hover:border-border-glow hover:bg-accent/5 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <TechStackIcon
                  id={tech.id}
                  size={26}
                  className="text-text-secondary group-hover:text-accent transition-colors"
                />
                <span className="text-xs font-medium text-text-secondary group-hover:text-accent transition-colors text-center leading-tight">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 overflow-hidden">
          <div className="marquee-animate flex whitespace-nowrap select-none items-center">
            {marqueeItems.map((tech, i) => (
              <span key={i} className="inline-flex items-center px-4">
                <TechStackIcon
                  id={tech.id}
                  size={28}
                  className="text-text-muted/70 hover:text-accent transition-colors"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
