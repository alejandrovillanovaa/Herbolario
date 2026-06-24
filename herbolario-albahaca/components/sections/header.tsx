"use client";
import { motion } from "framer-motion";
import { BasilLeaf } from "@/components/ui/basil-leaf";
const links = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Productos", href: "#productos" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Visítanos", href: "#visitanos" },
];
export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-cream/70 backdrop-blur-md border border-forest/10 px-5 md:px-7 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <BasilLeaf className="w-5 h-7 text-forest" />
          <span className="font-display text-lg tracking-tight text-forest">
            Herbolario Albahaca
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-forest transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
          href="#visitanos"
          className="text-sm font-medium px-5 py-2.5 rounded-full bg-forest text-cream hover:bg-forest-dark transition-colors duration-300"
        >
          Visítanos
        </a>
      </div>
    </motion.header>
  );
}