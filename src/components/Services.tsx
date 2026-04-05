import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "piano",
      title: "Prestation Piano Live",
      description: "Une ambiance feutrée et élégante pour vos dîners, cocktails ou cérémonies privées.",
      delay: ""
    },
    {
      icon: "speaker_group",
      title: "Location d'Instruments",
      description: "Un parc instrumental haut de gamme (Pianos, Sonorisation) prêt pour vos besoins techniques.",
      delay: "md:translate-y-8" // Respect de l'asymétrie du design original
    },
    {
      icon: "groups",
      title: "Location d'Instrumentistes",
      description: "Des musiciens de session et des orchestres complets pour accompagner vos projets artistiques.",
      delay: ""
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header de la section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase">
              NOS SERVICES
            </h2>
            <h3 className="text-primary text-2xl font-headline font-bold tracking-widest mt-2 uppercase">
              PRESTATIONS
            </h3>
          </div>
          <div className="text-secondary max-w-sm font-body">
            Une expertise multi-facettes pour répondre à toutes vos exigences sonores.
          </div>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-background p-10 rounded-3xl hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-background ${service.delay}`}
            >
              <span className="material-symbols-outlined text-primary text-5xl mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </span>

              <h4 className="text-2xl font-headline font-bold mb-4 tracking-tight uppercase">
                {service.title}
              </h4>

              <p className="text-secondary mb-8 flex-grow font-body">
                {service.description}
              </p>

              <button className="text-primary font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform w-fit">
                En savoir plus 
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;