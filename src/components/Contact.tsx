import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase leading-none">
            PRÊT À RÉSERVER ?
          </h2>
          <h3 className="text-primary text-3xl font-headline font-black tracking-tighter mt-4">
            CONTACTEZ-NOUS
          </h3>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Phone */}
          <div className="bg-background p-8 rounded-lg text-center border border-foreground/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">call</span>
            <p className="font-headline font-bold text-lg mb-4 text-foreground">+243 812 000 000</p>
            <button className="w-full py-3 border-2 border-primary text-primary rounded-full font-headline font-black text-xs tracking-widest hover:bg-primary hover:text-white transition-all">
              APPELER MAINTENANT
            </button>
          </div>

          {/* Mail */}
          <div className="bg-background p-8 rounded-lg text-center border border-foreground/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">mail</span>
            <p className="font-headline font-bold text-lg mb-4 text-foreground">contact@mizitikilili.com</p>
            <button className="w-full py-3 border-2 border-primary text-primary rounded-full font-headline font-black text-xs tracking-widest hover:bg-primary hover:text-white transition-all">
              NOUS ÉCRIRE
            </button>
          </div>

          {/* Location */}
          <div className="bg-background p-8 rounded-lg text-center border border-foreground/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
            <p className="font-headline font-bold text-lg mb-4 text-foreground">Gombe, Kinshasa, RDC</p>
            <button className="w-full py-3 border-2 border-primary text-primary rounded-full font-headline font-black text-xs tracking-widest hover:bg-primary hover:text-white transition-all">
              NOUS TROUVER
            </button>
          </div>
        </div>

        {/* Formulaire Editorial */}
        <div className="max-w-4xl mx-auto bg-background p-12 rounded-xl shadow-sm border border-foreground/5">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-headline font-bold uppercase tracking-widest text-secondary">
                Nom Complet
              </label>
              <input 
                className="bg-transparent border-b border-foreground/20 focus:border-primary outline-none px-0 py-3 transition-colors font-body text-foreground" 
                placeholder="Ex: Jean Dupont" 
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-headline font-bold uppercase tracking-widest text-secondary">
                Type d'événement
              </label>
              <input 
                className="bg-transparent border-b border-foreground/20 focus:border-primary outline-none px-0 py-3 transition-colors font-body text-foreground" 
                placeholder="Ex: Mariage" 
                type="text"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-xs font-headline font-bold uppercase tracking-widest text-secondary">
                Message
              </label>
              <textarea 
                className="bg-transparent border-b border-foreground/20 focus:border-primary outline-none px-0 py-3 transition-colors font-body text-foreground resize-none" 
                placeholder="Dites-nous en plus sur vos besoins..." 
                rows={4}
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center mt-8">
              <button className="bg-primary text-white px-12 py-5 rounded-full font-headline font-black uppercase tracking-[0.2em] text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/30">
                ENVOYER MA DEMANDE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;