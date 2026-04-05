import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden section-padding bg-background"
    >
      {/* Filigrane "Pulse" en arrière-plan (Style Éditorial) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] flex justify-center items-center">
        <svg width="80%" height="60%" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <rect 
              key={i} 
              x={60 * i + 40} 
              y={200 - (100 + Math.random() * 200) / 2} 
              width="12" 
              height={100 + Math.random() * 200} 
              rx="6" 
              fill="currentColor" 
              className="text-primary"
            />
          ))}
        </svg>
      </div>

      <div className="container-tight relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Surtitre */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <span className="h-[1px] w-8 md:w-12 bg-primary"></span>
            <span className="text-primary font-display font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase">
              La Signature Sonore de la RDC
            </span>
          </motion.div>

          {/* Titre Massif */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 
              className="font-display font-black text-foreground leading-[0.8] tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 16vw, 12rem)" }}
            >
              MIZI
              <br />
              <span className="text-stroke">TIKILILI</span>
            </h1>
          </motion.div>

          {/* Sous-titre & Description */}
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end gap-8 md:gap-20">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-secondary font-body max-w-xl leading-snug text-balance"
            >
              L'excellence acoustique et le prestige musical pour vos événements les plus exclusifs. 
              <span className="text-foreground font-semibold italic block mt-2">
                "La musique au service de vos émotions."
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 shrink-0"
            >
              <Button 
                size="lg" 
                onClick={() => scrollTo("contact")}
                className="group h-16 px-8 font-display font-black tracking-widest text-xs"
              >
                RÉSERVER LE MAESTRO
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollTo("services")}
                className="h-16 px-8 font-display font-black tracking-widest text-xs border-2"
              >
                NOTRE RÉPERTOIRE
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicateur de Scroll discret (Mobile Friendly) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] text-secondary/40 uppercase rotate-90 mb-8">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;