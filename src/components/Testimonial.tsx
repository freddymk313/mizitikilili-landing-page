import { motion } from "framer-motion";

const Testimonial = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-primary text-8xl font-display leading-none block mb-6">❝</span>
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug italic">
          "Ziko Piano a transformé notre soirée de gala en un moment inoubliable. Professionnalisme, ponctualité et talent — Mizitikilili dépasse toujours les attentes."
        </blockquote>
        <p className="mt-8 text-muted-foreground font-body">
          — <strong className="text-foreground">Marie-Claire K.</strong>, Directrice Événementielle
        </p>
      </motion.div>
    </div>
  </section>
);

export default Testimonial;
