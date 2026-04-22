"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { stats } from "@/lib/data";

function Counter({ target, duration = 2000 }: { target: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const numericPart = target.replace(/[^0-9]/g, "");
    const suffix = target.replace(/[0-9]/g, "");
    const end = parseInt(numericPart, 10);

    if (isNaN(end)) {
      setDisplay(target);
      return;
    }

    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setDisplay(`${end}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${start}${suffix}`);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-display font-800 text-4xl md:text-5xl gradient-text-signal">
      {display}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-ink-light relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,255,178,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-2">
                <Counter target={s.value} />
              </div>
              <div className="text-text-muted text-xs font-mono uppercase tracking-widest">
                {s.label}
              </div>
              <div className="mt-3 w-8 h-px bg-signal/40 mx-auto group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
