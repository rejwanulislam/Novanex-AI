"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-border-subtle bg-ink-light/40 flex items-center justify-center" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-xl border border-border-subtle bg-ink-light/60 hover:bg-ink-muted/60 hover:border-border-glow transition-all duration-300 flex items-center justify-center overflow-hidden focus:outline-none group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="dark-icon"
            initial={{ y: 20, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-accent group-hover:scale-110 transition-transform duration-200"
          >
            <Moon size={16} />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={{ y: 20, rotate: -45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-accent-secondary group-hover:scale-110 transition-transform duration-200"
          >
            <Sun size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
