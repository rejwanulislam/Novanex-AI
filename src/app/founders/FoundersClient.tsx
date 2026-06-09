"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Github,
  Linkedin,
  MapPin,
  Twitter,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import { founders, teamStats, teamValues } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Founder } from "@/types";

const accentStyles = {
  signal: {
    text: "text-signal",
    bg: "bg-signal/10",
    border: "border-signal/25",
    tag: "bg-signal/8 border-signal/20 text-signal",
    dot: "bg-signal",
  },
  plasma: {
    text: "text-plasma",
    bg: "bg-plasma/10",
    border: "border-plasma/25",
    tag: "bg-plasma/8 border-plasma/20 text-plasma",
    dot: "bg-plasma",
  },
  cyan: {
    text: "text-cyan",
    bg: "bg-cyan/10",
    border: "border-cyan/25",
    tag: "bg-cyan/8 border-cyan/20 text-cyan",
    dot: "bg-cyan",
  },
} as const;

function TeamMemberCard({ founder, index }: { founder: Founder; index: number }) {
  const styles = accentStyles[founder.accent];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      className="stack-card overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div className={cn("h-1 w-full", styles.bg)} />

      <div className="p-7 md:p-8 flex flex-col flex-grow">
        <div className="flex items-start gap-5 mb-6">
          <div
            className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border",
              styles.bg,
              styles.border
            )}
          >
            <span className={cn("text-xl font-bold", styles.text)}>{founder.avatar}</span>
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary leading-tight">
              {founder.name}
            </h2>
            <p className={cn("text-xs font-medium uppercase tracking-wider mt-1", styles.text)}>
              {founder.role}
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <MapPin size={11} className="text-text-muted" />
              <span className="text-xs text-text-muted">{founder.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            {(
              [
                { Icon: Github, href: founder.links.github },
                { Icon: Linkedin, href: founder.links.linkedin },
                { Icon: Twitter, href: founder.links.twitter },
              ] as const
            ).map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-lg border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent hover:border-border-glow transition-all"
                aria-label={`${founder.name} social link`}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        <blockquote className="text-text-secondary text-sm italic leading-relaxed mb-5 border-l-2 border-border-subtle pl-4">
          &ldquo;{founder.tagline}&rdquo;
        </blockquote>

        <p className="text-text-secondary text-sm leading-relaxed mb-6">{founder.bio}</p>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Award size={13} className={styles.text} />
            <span className={cn("text-xs font-medium uppercase tracking-wider", styles.text)}>
              Credentials
            </span>
          </div>
          <ul className="space-y-2">
            {founder.credentials.map((cred) => (
              <li key={cred} className="flex items-start gap-2.5 text-text-secondary text-sm">
                <span className={cn("w-1 h-1 rounded-full flex-shrink-0 mt-2", styles.dot)} />
                {cred}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-5 border-t border-border-subtle">
          <div className="flex flex-wrap gap-2">
            {founder.expertise.map((skill) => (
              <span key={skill} className={cn("tag", styles.tag)}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function FoundersClient() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Navbar />
      <main className="relative z-[1] min-h-screen">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] orb opacity-12 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.15), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[450px] h-[450px] orb opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)" }}
        />

        <div className="section-container relative pt-28 pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-10 group text-xs font-medium uppercase tracking-wider"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                label="The Team"
                title={
                  <>
                    Built by people who{" "}
                    <span className="gradient-text-accent">ship real AI</span>
                  </>
                }
                description="Novanex AI was founded by engineers and researchers who got tired of watching great AI ideas die in demos. We build systems that deploy, scale, and save real operations real time."
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 -mt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {teamStats.map((stat) => (
                <div key={stat.label} className="stack-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-text-primary">{stat.value}</div>
                  <div className="text-text-muted text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
            {founders.map((founder, i) => (
              <TeamMemberCard key={founder.id} founder={founder} index={i} />
            ))}
          </div>

          <section ref={valuesRef} className="stack-card overflow-hidden">
            <div className="glow-line" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <Users size={15} className="text-accent" />
                <span className="text-xs font-medium text-accent uppercase tracking-widest">
                  Our Philosophy
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 leading-tight">
                We don&apos;t build demos.{" "}
                <span className="gradient-text-accent">We build operations.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {teamValues.map((item, i) => {
                  const styles = accentStyles[item.accent];
                  return (
                    <motion.div
                      key={item.title}
                      className="p-5 rounded-xl border border-border-subtle bg-surface-raised hover:border-border-glow transition-all"
                      initial={{ opacity: 0, y: 16 }}
                      animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <h3 className={cn("text-base font-semibold mb-2", styles.text)}>
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 16 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-text-secondary mb-5">Want to build something ambitious with us?</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm group">
                Let&apos;s Talk
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/#pricing" className="btn-ghost inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
