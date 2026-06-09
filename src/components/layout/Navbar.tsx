"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Stack", href: "/#stack" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Team", href: "/founders" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3">
        <nav
          className={cn(
            "max-w-6xl mx-auto flex items-center justify-between h-12 px-4 sm:px-5 rounded-xl transition-all duration-300",
            scrolled
              ? "glass-panel shadow-lg shadow-black/20"
              : "bg-transparent border border-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/logo1.png"
              alt="Novanex AI"
              width={26}
              height={26}
              className="w-[26px] h-[26px] object-contain rounded"
            />
            <span className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
              Novanex
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-raised/60 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/#contact"
              className="btn-primary flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm"
            >
              Get Started
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "var(--void)" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold text-text-secondary hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setOpen(false)}
          className="btn-primary px-7 py-2.5 rounded-lg text-sm mt-3"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
