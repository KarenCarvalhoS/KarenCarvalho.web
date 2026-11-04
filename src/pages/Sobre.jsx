import { MessageCircle, Mail, Instagram } from "lucide-react";
import { Bd, It, Section } from "../components/ui.jsx";
import Portrait from "../components/Portrait.jsx";
import { CONTATO } from "../data/contato.js";
import { waLink } from "../utils/links.js";

const CANAIS = [
  { icon: MessageCircle, titulo: "WhatsApp", valor: CONTATO.whatsappExibicao, href: waLink("Olá, Karen! Vim pelo seu site.") },
  { icon: Mail, titulo: "E-mail comercial", valor: CONTATO.email, href: `mailto:${CONTATO.email}` },
  { icon: Instagram, titulo: "Instagram", valor: CONTATO.instagram, href: CONTATO.instagramUrl },
];

export default function Sobre() {
  return (
    <Section className="grid items-center gap-14 pt-14 lg:grid-cols-[.8fr_1.2fr]">
      <Portrait className="mx-auto w-[78%] max-w-sm lg:max-w-none" />
      <div>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Tecnologia complexa, <It>soluções simples</It> e <Bd>lucrativas</Bd>.
        </h1>
        <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-mist">
          <p>Sou Karen Carvalho, consultora de Tecnologia & IA. Trabalho com rigor técnico para encontrar o ponto exato onde um processo manual está custando tempo e dinheiro.</p>
          <p>Minha entrega é prática: automações, páginas de alta conversão, documentação operacional e capacitação de equipes, sempre traduzindo o que é complexo em algo que sua empresa consegue usar amanhã.</p>
        </div>

        <h2 className="mt-10 font-serif text-2xl">Canais <It>oficiais</It></h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {CANAIS.map(({ icon: Icon, titulo, valor, href }) => (
            <a key={titulo} href={href} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-4 transition-colors hover:border-t1">
              <Icon size={20} className="text-t1" />
              <p className="mt-3 text-sm font-semibold">{titulo}</p>
              <p className="break-all text-xs text-mist">{valor}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
