"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function MagneticButton({
  children,
  href = "#",
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
    "btn-magnetic relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-wide rounded-full transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "bg-forest text-cream hover:bg-forest-dark"
      : "bg-transparent text-forest border border-forest/30 hover:border-forest";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={cn(base, styles, className)}
    >
      {children}
    </motion.a>
  );
}
