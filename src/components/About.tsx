import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="section-padding bg-background overflow-hidden">
    <div className="container-tight">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-16 items-start">

        {/* COLONNE GAUCHE : LE TITRE MASSARRE */}
        <motion.div 
          className="md:col-span-7 lg:col-span-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-display font-black text-4xl">01</span>
            <div className="h-[2px] w-12 bg-primary/20"></div>
            <span className="text-secondary font-bold tracking-[0.2em] text-[10px] uppercase">Le Manifeste</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] text-foreground uppercase tracking-tighter">
            L'ART DE <br />
            <span className="text-stroke">L'INSTANT</span> <br />
            PUR.
          </h2>
        </motion.div>

        {/* COLONNE DROITE : LE TEXTE ÉDITORIAL */}
        <motion.div 
          className="md:col-span-5 lg:col-span-5 lg:col-start-8 mt-4 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-snug italic border-l-4 border-primary pl-6">
              "Mizitikilili n'est pas une agence musicale. C'est un conservatoire de l'émotion dédié à vos moments d'exception."
            </p>

            <div className="space-y-6 text-secondary font-body leading-relaxed text-lg">
              <p>
                Fondée par le Maestro Ziko Piano, notre organisation redéfinit les standards de l'excellence acoustique en République Démocratique du Congo. Nous croyons que chaque événement possède sa propre partition, son propre rythme.
              </p>
              <p>
                Qu'il s'agisse d'un gala diplomatique, d'un mariage intime ou d'une conférence de haut vol, nous déployons un arsenal musical — du piano solo aux orchestres complets — avec une rigueur et une ponctualité qui font notre signature.
              </p>
              <p className="font-bold text-foreground">
                Si l'excellence est une quête, Mizitikilili en est la destination.
              </p>
            </div>

            {/* Signature stylisée (Invisible sur petit mobile pour gagner de la place) */}
            <div className="pt-8 hidden sm:block">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-primary/20 rounded-full" 
                    style={{ height: `${10 + i * 5}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;