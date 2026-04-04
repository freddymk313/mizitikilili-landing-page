import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            Nous mettons la musique au cœur de chaque événement
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed font-body">
            Mizitikilili est une organisation musicale professionnelle spécialisée dans la prestation de services musicaux en direct, la location d'instruments de qualité et la mise à disposition d'instrumentistes professionnels. Que ce soit pour un mariage, un gala d'entreprise, une cérémonie ou un événement culturel — nous apportons l'excellence musicale là où vous en avez besoin.
          </p>
          <p className="text-muted-foreground leading-relaxed font-body">
            Si notre fondateur n'est pas disponible, notre équipe de musiciens qualifiés prend le relais pour garantir la même qualité d'expérience.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
