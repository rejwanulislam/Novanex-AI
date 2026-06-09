"use client";

import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { credentials } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-ink-light" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="About Novanex AI"
              title={
                <>
                  Built by engineers.{" "}
                  <span className="gradient-text-signal">For real operations.</span>
                </>
              }
            />

            <div className="space-y-4 text-text-secondary leading-relaxed -mt-4">
              <p>
                Novanex AI bridges cutting-edge AI research and real operational
                challenges. We don&apos;t prototype — we deploy production systems.
              </p>
              <p>
                Our team combines urban planning, geospatial intelligence, machine
                learning, and software engineering — building AI that&apos;s technically
                sound and operationally meaningful.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="#contact" className="btn-primary px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2 group">
                Work With Us
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/founders" className="btn-ghost px-6 py-3 rounded-xl text-sm">
                Meet the Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-3 mb-5">
              {credentials.map((cred, i) => (
                <div
                  key={cred.id}
                  className="bento-card px-4 py-3.5 group cursor-default"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs font-mono text-text-secondary group-hover:text-signal transition-colors">
                      {cred.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bento-card p-6 border-signal/20 bg-signal/5 relative overflow-hidden">
              <div className="glow-line absolute top-0 left-0 right-0" />
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-signal/15 flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-signal" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-signal uppercase tracking-widest mb-1">
                    Recognition
                  </div>
                  <div className="font-display text-lg text-text-primary">
                    National 1st Runner-up
                  </div>
                  <div className="text-text-secondary text-sm mt-1">
                    GEOPLAN 1.0 Mapathon — Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
