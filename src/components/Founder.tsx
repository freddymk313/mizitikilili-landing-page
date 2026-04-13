import { motion } from "framer-motion";

const Founder = () => (
  <section id="founder" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-black text-4xl md:text-6xl text-foreground text-center mb-16"
      >
        RENCONTREZ LE <span className="text-primary">FONDATEUR</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="font-display font-black text-5xl text-foreground">
            Ziko Piano
          </h3>
          <span className="text-primary font-body capitalize font-semibold text-sm tracking-widest">
            Fondateur & Pianiste Professionnel
          </span>
          <p className="text-muted-foreground font-body leading-relaxed">
            Parmi les plus grands pianistes de la République Démocratique du
            Congo, Ziko Piano a fondé Mizitikilili avec une vision claire :
            rendre la musique professionnelle accessible à tous les événements,
            grandes ou petites occasions.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Avec des années de scène et une passion profonde pour son art, il
            dirige une organisation qui porte haut les valeurs d'excellence, de
            ponctualité et de professionnalisme musical.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="w-full aspect-[4/5] rounded-2xl *border-2 border-primary/30 bg-card flex flex-col items-center justify-center text-muted-foreground font-body">
            {/* <span className="text-5xl mb-4">📷</span>
            <p className="text-sm italic">Photo de Ziko Piano</p>
            <p className="text-xs mt-1">(Image à fournir)</p> */}

            <img
              alt="Portrait of Ziko Piano"
              className="w-full h-[480px] md:h-[700px] object-cover rounded-[45px] grayscale-10 group-hover:grayscale-0 transition-all duration-700"
              src="/IMG_7423.JPG"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Founder;
