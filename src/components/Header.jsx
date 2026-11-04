import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { It } from "./ui.jsx";
import { waLink } from "../utils/links.js";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/consultoria", label: "Consultoria" },
  { to: "/palestras", label: "Workshops" },
  { to: "/sobre", label: "Sobre" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const linkCls = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm transition-colors ${isActive ? "bg-t1/15 text-t1" : "text-mist hover:text-ivory"}`;

  return (
    <header className="sticky top-0 z-30 border-b border-ivory/10 bg-o1/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="font-serif text-lg">Karen <It>Carvalho</It></Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkCls}>{l.label}</NavLink>)}
          <a href={waLink("Olá, Karen! Vim pelo seu site e gostaria de conversar.")} target="_blank" rel="noopener noreferrer"
             className="ml-3 rounded-full bg-t1 px-5 py-2 text-sm font-semibold text-o1 hover:bg-t2">Falar no WhatsApp</a>
        </nav>

        <button className="p-2 md:hidden" onClick={() => setAberto(!aberto)} aria-label="Abrir menu">
          {aberto ? <X /> : <Menu />}
        </button>
      </div>

      {aberto && (
        <nav className="flex flex-col gap-1 px-5 pb-4 md:hidden">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setAberto(false)}
              className={({ isActive }) => `rounded-xl px-4 py-3 ${isActive ? "bg-t1/15 text-t1" : "text-ivory"}`}>{l.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
