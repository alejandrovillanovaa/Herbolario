import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { Products } from "@/components/sections/products";
import { Testimonials } from "@/components/sections/testimonials";
import { Visit } from "@/components/sections/visit";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <Testimonials />
      <Visit />
      <FinalCta />
      <Footer />
    </main>
  );
}
