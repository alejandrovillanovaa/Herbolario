import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
const categories = [
  {
    name: "Fitoterapia",
    description: "Plantas medicinales e infusiones para cada necesidad.",
    image:
      "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cosmética natural",
    description: "Cuidado facial y corporal con ingredientes de origen vegetal.",
    image:
      "https://images.unsplash.com/photo-1556228852-80b6e8a83a01?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Suplementos",
    description: "Complementos alimenticios para apoyar tu día a día.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Alimentación ecológica",
    description: "Productos ecológicos seleccionados para tu despensa.",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1200&auto=format&fit=crop",
  },
];
export function Products() {
  return (
    <section id="productos" className="px-6 md:px-10 py-28 md:py-36 bg-forest text-cream">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-amber" />
            <span className="text-xs uppercase tracking-widest2 text-cream/60">
              Nuestros productos
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl text-balance">
            Cuatro caminos hacia tu bienestar diario
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.1}>
              
                href="#visitanos"
                className="group relative block overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
                  <span className="text-xs uppercase tracking-widest2 text-amber/90 mb-2">
                    Categoría
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-cream/70 max-w-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-sm text-cream/50 max-w-xl leading-relaxed">
            También trabajamos pedidos específicos: si buscas un producto
            concreto de fitoterapia, suplementación o cosmética que no ves
            aquí, pregúntanos y lo gestionamos por ti.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
