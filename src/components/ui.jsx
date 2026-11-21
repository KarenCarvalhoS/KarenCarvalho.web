import React from 'react';
import { Link } from "react-router-dom";

// Palavra em itálico terracota
export const It = ({ children }) => <em className="font-medium italic text-ac">{children}</em>;
// Palavra em negrito marcante
export const Bd = ({ children }) => <strong className="font-extrabold text-ink">{children}</strong>;

export const Section = ({ children, className = "", id }) => (
  <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>{children}</section>
);

// Botão. Use `to` (página interna), `href` (link externo) ou `onClick`.
export function Btn({ to, href, onClick, variant = "primary", children }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-t1";
  const styles = variant === "primary"
    ? "bg-t1 text-on-t1 hover:bg-t2 shadow-[0_8px_24px_-10px_rgb(var(--t1)/.6)]"
    : "border border-sec text-sec hover:bg-sec hover:text-page";
  const cls = `${base} ${styles}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}

// Caixinha de ícone terracota usada nos cards
// `invert` = use dentro de cards escuros/destacados.
export const IconBox = ({ icon: Icon, invert = false }) => (
  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${invert ? "bg-hl-accent/20 text-hl-accent" : "bg-t1/15 text-ac-bg"}`}><Icon size={22} /></span>
);

// Item de lista didático: "Nome | explicação prática" (nome em negrito, explicação logo depois)
export const Item = ({ texto }) => {
  const [t, d] = texto.split(" | ");
  return <span>{d ? <><strong className="font-semibold">{t}:</strong> <span className="text-soft">{d}</span></> : t}</span>;
};
