import React from "react";
import { Link } from "react-router-dom";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { Btn, Bd, It, IconBox, Section, Item } from "../components/ui.jsx";
import { ExPrincipal, ExPapelaria, ExYoutube, ExInstagram } from "../components/IdentPreviews.jsx";
import Midia from "../components/Midia.jsx";
import { HERO, PRINCIPAL, DESTAQUE, PROCESSO_TITULO, PROCESSO, PROCESSO_MIDIA, KITS, CROSSSELL } from "../data/identidade.js";
import { waLink } from "../utils/links.js";

const EXEMPLOS = { papelaria: <ExPapelaria />, youtube: <ExYoutube />, instagram: <ExInstagram /> };

const Eyebrow = ({ children }) => (
  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">{children}</p>
);

export default function Identidade() {
  const verPrincipal = () => document.getElementById("principal")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ===== TOPO ===== */}
      <Section className="grid items-center gap-10 pt-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="inline-flex rounded-full bg-t1/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">Identidade visual</span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Seu negócio é sério. <It>Sua marca</It> já mostra isso?
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
            Quem vê a sua marca decide em segundos se confia em você. Eu crio uma identidade visual profissional e entrego um Manual da Marca para você aparecer do jeito certo em todo lugar: site, Instagram, proposta e cartão.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn onClick={verPrincipal}>Ver o que está incluso<ArrowRight size={18} /></Btn>
            <Btn variant="secondary" href={waLink("Olá, Karen! Quero criar a identidade visual da minha marca. Pode me ajudar?")}><MessageCircle size={18} />Falar no WhatsApp</Btn>
          </div>
        </div>

        {/* 📌 ESPAÇO DE MÍDIA: preencha `HERO.midia` em src/data/identidade.js */}
        <Midia midia={HERO.midia} />
      </Section>

      {/* ===== BLOCO PRINCIPAL ===== */}
      <Section id="principal" className="mt-24 scroll-mt-28">
        <Eyebrow>O pacote principal</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">{PRINCIPAL.titulo}</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
          <div className="glass rounded-[2rem] p-7 sm:p-9">
            <h3 className="font-serif text-xl">O que está incluso (e para que serve)</h3>
            <ul className="mt-5 space-y-5">
              {PRINCIPAL.incluso.map((i) => (
                <li key={i.titulo} className="flex gap-4">
                  <IconBox icon={i.icon} />
                  <div>
                    <p className="font-semibold">{i.titulo}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-soft">{i.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-[2rem] bg-hl p-7 text-on-hl sm:p-9">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-hl-accent">Investimento</p>
            <p className="mt-3 text-sm text-on-hl/75">A partir de</p>
            <p className="font-serif text-6xl">{PRINCIPAL.preco}</p>
            <p className="mt-3 text-sm leading-relaxed text-on-hl/85">Identidade completa e Manual da Marca, tudo em um só projeto.</p>
            <a href={waLink(PRINCIPAL.mensagem)} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-hl-accent px-6 py-3 text-sm font-semibold text-hl transition-colors hover:bg-on-hl">
              <MessageCircle size={18} />Quero minha identidade visual
            </a>

            <div className="mt-auto pt-7"><ExPrincipal /></div>
          </div>
        </div>
      </Section>

      {/* ===== MÍDIA EM DESTAQUE: MANUAL DA MARCA ===== */}
      <Section className="mt-24">
        <Eyebrow>Manual da Marca</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">{DESTAQUE.titulo}</h2>
        {/* 📌 ESPAÇO DE MÍDIA EM DESTAQUE: coloque a gravação de tela em `DESTAQUE.midia` (src/data/identidade.js) */}
        <Midia midia={DESTAQUE.midia} className="mx-auto mt-8 max-w-4xl [&_figcaption]:mt-3 [&_figcaption]:text-center [&_figcaption]:text-sm" />
      </Section>

      {/* ===== PROCESSO ===== */}
      <Section className="mt-24 grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <Eyebrow>Processo de criação</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{PROCESSO_TITULO}</h2>
          <ol className="mt-8 space-y-6">
            {PROCESSO.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-t1 font-serif text-lg text-on-t1">{s.n}</span>
                <div>
                  <p className="font-serif text-xl">{s.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{s.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        {/* 📌 ESPAÇO DE MÍDIA: preencha `PROCESSO_MIDIA` em src/data/identidade.js */}
        <Midia midia={PROCESSO_MIDIA} />
      </Section>

      {/* ===== KITS COMPLEMENTARES ===== */}
      <Section className="mt-24">
        <Eyebrow>Kits complementares de marca</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          Sua marca <It>em todos os lugares</It> onde o cliente te encontra.
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {KITS.map((k) => (
            <article key={k.id} className="glass flex flex-col rounded-[2rem] p-7">
              <IconBox icon={k.icon} />
              <h3 className="mt-5 font-serif text-xl leading-snug">{k.titulo}</h3>
              <p className="mt-4 text-sm text-soft">{k.rotulo}</p>
              <p className="font-serif text-4xl">{k.preco}</p>
              {k.descricao && <p className="mt-3 text-sm text-soft">{k.descricao}</p>}
              <ul className="mt-4 space-y-2 text-sm">
                {k.itens.map((i) => (
                  <li key={i} className="flex gap-2.5"><Check size={17} className="mt-0.5 shrink-0 text-ac" /><Item texto={i} /></li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Btn href={waLink(k.mensagem)}><MessageCircle size={18} />Quero este kit</Btn>
              </div>
              <div className="mt-6">{EXEMPLOS[k.id]}</div>
            </article>
          ))}
        </div>
      </Section>

      {/* ===== CROSS-SELL: PACOTES DIGITAIS ===== */}
      <Section className="mt-24">
        <div className="flex flex-col justify-between gap-6 rounded-[2rem] bg-hl p-8 text-on-hl sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-3xl leading-tight">{CROSSSELL.titulo}</p>
            <p className="mt-2 max-w-xl text-on-hl/80">{CROSSSELL.texto}</p>
          </div>
          <Link to="/pacotes-digitais"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-hl-accent px-6 py-3 text-sm font-semibold text-hl transition-colors hover:bg-on-hl">
            Conhecer os Pacotes Digitais<ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
