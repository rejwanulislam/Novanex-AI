"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { tickerItems } from "@/lib/data";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const count = Math.min(Math.floor((w * h) / 14000), 110);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.55 + 0.15,
      color: Math.random() > 0.65 ? "139,111,255" : "0,255,178",
    }));

    const maxDist = 130;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.004;

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const a = (1 - dist / maxDist) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,178,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // scan line
      const sy = (Math.sin(t * 0.4) * 0.5 + 0.5) * h;
      const sg = ctx.createLinearGradient(0, sy - 80, 0, sy + 80);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(0,255,178,0.04)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, sy - 80, w, 160);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-55" aria-hidden />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      <div className="absolute inset-0 grid-bg opacity-25" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] orb opacity-15"
        style={{ background: "radial-gradient(circle, #8B6FFF 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 right-1/5 w-[420px] h-[420px] orb opacity-12 float-slow"
        style={{ background: "radial-gradient(circle, #00FFB2 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] orb opacity-10"
        style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ animation: "fadeSlideUp 1s ease both" }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-ink-muted/80 border border-signal/25
          rounded-full px-5 py-2 mb-10 backdrop-blur-sm cursor-default"
          style={{ animation: "scaleIn 0.8s ease 0.2s both" }}>
          <Sparkles size={13} className="text-signal" style={{ animation: "pulseRing 2s ease infinite" }} />
          <span className="font-mono text-xs text-signal tracking-[0.18em] uppercase">
            Enterprise AI Systems
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
        </div>

        {/* Headline — Times New Roman */}
        <h1 className="font-display mb-8" style={{ lineHeight: "1.05" }}>
          <span className="block text-text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2"
            style={{ animation: "fadeSlideUp 0.9s ease 0.3s both", opacity: 0 }}>
            Turn Your SOPs
          </span>
          <span className="block gradient-text-signal glow-signal-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3"
            style={{ animation: "fadeSlideUp 0.9s ease 0.45s both", opacity: 0 }}>
            Into AI Agents
          </span>
          <span className="block text-text-secondary text-3xl sm:text-4xl md:text-5xl font-normal italic"
            style={{ animation: "fadeSlideUp 0.9s ease 0.6s both", opacity: 0 }}>
            That Never Sleep
          </span>
        </h1>

        {/* Sub */}
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-body"
          style={{ animation: "fadeSlideUp 0.9s ease 0.75s both", opacity: 0 }}>
          InsightFlow AI engineers production-grade AI pipelines — from RAG systems
          to geospatial intelligence — that automate your operations at any scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeSlideUp 0.9s ease 0.9s both", opacity: 0 }}>
          <a href="#contact"
            className="btn-signal flex items-center gap-2.5 px-9 py-4 rounded-xl text-sm group">
            Start Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="btn-outline flex items-center gap-2 px-9 py-4 rounded-xl text-sm">
            Explore Services
          </a>
          <a href="/founders" className="btn-outline flex items-center gap-2 px-9 py-4 rounded-xl text-sm"
            style={{ borderColor: "rgba(139,111,255,0.35)", color: "var(--plasma)" }}>
            Meet the Team
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 flex-wrap"
          style={{ animation: "fadeSlideUp 0.9s ease 1.05s both", opacity: 0 }}>
          {[
            { val: "15+", label: "AI Systems Built" },
            { val: "90%", label: "Automation Rate" },
            { val: "6", label: "AI Disciplines" },
            { val: "0", label: "Data Sold" },
          ].map((s) => (
            <div key={s.label} className="text-center group cursor-default">
              <div className="font-display text-3xl gradient-text-signal glow-signal-text group-hover:scale-110 transition-transform duration-300">
                {s.val}
              </div>
              <div className="text-text-muted text-[10px] font-mono uppercase tracking-[0.2em] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-text-muted text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-signal/60 to-transparent" />
        <ChevronDown size={13} className="text-signal animate-bounce" />
      </div>

      {/* ── TICKER BANNER ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0,255,178,0.06) 0%, rgba(139,111,255,0.06) 100%)",
          borderTop: "1px solid rgba(0,255,178,0.15)",
          backdropFilter: "blur(12px)",
        }}>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,178,0.5), rgba(139,111,255,0.5), transparent)" }} />

        <div className="py-4 flex whitespace-nowrap ticker-animate select-none">
          {/* Triple for seamless loop */}
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-10"
              style={{ minWidth: "max-content" }}>
              {/* Colored dot alternating */}
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: i % 3 === 0 ? "var(--signal)" : i % 3 === 1 ? "var(--plasma)" : "var(--cyan)" }} />
              {/* TEXT — large, clear, readable */}
              <span style={{
                fontFamily: "'Times New Roman', Georgia, serif",
                fontWeight: "700",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: i % 3 === 0 ? "var(--signal)" : i % 3 === 1 ? "#C8B8FF" : "var(--text-primary)",
                textShadow: i % 3 === 0 ? "0 0 12px rgba(0,255,178,0.5)" : i % 3 === 1 ? "0 0 12px rgba(139,111,255,0.4)" : "none",
              }}>
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
