import React from "react";
import { Link } from "react-router-dom";
import { Check, MessageCircle, ArrowRight, Puzzle } from "lucide-react";
import { Btn, It, IconBox, Section, Item } from "../components/ui.jsx";
import { PACOTES, PERSONALIZADO, ADICIONAIS_INTRO, ADICIONAIS } from "../data/pacotes.js";
import { waLink } from "../utils/links.js";

const Eyebrow = ({ children }) => (
  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">{children}</p>
);

export default function Pacotes() {
  const verPacotes = () => document.getElementById("pacotes")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ===== TOPO ===== */}
      <Section className="pt-14">
        <span className="inline-flex rounded-full bg-t1/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">Pacotes digitais</span>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
          Tudo o que você precisa para <It>aparecer bem</It>, em um só combo.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
          Os pacotes reúnem soluções completas, de marca, site e redes sociais, com condições especiais para você tirar o projeto do papel com agilidade e sem pagar caro por cada peça separada.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Btn onClick={verPacotes}>Ver os pacotes<ArrowRight size={18} /></Btn>
          <Btn variant="secondary" href={waLink("Olá, Karen! Quero ajuda para escolher o melhor pacote digital para o meu negócio.")}><MessageCircle size={18} />Falar no WhatsApp</Btn>
        </div>
      </Section>

      {/* ===== BLOCO 1: PACOTES PRONTOS ===== */}
      <Section id="pacotes" className="mt-20 scroll-mt-28">
        <Eyebrow>5 pacotes prontos</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          Escolha o pacote <It>que cabe</It> no seu momento.
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-6">
          {PACOTES.map((p, i) => {
            const d = p.destaque;
            return (
              <article key={p.id} className={`flex flex-col rounded-[2rem] p-7 sm:p-8 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${d ? "bg-hl text-on-hl ring-2 ring-hl-accent/60" : "glass"}`}>
                <div className="flex items-start justify-between gap-3">
                  <IconBox icon={p.icon} invert={d} />
                  {p.selo && <span className="rounded-full bg-hl-accent px-3 py-1 font-mono text-xs font-semibold text-hl">{p.selo}</span>}
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-snug">{p.nome}</h3>
                <p className={`mt-1 text-sm ${d ? "text-hl-accent" : "text-ac"}`}>{p.subtitulo}</p>

                <p className={`mt-5 text-sm ${d ? "text-on-hl/75" : "text-soft"}`}>{p.rotulo}</p>
                <p className="font-serif text-5xl">{p.preco}</p>

                <h4 className="mt-6 font-serif text-lg">O que está incluso</h4>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {p.itens.map((it) => (
                    <li key={it} className="flex gap-2.5"><Check size={17} className={`mt-0.5 shrink-0 ${d ? "text-hl-accent" : "text-ac"}`} /><Item texto={it} /></li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <a href={waLink(p.mensagem)} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${d ? "bg-hl-accent text-hl hover:bg-on-hl" : "bg-t1 text-on-t1 hover:bg-t2"}`}>
                    <MessageCircle size={18} />Contratar este pacote
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* ===== BLOCO 2: PACOTE PERSONALIZADO (destaque) ===== */}
      <Section className="mt-20">
        <div className="rounded-[2rem] border-2 border-t1 bg-t1/10 p-8 sm:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <IconBox icon={Puzzle} />
              <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">{PERSONALIZADO.titulo}</h2>
              <p className="mt-4 leading-relaxed text-soft">{PERSONALIZADO.texto}</p>
            </div>
            <div className="shrink-0">
              <Btn href={waLink(PERSONALIZADO.mensagem)}><MessageCircle size={18} />{PERSONALIZADO.botao}</Btn>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== BLOCO 3: ADICIONAIS E COMBOS EXTRAS ===== */}
      <Section className="mt-24">
        <Eyebrow>Adicionais e combos extras</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          Precisa de <It>mais alguma coisa</It>? Some ao seu pacote.
        </h2>
        <p className="mt-3 max-w-2xl text-soft">{ADICIONAIS_INTRO}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADICIONAIS.map((a) => (
            <article key={a.id} className="glass flex flex-col rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <IconBox icon={a.icon} />
                <h3 className="font-serif text-lg leading-snug">{a.titulo}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-soft">{a.texto}</p>
              <p className="mt-4 text-xs text-soft">{a.rotulo}</p>
              <p className="font-serif text-3xl">{a.preco}</p>
              <div className="mt-auto pt-5">
                <Btn href={waLink(a.mensagem)}><MessageCircle size={18} />Quero este extra</Btn>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-6 rounded-[2rem] bg-hl p-8 text-on-hl sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-3xl leading-tight">Ficou em dúvida sobre <span className="italic text-hl-accent">qual escolher</span>?</p>
            <p className="mt-2 text-on-hl/80">Me chame no WhatsApp e eu indico o melhor caminho para o seu negócio.</p>
          </div>
          <a href={waLink("Olá, Karen! Quero ajuda para escolher o melhor pacote digital para o meu negócio.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-hl-accent px-6 py-3 text-sm font-semibold text-hl transition-colors hover:bg-on-hl">
            <MessageCircle size={18} />Falar no WhatsApp<ArrowRight size={16} />
          </a>
        </div>
        <p className="mt-6 text-center text-sm text-soft">Quer só a marca? Conheça a <Link to="/identidade-visual" className="font-semibold text-ac underline underline-offset-4 hover:text-t2">Identidade Visual completa</Link>.</p>
      </Section>
    </>
  );
}
