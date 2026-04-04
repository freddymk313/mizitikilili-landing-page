import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
          <SoundWaveIcon />
          <span className="font-display text-xl font-black tracking-tight text-foreground">MIZITIKILILI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "SERVICES", id: "services" },
            { label: "À PROPOS", id: "about" },
            { label: "FONDATEUR", id: "founder" },
            { label: "CONTACT", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors font-body"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-foreground/60 hidden sm:block" />
          <Button onClick={() => scrollTo("contact")} size="default">
            RÉSERVER
          </Button>
        </div>
      </div>
    </nav>
  );
};

const SoundWaveIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
    {[6, 10, 14, 18, 22, 26].map((x, i) => {
      const heights = [14, 20, 24, 24, 20, 14];
      const h = heights[i];
      return (
        <rect key={i} x={x} y={16 - h / 2} width="2.5" height={h} rx="1.25" fill="currentColor" />
      );
    })}
  </svg>
);

export default Navbar;
export { SoundWaveIcon };
