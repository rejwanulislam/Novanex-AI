"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 mb-4",
          align === "center" && "justify-center"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-glow" />
        <span className="text-xs font-medium text-accent uppercase tracking-widest">
          {label}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] text-text-primary leading-[1.12] font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
