import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "EXPERTISE", id: "services" },
    { label: "MANIFESTE", id: "about" },
    { label: "LE MAESTRO", id: "founder" },
    { label: "CONTACT", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container-tight flex items-center justify-between">
        {/* LOGO */}
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => scrollTo("hero")}
        >
          <SoundWaveIcon />
          <span className="font-display text-lg md:text-xl font-black tracking-tighter text-foreground">
            MIZITIKILILI
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-secondary font-bold font-display text-xs tracking-[0.15em] hover:text-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-secondary/60">
            <Globe className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-widest uppercase">L'shi / RDC</span>
          </div>

          <Button 
            onClick={() => scrollTo("contact")} 
            variant={scrolled ? "default" : "outline"}
            className="hidden md:flex font-display font-black tracking-widest text-[10px]"
          >
            RÉSERVER
          </Button>

          {/* MOBILE BURGER */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display font-black tracking-tighter text-xl">MIZITIKILILI</span>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-display text-5xl font-black text-left tracking-tighter hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="mt-auto border-t border-border pt-8">
              <Button 
                onClick={() => scrollTo("contact")} 
                className="w-full py-8 text-lg font-display font-black tracking-widest"
              >
                RÉSERVER UNE PRESTATION
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const SoundWaveIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-primary group-hover:scale-110 transition-transform">
    {[6, 10, 14, 18, 22, 26].map((x, i) => {
      const heights = [12, 18, 24, 24, 18, 12];
      const h = heights[i];
      return (
        <motion.rect
          key={i}
          x={x}
          y={16 - h / 2}
          width="2.5"
          height={h}
          rx="1.25"
          fill="currentColor"
          animate={{ height: [h, h * 0.6, h] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
        />
      );
    })}
  </svg>
);

export default Navbar;