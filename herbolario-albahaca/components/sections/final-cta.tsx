"use client";

import { motion } from "framer-motion";
import { BasilLeaf } from "@/components/ui/basil-leaf";
import { MagneticButton } from "@/components/ui/magnetic-button";

const particles = [
  { size: 8, x: "12%", y: "20%", duration: 16, delay: 0 },
  { size: 5, x: "78%", y: "15%", duration: 13, delay: 1.5 },
  { size: 10, x: "85%", y: "70%", duration: 18, delay: 0.5 },
  { size: 6, x: "25%", y: "75%", duration: 14, delay: 2 },
  { size: 4, x: "55%", y: "35%", duration: 11, delay: 1 },
  { size: 7, x: "65%", y: "85%", duration: 15, delay: 2.5 },
];

export function FinalCta() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-44 bg-forest-dark text-cream overflow-hidden">
      {/* Organic particles */}
      <div className="absolute inset-0 -z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-leaf/30"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
            }}
            animate={{
              y: [0, -28, 0],
              x: [0, 14, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Faint background leaf */}
      <div className="absolute -bottom-32 -left-32 w-[440px] opacity-[0.06] -z-0 pointer-events-none">
        <BasilLeaf className="w-full h-auto text-leaf" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-widest2 text-leaf/80">
            Herbolario Albahaca · Genil, Granada
          </span>
          <h2 className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Descubre una forma más natural de cuidarte.
          </h2>
          <div className="mt-10">
            <MagneticButton href="#visitanos" variant="primary" className="bg-leaf text-forest-dark hover:bg-cream">
              Ven a conocernos
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
