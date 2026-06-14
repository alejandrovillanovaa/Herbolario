# Herbolario Albahaca — Landing Page

Landing premium para Herbolario Albahaca (Genil, Granada), construida con
Next.js 14 (App Router), TypeScript, Tailwind CSS y Framer Motion.

## Sistema de diseño

- **Color**: verde bosque `#1F3D2E` (forest), verde hoja `#5F8F63` (leaf),
  crema `#F7F4ED` (cream), beige natural `#E5DCC8` (sand), acento ámbar
  `#C9A876` (amber, evocando aceites/tinturas), texto `#1A1F1B` (ink).
- **Tipografía**: *Fraunces* (display, con carácter editorial tipo etiqueta
  botánica) + *Inter* (texto/UI). Cargadas vía `next/font/google`.
- **Elemento signature**: una hoja de albahaca dibujada a línea
  (`components/ui/basil-leaf.tsx`), usada como motivo recurrente — gran
  ilustración en el hero, marca de agua en el CTA final, icono en el logo.
- **Motivo estructural**: fichas tipo "ficha de herbario" (numeración I–IV
  en beneficios, etiquetas de categoría en productos).

## Estructura

```
app/
  layout.tsx       — fuentes, metadata SEO, JSON-LD
  page.tsx         — ensambla las secciones
  globals.css      — estilos base, motivo de ficha, accesibilidad
components/
  ui/
    basil-leaf.tsx     — SVG signature
    magnetic-button.tsx — botón con micro-interacción magnética
    reveal.tsx          — wrapper de animación reveal-on-scroll
  sections/
    header.tsx, hero.tsx, benefits.tsx, products.tsx,
    testimonials.tsx, visit.tsx, final-cta.tsx, footer.tsx
```

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Pendiente de personalizar

- Número de teléfono en el botón "Llamar" (`components/sections/visit.tsx`,
  href="tel:...").
- Imágenes de categorías de producto (actualmente Unsplash; sustituir por
  fotografías propias de la tienda).
- Dominio real en `app/layout.tsx` (`metadataBase`, Open Graph) y crear
  `og-image.jpg` en `/public`.
- Valoración real (4.8/5, 120 reseñas) en el JSON-LD si cambia.
