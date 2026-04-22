"use client";

import { useEffect, useRef, useState } from "react";
import { Users, ArrowDown } from "lucide-react";

export default function FoundersHero() {
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
    let h = (canvas.height = 600);
    window.addEventListener("resize", () => { w = canvas.width = window.innerWidth; });

    // Flowing lines (neural network aesthetic)
    const nodes = Array.from({ length: 18 }, (_, i) => ({
      x: (i / 17) * w,
      y: h / 2 + Math.sin((i / 17) * Math.PI * 2) * 80,
      vy: (Math.random() - 0.5) * 0.5,
      baseY: h / 2 + Math.sin((i / 17) * Math.PI * 2) * 80,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.008;

      nodes.forEach((n, i) => {
        n.y = n.baseY + Math.sin(t + i * 0.4) * 30;
      });

      // Draw flowing bezier curves
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        nodes.forEach((n, i) => {
          if (i === 0) { ctx.moveTo(n.x, n.y + layer * 15); return; }
          const prev = nodes[i - 1];
          const cpx = (prev.x + n.x) / 2;
          ctx.bezierCurveTo(cpx, prev.y + layer * 15, cpx, n.y + layer * 15, n.x, n.y + layer * 15);
        });
        const alpha = 0.06 - layer * 0.015;
        ctx.strokeStyle = layer === 0
          ? `rgba(0,255,178,${alpha})`
          : layer === 1
          ? `rgba(123,94,255,${alpha})`
          : `rgba(0,212,255,${alpha})`;
        ctx.lineWidth = 1.5 - layer * 0.3;
        ctx.stroke();
      }

      // Nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,178,0.4)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Plasma orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb opacity-10"
        style={{ background: "radial-gradient(ellipse, rgba(123,94,255,0.6) 0%, transparent 70%)" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2.5 bg-plasma/10 border border-plasma/25 rounded-full px-5 py-2 mb-8"
          style={{ opacity: mounted ? 1 : 0, transition: "all 0.6s ease" }}
        >
          <Users size={12} className="text-plasma" />
          <span className="font-mono text-xs text-plasma tracking-[0.15em] uppercase font-medium">
            The Builders
          </span>
        </div>

        <h1
          className="font-display font-800 text-5xl md:text-7xl leading-none tracking-tight mb-6"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)", transition: "all 0.8s ease 0.1s" }}
        >
          <span className="block text-text-primary">Meet the Minds</span>
          <span className="block gradient-text-plasma mt-2">Behind InsightFlow AI</span>
        </h1>

        <p
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ opacity: mounted ? 1 : 0, transition: "all 0.8s ease 0.25s" }}
        >
          We are engineers, researchers, and builders who believe AI should work
          for your operations — not the other way around. Every system we ship
          reflects our obsession with real-world resilience.
        </p>

        <div
          className="mt-10 flex justify-center"
          style={{ opacity: mounted ? 1 : 0, transition: "all 0.8s ease 0.4s" }}
        >
          <a href="#founders" className="flex flex-col items-center gap-2 text-text-muted hover:text-signal transition-colors group">
            <span className="text-xs font-mono tracking-widest uppercase">Meet the team</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
