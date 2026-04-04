import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

const phones = [
  { label: "Contact Principal", number: "+243 XXX XXX XXX" },
  { label: "Réservations & Devis", number: "+243 XXX XXX XXX" },
  { label: "Informations Générales", number: "+243 XXX XXX XXX" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", event: "", message: "" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl text-foreground">
            PRÊT À RÉSERVER ? <span className="text-primary">CONTACTEZ-NOUS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {phones.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground font-body mb-1">{p.label}</p>
              <p className="font-display font-bold text-lg text-foreground mb-4">{p.number}</p>
              <Button size="sm">Appeler maintenant</Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <Input
            placeholder="Votre nom"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-full px-6 h-12 font-body"
          />
          <Input
            placeholder="Type d'événement"
            value={form.event}
            onChange={(e) => setForm({ ...form, event: e.target.value })}
            className="rounded-full px-6 h-12 font-body"
          />
          <Textarea
            placeholder="Votre message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="rounded-2xl px-6 py-4 min-h-[120px] font-body"
          />
          <div className="text-center pt-4">
            <Button size="lg">ENVOYER MA DEMANDE</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
