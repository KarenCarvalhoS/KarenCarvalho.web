import { MessageCircle, Mail, Instagram } from "lucide-react";
import { It } from "./ui.jsx";
import { CONTATO } from "../data/contato.js";
import { waLink } from "../utils/links.js";

const pill = "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors hover:border-t1";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ivory/10 bg-o2/60">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-2">
        <div>
          <p className="font-serif text-xl">Karen <It>Carvalho</It></p>
          <p className="mt-1 text-sm text-mist">{CONTATO.marca}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a className={pill} href={waLink("Olá, Karen!")} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} className="text-t1" />WhatsApp</a>
          <a className={pill} href={`mailto:${CONTATO.email}`}><Mail size={16} className="text-t1" />E-mail</a>
          <a className={pill} href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} className="text-t1" />{CONTATO.instagram}</a>
        </div>
      </div>
    </footer>
  );
}
