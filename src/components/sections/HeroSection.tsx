"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { tickerItems } from "@/lib/data";

const heroStats = [
  { value: "20+", label: "Systems Deployed" },
  { value: "92%", label: "Automation Rate" },
  { value: "6", label: "AI Disciplines" },
  { value: "0", label: "Data Leaks" },
];

const stackLayers = [
  { label: "Agents", color: "var(--accent)" },
  { label: "Orchestration", color: "var(--accent-secondary)" },
  { label: "Data Layer", color: "var(--accent-tertiary)" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] orb opacity-20"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 left-[-10%] w-[350px] h-[350px] orb opacity-15 float-anim"
        style={{ background: "radial-gradient(circle, var(--accent-secondary), transparent 70%)" }}
      />

      <div className="relative z-10 section-container flex-grow flex flex-col justify-center pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 border border-border-accent bg-accent/5 rounded-full px-3.5 py-1 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-glow" />
              <span className="text-xs font-medium text-accent tracking-wide">
                Enterprise AI Systems
              </span>
            </div>

            <h1 className="text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] font-bold text-text-primary mb-5">
              Turn SOPs into{" "}
              <span className="gradient-text">autonomous agents</span>{" "}
              that scale your ops
            </h1>

            <p className="text-text-secondary text-lg max-w-lg leading-relaxed mb-8">
              Novanex AI engineers production-grade pipelines — from multi-agent
              automation to geospatial intelligence — so your team stops drowning
              in manual work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm group"
              >
                Start Your Project
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm"
              >
                Explore Services
                <ChevronRight size={15} className="text-accent" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-7 border-t border-border-subtle">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-text-primary">{s.value}</div>
                  <div className="text-text-muted text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Future stack visual */}
            <div className="relative mb-4 flex flex-col gap-2 max-w-[280px] ml-auto mr-4">
              {stackLayers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  className="stack-card px-4 py-2.5 flex items-center justify-between"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ marginLeft: `${i * 12}px`, marginRight: `${(2 - i) * 12}px` }}
                >
                  <span className="text-xs font-medium text-text-secondary">{layer.label}</span>
                  <span
                    className="w-2 h-2 rounded-full pulse-glow"
                    style={{ background: layer.color }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="relative stack-layer rounded-xl overflow-hidden border border-border-subtle bg-surface shadow-2xl shadow-accent/5">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-accent/15 via-transparent to-accent-secondary/10 pointer-events-none" />
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-raised">
                {mounted && (
                  <Image
                    src="/hero-illustration.png"
                    alt="Novanex AI automation dashboard"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2 glass-panel px-3 py-1.5 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-glow" />
                  <span className="text-[10px] font-medium text-accent uppercase tracking-wider">
                    Live Pipeline
                  </span>
                </div>
                <Link
                  href="/founders"
                  className="glass-panel px-3 py-1.5 rounded-lg text-xs text-text-secondary hover:text-accent transition-colors"
                >
                  Meet the team →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border-subtle bg-surface/80 backdrop-blur-sm overflow-hidden">
        <div className="py-3.5 marquee-animate flex whitespace-nowrap select-none">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{
                  background:
                    i % 3 === 0
                      ? "var(--accent)"
                      : i % 3 === 1
                        ? "var(--accent-secondary)"
                        : "var(--accent-tertiary)",
                }}
              />
              <span className="text-xs uppercase tracking-wider text-text-muted font-medium">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
