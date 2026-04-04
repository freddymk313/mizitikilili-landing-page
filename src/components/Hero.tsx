import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative sound wave top-left */}
      <div className="absolute top-24 left-8 opacity-20">
        <svg width="80" height="200" viewBox="0 0 80 200" fill="none">
          {[10, 22, 34, 46, 58, 70].map((x, i) => {
            const heights = [60, 100, 140, 140, 100, 60];
            return (
              <rect key={i} x={x} y={100 - heights[i] / 2} width="6" height={heights[i]} rx="3" fill="hsl(var(--primary))" />
            );
          })}
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display font-black text-foreground leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}>
            MIZI
            <br />
            TIKILILI
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground font-body italic max-w-xl mx-auto"
        >
          "La musique au service de vos moments."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="default" onClick={() => scrollTo("contact")}>
            RÉSERVER UNE PRESTATION
          </Button>
          <Button variant="outline" size="default" onClick={() => scrollTo("services")}>
            DÉCOUVRIR NOS SERVICES
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
