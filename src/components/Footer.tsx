import { Facebook, Instagram } from "lucide-react";
import { SoundWaveIcon } from "./Navbar";

const Footer = () => (
  <footer className="*border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <SoundWaveIcon />
          <div>
            <span className="font-display font-bold text-foreground">
              MIZITIKILILI
            </span>
            {/* <p className="text-sm text-muted-foreground font-body italic">La musique au service de vos moments.</p> */}
          </div>
        </div>

        <div className="flex gap-6 justify-center font-body text-sm">
          {["Services", "À Propos", "Fondateur", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() =>
                document
                  .getElementById(link.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex gap-2 justify-center md:justify-end">
          <div className="bg-primary rounded-sm p-2">
            <Facebook className="h-[18px] w-[18px] text-white" />
          </div>
          <div className="bg-primary rounded-sm p-2">
            <Instagram className="h-[17px] w-[17px] text-white" />
          </div>
          <div className="bg-primary rounded-sm p-2">
            <Instagram className="h-[17px] w-[17px] text-white" />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground font-body">
        © 2025 Mizitikilili · Tous droits réservés | Concu par{" "}
        <a
          href="https://nordevagency.vercel.app"
          className="text-primary hover:underline"
        >
          Nordev Agency
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
