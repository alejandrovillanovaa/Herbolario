import { BasilLeaf } from "@/components/ui/basil-leaf";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/60 px-6 md:px-10 py-10 border-t border-cream/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2.5">
          <BasilLeaf className="w-4 h-6 text-leaf" />
          <span className="font-display text-base text-cream">
            Herbolario Albahaca
          </span>
        </div>
        <p>Av. de Cervantes, 6 · Genil, 18008 Granada</p>
        <p>© {new Date().getFullYear()} Herbolario Albahaca</p>
      </div>
    </footer>
  );
}
