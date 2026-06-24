"use client"; 
// Esto le dice a Next.js que este componente es interactivo
// Sin esto, useState no funciona

import { useState } from "react";
// useState es la "memoria" del componente
// Nos permite recordar qué categoría ha pinchado el usuario

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

// Las 4 categorías con sus datos
const categories = [
  {
    name: "Fitoterapia",
    description: "Plantas medicinales e infusiones para cada necesidad.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cosmética natural",
    description: "Cuidado facial y corporal con ingredientes de origen vegetal.",
    image: "https://images.unsplash.com/photo-1556228852-80b6e8a83a01?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Suplementos",
    description: "Complementos alimenticios para apoyar tu día a día.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Alimentación ecológica",
    description: "Productos ecológicos seleccionados para tu despensa.",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1200&auto=format&fit=crop",
  },
];

// Productos de prueba por categoría
// Esto es TEMPORAL — cuando conectemos Shopify, vendrán de ahí
// Qué es un objeto: es como una caja con etiquetas. 
// "Fitoterapia": [...] significa "dentro de Fitoterapia, guarda esta lista de productos"
const mockProducts: Record<string, { name: string; price: string; image: string }[]> = {
  "Fitoterapia": [
    { name: "Manzanilla ecológica", price: "3,50€", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=400&auto=format&fit=crop" },
    { name: "Valeriana en cápsulas", price: "8,90€", image: "https://images.unsplash.com/photo-1612540139150-4b2b6b7d2b2d?q=80&w=400&auto=format&fit=crop" },
    { name: "Té verde sencha", price: "5,20€", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop" },
  ],
  "Cosmética natural": [
    { name: "Crema de aloe vera", price: "12,00€", image: "https://images.unsplash.com/photo-1556228852-80b6e8a83a01?q=80&w=400&auto=format&fit=crop" },
    { name: "Aceite de argán", price: "15,50€", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400&auto=format&fit=crop" },
    { name: "Jabón de lavanda", price: "4,80€", image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f4e2?q=80&w=400&auto=format&fit=crop" },
  ],
  "Suplementos": [
    { name: "Magnesio 400mg", price: "11,90€", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop" },
    { name: "Vitamina C 1000mg", price: "9,50€", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400&auto=format&fit=crop" },
    { name: "Omega 3 marino", price: "14,00€", image: "https://images.unsplash.com/photo-1559757175-7cb036e0d465?q=80&w=400&auto=format&fit=crop" },
  ],
  "Alimentación ecológica": [
    { name: "Quinoa real ecológica", price: "6,90€", image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=400&auto=format&fit=crop" },
    { name: "Aceite de oliva virgen extra", price: "8,50€", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop" },
    { name: "Miel de romero", price: "7,20€", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400&auto=format&fit=crop" },
  ],
};

export function Products() {
  // useState — aquí está la "memoria"
  // selectedCategory guarda qué categoría ha pinchado el usuario
  // Empieza en null (ninguna seleccionada)
  // Cuando el usuario pincha, cambia a "Fitoterapia", "Suplementos", etc.
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

        {/* Las 4 tarjetas de categorías */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.1}>
              {/* onClick — cuando el usuario pincha, ejecuta setSelectedCategory */}
              {/* Si ya estaba seleccionada esa categoría, la deselecciona (null) */}
              {/* Si era otra, selecciona la nueva */}
              <button
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === cat.name ? null : cat.name
                  )
                }
                className={`group relative block w-full overflow-hidden rounded-2xl aspect-[4/3] text-left transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? "ring-2 ring-amber ring-offset-2 ring-offset-forest"
                    : ""
                }`}
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
                    {selectedCategory === cat.name ? "▲ Cerrar" : "Categoría"}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-cream mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-cream/70 max-w-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Panel de productos — solo aparece cuando hay una categoría seleccionada */}
        {/* Qué es esto: un bloque condicional. Solo se renderiza si selectedCategory no es null */}
        {selectedCategory && (
          <div className="mt-12 animate-fade-in">
            <Reveal>
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-8">
                {selectedCategory}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {mockProducts[selectedCategory].map((product) => (
                <Reveal key={product.name}>
                  <div className="rounded-2xl overflow-hidden bg-forest-dark/40 border border-cream/10 hover:border-amber/40 transition-colors duration-300">
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display text-lg text-cream mb-1">
                        {product.name}
                      </h4>
                      <p className="text-amber font-medium">{product.price}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

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
