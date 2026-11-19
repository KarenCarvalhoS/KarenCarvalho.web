import React from 'react';
import { MessageCircle, Mail, Instagram } from "lucide-react";
import logo from "../assets/brand/logo-horizontal-negativo.svg";
import { CONTATO } from "../data/contato.js";
import { waLink } from "../utils/links.js";

const pill = "inline-flex items-center gap-2 rounded-full border border-creme/25 px-4 py-2 text-sm transition-colors hover:border-pessego hover:text-pessego";

export default function Footer() {
  return (
    <footer className="mt-24 bg-musgo text-creme">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-2">
        <div>
          <img src={logo} alt="Karen Carvalho .web" className="h-auto w-44" />
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-pessego">{CONTATO.marca}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a className={pill} href={waLink("Olá, Karen!")} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} className="text-pessego" />WhatsApp</a>
          <a className={pill} href={`mailto:${CONTATO.email}`}><Mail size={16} className="text-pessego" />E-mail</a>
          <a className={pill} href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} className="text-pessego" />{CONTATO.instagram}</a>
        </div>
      </div>
    </footer>
  );
}
