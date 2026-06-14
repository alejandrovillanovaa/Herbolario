import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MapPin, Clock, Phone, CreditCard } from "lucide-react";

const schedule = [
  { day: "Lunes a viernes", hours: "09:00 – 15:00 / 17:30 – 20:30" },
  { day: "Sábados", hours: "09:00 – 15:00" },
  { day: "Domingos", hours: "Cerrado" },
];

export function Visit() {
  return (
    <section id="visitanos" className="px-6 md:px-10 py-28 md:py-36 bg-sand/40">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-leaf" />
            <span className="text-xs uppercase tracking-widest2 text-forest/70">
              Visítanos
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-forest max-w-2xl text-balance">
            Te esperamos en Genil, en el corazón de Granada
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal delay={0.05}>
            <div className="rounded-2xl overflow-hidden border border-forest/10 aspect-[4/3] lg:aspect-[5/4]">
              <iframe
                title="Mapa de Herbolario Albahaca"
                src="https://www.google.com/maps?q=Av.+de+Cervantes,+6,+18008+Granada&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-leaf mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-xl text-forest mb-1">Dirección</h3>
                  <p className="text-ink/70 leading-relaxed">
                    Av. de Cervantes, 6<br />
                    Genil, 18008 Granada, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-leaf mt-1 shrink-0" strokeWidth={1.5} />
                <div className="flex-1">
                  <h3 className="font-display text-xl text-forest mb-3">Horario</h3>
                  <dl className="space-y-2">
                    {schedule.map((s) => (
                      <div
                        key={s.day}
                        className="flex justify-between items-baseline gap-4 text-sm border-b border-forest/10 pb-2"
                      >
                        <dt className="text-ink/60">{s.day}</dt>
                        <dd className="text-ink font-medium text-right">{s.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CreditCard className="w-5 h-5 text-leaf mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-xl text-forest mb-1">Métodos de pago</h3>
                  <p className="text-ink/70 leading-relaxed text-sm">
                    Tarjeta de crédito, tarjeta de débito y pago móvil NFC.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <MagneticButton
                  href="https://www.google.com/maps/dir/?api=1&destination=Av.+de+Cervantes,+6,+18008+Granada"
                  variant="primary"
                >
                  Cómo llegar
                </MagneticButton>
                <MagneticButton href="tel:" variant="secondary" className="gap-2">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  Llamar
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
