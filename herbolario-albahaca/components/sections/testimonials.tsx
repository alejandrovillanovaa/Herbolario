import { Reveal } from "@/components/ui/reveal";

const testimonials = [
  {
    quote:
      "El trato es excelente desde el primer momento. Te escuchan y te aconsejan con calma, sin prisas.",
    author: "Cliente habitual",
  },
  {
    quote:
      "Muy profesionales. Siempre explican bien para qué sirve cada producto y cómo tomarlo.",
    author: "Cliente de Genil",
  },
  {
    quote:
      "Siempre encuentro lo que necesito, y si no lo tienen, me lo consiguen en pocos días.",
    author: "Cliente recurrente",
  },
];

export function Testimonials() {
  return (
    <section id="opiniones" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-leaf" />
            <span className="text-xs uppercase tracking-widest2 text-forest/70">
              Opiniones
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl text-forest text-balance">
            Lo que dicen quienes ya confían en nosotros
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <figure className="h-full flex flex-col justify-between border-t border-forest/15 pt-8">
                <blockquote className="font-display text-xl md:text-2xl text-ink leading-snug text-balance">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm text-ink/50 uppercase tracking-widest2">
                  {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
