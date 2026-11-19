import React from 'react';
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
    <Section className="grid gap-14 pt-14 lg:grid-cols-[.8fr_1.2fr]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Portrait className="mx-auto w-[78%] max-w-sm lg:max-w-none" />
      </div>

      <div>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          Oi, eu sou a <It>Karen</It> <Bd>Carvalho</Bd>.
        </h1>

        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-soft">
          <p className="text-xl text-ink">
            Sou desenvolvedora front-end, consultora de tecnologia e apaixonada por transformar ideias em presença digital que funciona de verdade.
          </p>
          <p>
            Minha trajetória não começou direto no código, e hoje vejo que isso é o meu maior diferencial. Sou formada em <Bd>Design de Interiores</Bd> e trabalhei por anos com Visual Merchandising em grandes marcas globais, como Nike e Puma. Na prática, eu pensava na experiência das pessoas dentro de um espaço físico: como organizar cada detalhe para atrair, acolher e guiar o cliente até a decisão de compra.
          </p>
          <p>
            Com o tempo, percebi que o lugar mais importante para qualquer negócio hoje não é só a vitrine física, é a <Bd>vitrine digital</Bd>. Fiz a transição para a tecnologia unindo UX/UI Design e Desenvolvimento Web, e hoje curso graduação em Inteligência Artificial.
          </p>
          <p>
            Na minha consultoria, ajudo empresas, profissionais autônomos e instituições a construírem uma presença online profissional, rápida e sem complicação. Cuido de tudo, desde sites institucionais e landing pages de alta conversão até a manutenção técnica contínua, para você ter tranquilidade e foco total no seu negócio.
          </p>
          <p>
            Também levo a Inteligência Artificial para a prática com palestras e workshops para equipes. Eu traduzo uma tecnologia que parece complexa em ferramentas simples, que economizam tempo e aumentam a produtividade no dia a dia.
          </p>
          <p>
            Fora das telas, sou cofundadora de uma comunidade feminina voltada para encontros criativos e momentos offline, porque acredito que a tecnologia existe para facilitar a nossa vida, e não para substituir o que é humano.
          </p>
          <p className="text-xl text-ink">
            Se você quer tirar o seu projeto do papel ou preparar sua equipe para o futuro digital, vai ser um prazer conversar com você.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-2xl">Fale <It>comigo</It></h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {CANAIS.map(({ icon: Icon, titulo, valor, href }) => (
            <a key={titulo} href={href} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-4 transition-colors hover:border-t1">
              <Icon size={20} className="text-ac" />
              <p className="mt-3 text-sm font-semibold">{titulo}</p>
              <p className="break-all text-xs text-soft">{valor}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
