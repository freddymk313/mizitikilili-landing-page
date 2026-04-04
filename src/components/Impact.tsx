import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { value: "500+", label: "Événements animés" },
  { value: "10+", label: "Années d'expérience" },
  { value: "50+", label: "Instrumentistes partenaires" },
];

const faqs = [
  {
    q: "Comment réserver une prestation ?",
    a: "Contactez-nous via l'un de nos numéros ou notre formulaire. Nous confirmons la disponibilité et envoyons un devis sous 24h.",
  },
  {
    q: "Que se passe-t-il si Ziko Piano n'est pas disponible ?",
    a: "Nous disposons d'une équipe de musiciens qualifiés prête à vous servir avec le même niveau d'excellence.",
  },
  {
    q: "Quels types d'événements couvrez-vous ?",
    a: "Mariages, galas, conférences, soirées d'entreprise, cérémonies religieuses, événements culturels et plus.",
  },
];

const Impact = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display font-black text-4xl md:text-6xl text-foreground">
          NOTRE <span className="text-primary">IMPACT</span> EN CHIFFRES
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display font-black text-5xl md:text-7xl text-primary">{stat.value}</div>
            <p className="mt-2 text-muted-foreground font-body text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-border pt-12 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-display font-bold text-lg text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default Impact;
