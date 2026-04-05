import { SoundWaveIcon } from "./Navbar";

const Footer = () => (
  <footer className="*border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-2">
          <SoundWaveIcon />
          <div>
            <span className="font-display font-bold text-foreground">MIZITIKILILI</span>
            {/* <p className="text-sm text-muted-foreground font-body italic">La musique au service de vos moments.</p> */}
          </div>
        </div>

        <div className="flex gap-6 justify-center font-body text-sm">
          {["Services", "Fondateur", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex gap-4 justify-end">
          {["Facebook", "Instagram", "WhatsApp"].map((social) => (
            <a key={social} href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">
              {social}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground font-body">
        © 2025 Mizitikilili · Tous droits réservés | Concu par <a href="https://nordevagency.vercel.app" className="text-primary hover:underline">Nordev Agency</a>
      </div>
    </div>
  </footer>
);

export default Footer;
