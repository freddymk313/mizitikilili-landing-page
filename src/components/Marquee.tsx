import { motion } from "framer-motion";

const marqueeItems = [
  "Piano Solo Prestige",
  "Direction Artistique",
  "Location d'Instruments Premium",
  "Événements Corporatifs",
  "Mariages d'Exception",
  "Galas & Cocktails",
  "Concerts Privés",
  "Expertise Acoustique",
];

const MarqueeBand = () => {
  // On triple les items pour garantir un défilement infini sans trou visuel
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative z-20 -mt-4 mb-4">
      {/* Le conteneur avec un léger angle (skew) pour le look "Magazine" 
        On utilise bg-primary (#ae2900) pour un contraste fort 
      */}
      <div className="bg-primary -rotate-1 md:-rotate-1 overflow-hidden py-4 md:py-6 shadow-2xl border-y border-white/10">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {displayItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white font-display font-black text-sm md:text-xl tracking-[0.2em] uppercase mx-8 md:mx-12">
                {item}
              </span>
              {/* Séparateur stylisé (Le Pulse) */}
              <div className="flex gap-1 opacity-40">
                <span className="w-1 h-3 md:h-5 bg-white rounded-full"></span>
                <span className="w-1 h-5 md:h-8 bg-white rounded-full"></span>
                <span className="w-1 h-3 md:h-5 bg-white rounded-full"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBand;