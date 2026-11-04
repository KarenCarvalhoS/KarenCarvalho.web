import { Link } from "react-router-dom";

// Palavra em itálico terracota
export const It = ({ children }) => <em className="font-medium italic text-t1">{children}</em>;
// Palavra em negrito marcante
export const Bd = ({ children }) => <strong className="font-extrabold text-ivory">{children}</strong>;

export const Section = ({ children, className = "", id }) => (
  <section id={id} className={`mx-auto max-w-6xl px-5 sm:px-8 ${className}`}>{children}</section>
);

// Botão. Use `to` (página interna), `href` (link externo) ou `onClick`.
export function Btn({ to, href, onClick, variant = "primary", children }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-t1";
  const styles = variant === "primary"
    ? "bg-t1 text-o1 hover:bg-t2 shadow-[0_8px_30px_-8px_rgba(217,107,67,.7)]"
    : "border border-olive bg-olive/40 text-ivory hover:bg-olive/70";
  const cls = `${base} ${styles}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}

// Caixinha de ícone terracota usada nos cards
export const IconBox = ({ icon: Icon }) => (
  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-t1/15 text-t1"><Icon size={22} /></span>
);
