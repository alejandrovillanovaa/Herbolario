import { Reveal } from "@/components/ui/reveal";
import { HeartHandshake, Leaf, GraduationCap, PackageSearch } from "lucide-react";

const benefits = [
  {
    code: "I",
    icon: HeartHandshake,
    title: "Atención personalizada",
    description:
      "Te escuchamos y te acompañamos para encontrar la solución natural que mejor se adapta a tu situación.",
  },
  {
    code: "II",
    icon: Leaf,
    title: "Productos seleccionados",
    description:
      "Trabajamos solo con marcas y referencias que conocemos y en las que confiamos para tu bienestar.",
  },
  {
    code: "III",
    icon: GraduationCap,
    title: "Amplia experiencia",
    description:
      "Años de trato cercano con la zona de Genil nos permiten ofrecerte un consejo honesto y bien fundamentado.",
  },
  {
    code: "IV",
    icon: PackageSearch,
    title: "Encargos rápidos",
    description:
      "¿No tenemos lo que buscas? Lo encargamos y te avisamos en cuanto esté disponible en tienda.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="px-6 md:px-10 py-28 md:py-36">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-leaf" />
            <span className="text-xs uppercase tracking-widest2 text-forest/70">
              Por qué elegirnos
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-forest max-w-2xl text-balance">
            El cuidado de un herbolario de barrio, con el criterio de toda una vida
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/10 rounded-2xl overflow-hidden border border-forest/10">
          {benefits.map((b, i) => (
            <Reveal key={b.code} delay={i * 0.08}>
              <div className="group bg-cream h-full p-8 md:p-9 flex flex-col gap-5 transition-colors duration-500 hover:bg-sand/40">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-leaf tracking-wide">
                    {b.code}
                  </span>
                  <b.icon className="w-5 h-5 text-forest/40 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-forest">
                  {b.title}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
