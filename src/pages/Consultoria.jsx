import React from 'react';
import { Link } from "react-router-dom";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { Btn, Bd, It, IconBox, Section } from "../components/ui.jsx";
import { SERVICOS } from "../data/servicos.js";
import { waLink } from "../utils/links.js";

export default function Consultoria() {
  return (
    <Section className="pt-14">
      <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
        Qual tarefa está <It>roubando horas</It> da sua equipe? Eu <Bd>resolvo</Bd>.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-soft">Veja o problema que cada serviço resolve, o valor de partida e peça o orçamento pelo WhatsApp, já com a mensagem pronta.</p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICOS.map((s) => {
          const mensagem = `Olá, Karen! Tenho interesse no serviço "${s.titulo}" (${s.preco}${s.extra ? " | " + s.extra : ""}). Pode me passar mais detalhes e um orçamento?`;
          return (
            <article key={s.titulo} className="glass flex flex-col rounded-[2rem] p-7">
              <div className="flex items-center justify-between">
                <IconBox icon={s.icon} />
                <span className="rounded-full bg-t1/10 px-3 py-1 font-mono text-xs font-semibold text-ac">{s.tag}</span>
              </div>
              <h3 className="mt-5 font-serif text-xl leading-snug">{s.titulo}</h3>
              <p className="mt-2 text-sm italic leading-relaxed text-ac">{s.dor}</p>
              <ul className="mt-4 space-y-2 text-sm text-soft">
                {s.itens.map((i) => (
                  <li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-ac" />{i}</li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="font-serif text-2xl">{s.preco}</p>
                {s.extra && <p className="mt-1 text-xs text-soft">{s.extra}</p>}
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Btn href={waLink(mensagem)}><MessageCircle size={18} />Solicitar via WhatsApp</Btn>
                  {s.detalhes && <Link to={s.detalhes} className="inline-flex items-center gap-1 text-sm font-semibold text-ac hover:text-t2">Valores e o que está incluso<ArrowRight size={15} /></Link>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
