import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://herbolarioalbahaca.es"),
  title: {
    default: "Herbolario Albahaca | Herbolario en Granada — Productos Naturales y Asesoramiento",
    template: "%s | Herbolario Albahaca",
  },
  description:
    "Herbolario Albahaca, en Av. de Cervantes 6, Genil (Granada). Fitoterapia, suplementos, cosmética natural y alimentación ecológica con asesoramiento personalizado. Valorado con 4.8/5.",
  keywords: [
    "Herbolario Granada",
    "Productos naturales Granada",
    "Herbolario Genil",
    "Cosmética natural Granada",
    "Suplementos naturales Granada",
    "Herbolario Albahaca",
  ],
  openGraph: {
    title: "Herbolario Albahaca | Bienestar natural en Granada",
    description:
      "Más que un herbolario. Asesoramiento personalizado, fitoterapia, cosmética natural y alimentación ecológica en Genil, Granada.",
    url: "https://herbolarioalbahaca.es",
    siteName: "Herbolario Albahaca",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Herbolario Albahaca",
    image: "https://herbolarioalbahaca.es/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. de Cervantes, 6",
      addressLocality: "Granada",
      addressRegion: "Andalucía",
      postalCode: "18008",
      addressCountry: "ES",
    },
    telephone: "",
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "120",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
    paymentAccepted: "Credit Card, Debit Card, NFC Mobile Payment",
  };

  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased bg-cream text-ink`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
