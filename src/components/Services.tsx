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
    <section className="py-24 bg-surface-container-low px-8">
    <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
    <div>
    <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter">NOS SERVICES</h2>
    <h3 className="text-primary text-2xl font-headline font-bold tracking-widest mt-2 uppercase">PRESTATIONS</h3>
    </div>
    <div className="text-secondary max-w-sm">
                            Une expertise multi-facettes pour répondre à toutes vos exigences sonores.
                        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* <!-- Service 1 --> */}
    <div className="group bg-surface p-10 rounded-lg hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-outline-variant/10">
    <span className="material-symbols-outlined text-primary text-5xl mb-8 group-hover:scale-110 transition-transform">piano</span>
    <h4 className="text-2xl font-headline font-bold mb-4">Prestation Piano Live</h4>
    <p className="text-secondary mb-8 flex-grow">Une ambiance feutrée et élégante pour vos dîners, cocktails ou cérémonies privées.</p>
    <button className="text-primary font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                En savoir plus <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </button>
    </div>
    {/* <!-- Service 2 --> */}
    <div className="group bg-surface p-10 rounded-lg hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-outline-variant/10 translate-y-0 md:translate-y-8">
    <span className="material-symbols-outlined text-primary text-5xl mb-8 group-hover:scale-110 transition-transform">speaker_group</span>
    <h4 className="text-2xl font-headline font-bold mb-4">Location d'Instruments</h4>
    <p className="text-secondary mb-8 flex-grow">Un parc instrumental haut de gamme (Pianos, Sonorisation) prêt pour vos besoins techniques.</p>
    <button className="text-primary font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                En savoir plus <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </button>
    </div>
    {/* <!-- Service 3 --> */}
    <div className="group bg-surface p-10 rounded-lg hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-outline-variant/10">
    <span className="material-symbols-outlined text-primary text-5xl mb-8 group-hover:scale-110 transition-transform">groups</span>
    <h4 className="text-2xl font-headline font-bold mb-4">Location d'Instrumentistes</h4>
    <p className="text-secondary mb-8 flex-grow">Des musiciens de session et des orchestres complets pour accompagner vos projets artistiques.</p>
    <button className="text-primary font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                En savoir plus <span className="material-symbols-outlined text-lg">arrow_forward</span>
    </button>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Services;