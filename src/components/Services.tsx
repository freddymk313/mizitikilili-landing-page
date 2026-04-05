import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    icon: "piano",
    title: "Expérience Piano Solo",
    description: "La pureté acoustique d'un piano à queue pour vos cocktails, dîners de gala et cérémonies intimes. Une signature sonore d'exception.",
    offset: "md:mt-0"
  },
  {
    id: "02",
    icon: "speaker_group",
    title: "Le Parc Instrumental",
    description: "Location de pianos de concert et systèmes de sonorisation haute fidélité. Un équipement premium entretenu par des experts.",
    offset: "md:mt-24" // Décalage pour l'asymétrie
  },
  {
    id: "03",
    icon: "groups",
    title: "Direction Artistique",
    description: "De l'orchestre de chambre au Jazz Band complet, nous composons la formation idéale pour l'identité de votre événement.",
    offset: "md:mt-12" // Décalage moyen
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/50 overflow-hidden">
      <div className="container-tight">

        {/* Header de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-display font-bold text-xs tracking-[0.3em] uppercase">Services de Prestige</span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-display font-black leading-[0.85] text-foreground uppercase tracking-tighter">
              L'EXPERTISE <br />
              <span className="text-stroke">SIGNATURE</span>
            </h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-body max-w-xs md:text-right pb-2"
          >
            Une ingénierie musicale sur-mesure pour sublimer chaque seconde de vos réceptions.
          </motion.p>
        </div>

        {/* Grille de services asymétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group bg-background p-10 md:p-12 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/10 ${service.offset}`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">
                  {service.icon}
                </span>
                <span className="text-secondary/20 font-display font-black text-4xl">
                  {service.id}
                </span>
              </div>

              <h3 className="text-2xl font-display font-black mb-6 leading-tight uppercase tracking-tighter">
                {service.title}
              </h3>

              <p className="text-secondary font-body leading-relaxed mb-10 text-balance">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-primary font-display font-bold text-[10px] tracking-[0.2em] uppercase group/btn">
                <span>DÉCOUVRIR L'OFFRE</span>
                <div className="p-2 rounded-full border border-primary/20 group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;