import React from 'react';
import { Check, MessageCircle, Info, ArrowRight } from "lucide-react";
import { Btn, Bd, It, IconBox, Section } from "../components/ui.jsx";
import { DORES, APRENDE, PACOTES_INTRO, PACOTES, ADICIONAIS_INTRO, ADICIONAIS, PASSOS } from "../data/workshops.js";
import { waLink } from "../utils/links.js";
import Midia from "../components/Midia.jsx";

const Eyebrow = ({ children }) => (
  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">{children}</p>
);

export default function Palestras() {
  const verPacotes = () => document.getElementById("formatos")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* TOPO */}
      <Section className="pt-14">
        <span className="inline-flex rounded-full bg-t1/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">Palestras e workshops de IA</span>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
          Sua equipe já usa IA. Só não está usando <It>direito</It>.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
          Eu ensino o método que transforma o ChatGPT e o Gemini em ajuda de verdade na rotina, com segurança e sem tecniquês.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Btn onClick={verPacotes}>Ver formatos e valores<ArrowRight size={18} /></Btn>
          <Btn variant="secondary" href={waLink("Olá, Karen! Quero levar um treinamento de IA para a minha equipe. Pode me ajudar a escolher o formato?")}><MessageCircle size={18} />Falar no WhatsApp</Btn>
        </div>
      </Section>

      {/* DORES */}
      <Section className="mt-20">
        <Eyebrow>Você se reconhece?</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          A ferramenta está aí. <It>O resultado</It> é que não aparece.
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {DORES.map((d) => (
            <article key={d.titulo} className="glass flex gap-4 rounded-[2rem] p-6 sm:p-7">
              <IconBox icon={d.icon} />
              <div>
                <h3 className="font-serif text-lg leading-snug">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{d.texto}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-hl p-8 text-on-hl sm:p-10">
          <p className="font-serif text-3xl leading-tight sm:text-4xl">O problema não é a ferramenta. <span className="italic text-hl-accent">É o método.</span></p>
          <p className="mt-3 max-w-2xl text-on-hl/85">Nos meus treinamentos, sua equipe aprende a pedir do jeito certo e a aplicar na rotina real do negócio, com linguagem simples e foco em ganhar tempo.</p>
        </div>
      </Section>

      {/* O QUE LEVA */}
      <Section className="mt-20">
        <Eyebrow>O que sua equipe leva</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          Menos tentativa e erro. <It>Mais</It> trabalho <Bd>pronto</Bd>.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {APRENDE.map((a) => (
            <article key={a.titulo} className="glass rounded-[2rem] p-7">
              <IconBox icon={a.icon} />
              <h3 className="mt-5 font-serif text-xl">{a.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{a.texto}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* FORMATOS E VALORES */}
      <Section id="formatos" className="mt-24 scroll-mt-28">
        <Eyebrow>Formatos e valores</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          Escolha o tamanho do <It>treinamento</It>.
        </h2>
        <p className="mt-3 text-soft">{PACOTES_INTRO}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PACOTES.map((p) => {
            const d = p.destaque;
            return (
              <article key={p.id} className={`flex flex-col rounded-[2rem] p-7 sm:p-8 ${d ? "bg-hl text-on-hl" : "glass"}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className={`font-mono text-xs font-semibold uppercase tracking-wider ${d ? "text-hl-accent" : "text-ac"}`}>{p.duracao}</span>
                  {p.selo && <span className="rounded-full bg-hl-accent px-3 py-1 font-mono text-xs font-semibold text-hl">{p.selo}</span>}
                </div>
                <h3 className="mt-3 font-serif text-2xl">{p.nome}</h3>
                <p className={`mt-4 text-sm ${d ? "text-on-hl/75" : "text-soft"}`}>A partir de</p>
                <p className="font-serif text-5xl">{p.preco}</p>
                <p className={`mt-4 text-sm leading-relaxed ${d ? "text-on-hl/90" : "text-soft"}`}>{p.para}</p>
                <p className={`mt-3 font-mono text-xs ${d ? "text-hl-accent" : "text-ac"}`}>{p.formato}</p>

                <ul className="mt-5 space-y-2.5 text-sm">
                  {p.itens.map((i) => (
                    <li key={i} className="flex gap-2.5"><Check size={17} className={`mt-0.5 shrink-0 ${d ? "text-hl-accent" : "text-ac"}`} />{i}</li>
                  ))}
                </ul>
                <p className={`mt-5 flex gap-2 text-xs leading-relaxed ${d ? "text-on-hl/70" : "text-soft"}`}><Info size={15} className="mt-0.5 shrink-0" />{p.nota}</p>

                <div className="mt-auto pt-7">
                  <a href={waLink(p.mensagem)} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${d ? "bg-hl-accent text-hl hover:bg-on-hl" : "bg-t1 text-on-t1 hover:bg-t2"}`}>
                    <MessageCircle size={18} />Pedir proposta
                  </a>
                </div>

                {/* 📌 ESPAÇO DE MÍDIA: preencha `midia` do formato em src/data/workshops.js (PACOTES) */}
                <Midia midia={p.midia} invert={d} className="mt-6" />
              </article>
            );
          })}
        </div>
      </Section>

      {/* ADICIONAIS */}
      <Section className="mt-20">
        <Eyebrow>Precisa de mais?</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          O que faz o orçamento <It>variar</It>.
        </h2>
        <p className="mt-3 max-w-2xl text-soft">{ADICIONAIS_INTRO}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ADICIONAIS.map((a) => (
            <div key={a.titulo} className="rounded-3xl border border-panel bg-panel p-6">
              <div className="flex items-center gap-3">
                <IconBox icon={a.icon} />
                <p className="font-semibold">{a.titulo}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-soft">{a.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* COMO FUNCIONA + CTA */}
      <Section className="mt-20">
        <Eyebrow>Como funciona</Eyebrow>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {PASSOS.map((s) => (
            <div key={s.n} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-t1 font-serif text-lg text-on-t1">{s.n}</span>
              <div>
                <p className="font-serif text-xl">{s.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-soft">{s.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-6 rounded-[2rem] bg-hl p-8 text-on-hl sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-3xl leading-tight">Vamos descobrir onde sua equipe <span className="italic text-hl-accent">perde tempo</span>?</p>
            <p className="mt-2 text-on-hl/80">Me chame no WhatsApp e eu indico o formato ideal e o valor fechado.</p>
          </div>
          <a href={waLink("Olá, Karen! Quero levar um treinamento de IA para a minha equipe. Pode me ajudar a escolher o formato?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-hl-accent px-6 py-3 text-sm font-semibold text-hl transition-colors hover:bg-on-hl">
            <MessageCircle size={18} />Falar no WhatsApp<ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </>
  );
}
