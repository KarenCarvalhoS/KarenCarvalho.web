import React from 'react';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/brand/logo-horizontal.svg";
import { waLink } from "../utils/links.js";

import { LINKS } from "../data/menu.js";

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const linkCls = ({ isActive }) =>
    `whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors ${isActive ? "bg-t1/15 text-ac-bg" : "text-soft hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-page/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
        <Link to="/" aria-label="Karen Carvalho .web, página inicial">
          {/* largura mínima do manual: 160 px */}
          <img src={logo} alt="Karen Carvalho .web" className="h-auto w-40" />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {LINKS.map((l) => <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkCls}>{l.label}</NavLink>)}
          <a href={waLink("Olá, Karen! Vim pelo seu site e gostaria de conversar.")} target="_blank" rel="noopener noreferrer"
             className="ml-3 whitespace-nowrap rounded-full bg-t1 px-5 py-2 text-sm font-semibold text-on-t1 hover:bg-t2">Falar no WhatsApp</a>
        </nav>

        <button className="p-2 xl:hidden" onClick={() => setAberto(!aberto)} aria-label="Abrir menu">
          {aberto ? <X /> : <Menu />}
        </button>
      </div>

      {aberto && (
        <nav className="flex flex-col gap-1 px-5 pb-4 xl:hidden">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setAberto(false)}
              className={({ isActive }) => `rounded-xl px-4 py-3 ${isActive ? "bg-t1/15 text-ac-bg" : "text-ink"}`}>{l.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
