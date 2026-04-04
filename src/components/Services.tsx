import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Music, Guitar, Mic2 } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Prestation Piano Live",
    description: "Notre fondateur Ziko Piano ou l'un de nos pianistes professionnels se déplace pour animer votre événement. Une expérience musicale live, authentique et mémorable.",
  },
  {
    icon: Guitar,
    title: "Location d'Instruments",
    description: "Accédez à des instruments de musique de qualité professionnelle pour vos événements, studios ou répétitions. Piano, claviers, instruments à cordes et plus encore.",
  },
  {
    icon: Mic2,
    title: "Location d'Instrumentistes",
    description: "Besoin d'un ensemble musical complet ? Nous mettons à votre disposition des instrumentistes professionnels pour tout type de cérémonie ou événement.",
  },
];

const Services = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display font-black text-4xl md:text-6xl text-foreground">
          NOS <span className="text-primary">PRESTATIONS</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl mb-4 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">{service.description}</p>
            <Button variant="outline" size="sm">
              En savoir plus →
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
