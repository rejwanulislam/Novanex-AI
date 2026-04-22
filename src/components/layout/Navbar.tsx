"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Team", href: "/founders" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/85 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center relative"
              style={{ background: "var(--signal)" }}>
              <Zap size={14} className="text-ink" fill="currentColor" />
              <span className="absolute inset-0 rounded-lg animate-ping opacity-25"
                style={{ background: "var(--signal)" }} />
            </div>
            <span className="font-display text-lg tracking-tight">
              InsightFlow<span style={{ color: "var(--signal)" }}>AI</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-200 relative group"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ background: "var(--signal)" }} />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/founders"
              className="btn-outline px-4 py-2 rounded-lg text-xs"
              style={{ borderColor: "rgba(139,111,255,0.35)", color: "var(--plasma)" }}>
              Meet The Team
            </Link>
            <Link href="/#contact"
              className="btn-signal px-5 py-2 rounded-lg text-sm">
              Get Started
            </Link>
          </div>

          <button className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )} style={{ background: "rgba(5,5,8,0.97)", backdropFilter: "blur(24px)" }}>
        {navLinks.map((link, i) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
            className="font-display text-3xl text-text-secondary hover:text-signal transition-colors duration-200"
            style={{ transitionDelay: `${i * 60}ms` }}>
            {link.label}
          </Link>
        ))}
        <Link href="/#contact" onClick={() => setOpen(false)}
          className="btn-signal px-8 py-3 rounded-xl mt-4">
          Get Started
        </Link>
      </div>
    </>
  );
}
