"use client";

import { motion } from "framer-motion";
import { BasilLeaf } from "@/components/ui/basil-leaf";
import { MagneticButton } from "@/components/ui/magnetic-button";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-0"
    >
      {/* Ambient gradient backdrop */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 75% 30%, rgba(95,143,99,0.16), transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(201,168,118,0.14), transparent 55%)",
        }}
      />

      {/* Large signature leaf, right side, partially bled off-canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-24 top-1/2 -translate-y-1/2 md:-right-10 lg:right-0 w-[420px] md:w-[560px] lg:w-[640px] pointer-events-none -z-10"
      >
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [-3, -1, -3] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <BasilLeaf className="w-full h-auto text-forest/[0.085]" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-leaf" />
            <span className="text-xs uppercase tracking-widest2 text-forest/70">
              Granada · Genil · Desde siempre cerca de ti
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-[2.6rem] leading-[1.08] md:text-6xl lg:text-[4.5rem] lg:leading-[1.05] text-forest"
          >
            Bienestar natural con asesoramiento de confianza
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-lg md:text-xl text-ink/70 max-w-xl leading-relaxed"
          >
            Más que un herbolario. Te ayudamos a encontrar soluciones
            naturales adaptadas a ti, con el trato cercano de siempre.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#visitanos" variant="primary">
              Visítanos
            </MagneticButton>
            <MagneticButton href="#productos" variant="secondary">
              Ver productos
            </MagneticButton>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A876" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.788 1.4 8.168L12 19.347l-7.334 3.86 1.4-8.168L.132 9.211l8.2-1.193z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-ink/60">
              4.8/5 — la valoración de quienes ya nos conocen
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
