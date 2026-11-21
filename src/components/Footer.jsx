import React from 'react';
import { MessageCircle, Mail, Instagram, Send } from "lucide-react";
import logo from "../assets/brand/logo-horizontal-negativo.svg";
import { CONTATO } from "../data/contato.js";
import { Link } from "react-router-dom";
import { waLink } from "../utils/links.js";
import { LINKS } from "../data/menu.js";

// Ícones sociais pequenos e discretos
const ico = "grid h-8 w-8 place-items-center rounded-full border border-creme/25 text-creme/80 transition-colors hover:border-pessego hover:text-pessego";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-creme/10 bg-musgo text-creme">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto]">
        <div>
          <img src={logo} alt="Karen Carvalho .web" className="h-auto w-44" />
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-pessego">{CONTATO.marca}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end md:text-right">
          {/* Chamada principal do rodapé: leva ao formulário de contato da página inicial */}
          <div>
            <p className="font-serif text-xl leading-snug sm:text-2xl">Não encontrou o serviço digital que você queria?</p>
            <p className="mt-1 text-sm text-creme/80">Me mande uma mensagem ou e-mail contando o que você precisa.</p>
            <Link to="/#diagnostico" className="mt-3 inline-flex items-center gap-2 rounded-full bg-pessego px-5 py-2.5 text-sm font-semibold text-musgo shadow-[0_8px_24px_-10px_rgb(240_165_138/.7)] transition-colors hover:bg-creme">
              <Send size={16} />Enviar mensagem ou e-mail
            </Link>
          </div>

          <div className="flex gap-2">
            <a className={ico} href={waLink("Olá, Karen!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><MessageCircle size={15} /></a>
            <a className={ico} href={`mailto:${CONTATO.email}`} aria-label="E-mail" title="E-mail"><Mail size={15} /></a>
            <a className={ico} href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${CONTATO.instagram}`} title={`Instagram ${CONTATO.instagram}`}><Instagram size={15} /></a>
          </div>
        </div>
      </div>
      <nav aria-label="Páginas do site" className="border-t border-creme/15">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-5 text-sm text-creme/80 sm:px-8">
          {LINKS.map((l) => <Link key={l.to} to={l.to} className="transition-colors hover:text-pessego">{l.label}</Link>)}
        </div>
      </nav>
    </footer>
  );
}
