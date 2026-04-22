"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(loop);

    // Scale on hover of interactive elements
    const onEnter = () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "rgba(0,255,178,0.8)";
      dot.style.opacity = "0";
    };
    const onLeave = () => {
      ring.style.width = "24px";
      ring.style.height = "24px";
      ring.style.borderColor = "rgba(0,255,178,0.4)";
      dot.style.opacity = "1";
    };

    document.querySelectorAll("a, button, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{
          width: "5px",
          height: "5px",
          background: "#00FFB2",
          borderRadius: "50%",
          marginLeft: "-2.5px",
          marginTop: "-2.5px",
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none hidden md:block"
        style={{
          width: "24px",
          height: "24px",
          border: "1px solid rgba(0,255,178,0.4)",
          borderRadius: "50%",
          marginLeft: "-12px",
          marginTop: "-12px",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
