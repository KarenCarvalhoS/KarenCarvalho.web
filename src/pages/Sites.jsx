import React from 'react';
import { Check, X, MessageCircle, ArrowRight, Info } from "lucide-react";
import { Btn, Bd, It, IconBox, Section, Item } from "../components/ui.jsx";
import {
  RESUMO, PRODUTOS, MANUT_INTRO, MANUT_CONTRATO, MANUT_PLANOS, MANUT_INCLUSO_TITULO, MANUT_INCLUSO,
  MANUT_NAO_INCLUSO, MANUT_NAO_NOTA, AVULSA, EXTERNOS_INTRO, EXTERNOS, PAGAMENTO_INTRO, PAGAMENTOS,
} from "../data/sites.js";
import { waLink } from "../utils/links.js";
import { PreviewLoja, PreviewBlackVision, PreviewInstitucional, PreviewLanding } from "../components/Previews.jsx";

const PREVIEWS = { loja: PreviewLoja, blackvision: PreviewBlackVision, institucional: PreviewInstitucional, landing: PreviewLanding };

const MENU = [
  ["#sites", "Sites e páginas"],
  ["#manutencao", "Manutenção"],
  ["#externos", "Custos externos"],
  ["#pagamento", "Pagamento"],
];

const Eyebrow = ({ children }) => (
  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">{children}</p>
);

export default function Sites() {
  return (
    <>
      {/* TOPO */}
      <Section className="pt-14">
        <span className="inline-flex rounded-full bg-t1/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">Valores, prazos e o que está incluso</span>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.1] sm:text-5xl">
          Quanto custa ter um site que <It>traz cliente</It>? Aqui está, <Bd>sem rodeio</Bd>.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
          Valor, prazo, o que entra e o que não entra no pacote. Tudo aqui, para você decidir sem precisar perguntar e sem surpresa depois.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {RESUMO.map((r) => (
            <div key={r.rotulo} className={`glass rounded-3xl p-5 ${r.destaque ? "col-span-2 ring-2 ring-t1/60" : ""}`}>
              <p className="font-mono text-xs uppercase tracking-wider text-soft">{r.rotulo}</p>
              <p className="mt-2 font-serif text-3xl">{r.valor}</p>
              <p className="mt-1 text-xs text-soft">{r.nota}</p>
            </div>
          ))}
        </div>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Seções da página">
          {MENU.map(([href, label]) => (
            <a key={href} href={href} className="rounded-full border border-ink/20 px-4 py-2 text-sm text-soft transition-colors hover:border-t1 hover:text-ac-bg">{label}</a>
          ))}
        </nav>
      </Section>

      {/* SITE E LANDING */}
      <Section id="sites" className="mt-20 scroll-mt-28">
        <div className="grid gap-6 lg:grid-cols-2">
          {PRODUTOS.map((p) => {
            const Prev = PREVIEWS[p.preview];
            return (
              <article key={p.id} className={`glass flex flex-col rounded-[2rem] p-7 sm:p-9 ${p.destaque ? "ring-2 ring-t1/60 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <IconBox icon={p.icon} />
                    {p.selo && <span className="rounded-full bg-t1 px-3 py-1 font-mono text-xs font-semibold text-on-t1">{p.selo}</span>}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl leading-snug">{p.titulo}</h3>
                  <p className="mt-5 text-sm text-soft">Investimento a partir de</p>
                  <p className="font-serif text-5xl">{p.preco}</p>
                  <p className="mt-4 leading-relaxed text-soft">{p.descricao}</p>

                  <h4 className="mt-6 font-serif text-lg">O que está incluso no valor inicial</h4>
                  <ul className="mt-3 space-y-2.5 text-sm">
                    {p.itens.map((i) => (
                      <li key={i} className="flex gap-2.5"><Check size={17} className="mt-0.5 shrink-0 text-ac" /><Item texto={i} /></li>
                    ))}
                  </ul>

                  {p.prazo && (
                    <div className="mt-6 rounded-2xl bg-panel p-4 text-sm">
                      <p><span className="font-semibold">Prazo de entrega:</span> {p.prazo} {p.prazoNota}</p>
                    </div>
                  )}
                  {p.nota && <p className="mt-4 flex gap-2 text-xs leading-relaxed text-soft"><Info size={15} className="mt-0.5 shrink-0" />{p.nota}</p>}

                  <div className="mt-auto pt-7">
                    <Btn href={waLink(p.mensagem)}><MessageCircle size={18} />Solicitar orçamento</Btn>
                  </div>
                </div>

                {/* Prévia visual (apenas nos 4 serviços principais) */}
                {Prev && <div className={`mt-6 ${p.destaque ? "lg:mt-0 lg:self-center" : ""}`}><Prev /></div>}
              </article>
            );
          })}
        </div>
      </Section>

      {/* MANUTENÇÃO */}
      <Section id="manutencao" className="mt-24 scroll-mt-28">
        <Eyebrow>Manutenção mensal</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          Site parado é cliente perdido. Mantenha o seu <It>sempre no ar</It>.
        </h2>
        <p className="mt-3 max-w-2xl text-soft">{MANUT_INTRO} <strong className="font-semibold text-ink">{MANUT_CONTRATO}</strong></p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {MANUT_PLANOS.map((pl) => (
            <article key={pl.nome} className={`flex flex-col rounded-[2rem] p-7 sm:p-9 ${pl.destaque ? "bg-hl text-on-hl ring-2 ring-hl-accent/50" : "glass"}`}>
              <p className={`font-mono text-xs font-semibold uppercase tracking-wider ${pl.destaque ? "text-hl-accent" : "text-ac"}`}>{pl.sub}</p>
              <h3 className="mt-2 font-serif text-2xl">{pl.nome}</h3>
              <p className={`mt-5 text-sm ${pl.destaque ? "text-on-hl/75" : "text-soft"}`}>A partir de</p>
              <p className="font-serif text-5xl">{pl.preco}<span className={`text-lg ${pl.destaque ? "text-on-hl/75" : "text-soft"}`}>/mês</span></p>
              <p className={`mt-4 leading-relaxed ${pl.destaque ? "text-on-hl/90" : "text-soft"}`}>{pl.texto}</p>
              {pl.nota && <p className="mt-3 text-xs text-on-hl/70">{pl.nota}</p>}
              <div className="mt-auto pt-7">
                <a href={waLink(pl.mensagem)} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${pl.destaque ? "bg-hl-accent text-hl hover:bg-on-hl" : "bg-t1 text-on-t1 hover:bg-t2"}`}>
                  <MessageCircle size={18} />Contratar este plano
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* INCLUSO */}
        <h3 className="mt-14 font-serif text-2xl">{MANUT_INCLUSO_TITULO}</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MANUT_INCLUSO.map((m) => (
            <div key={m.titulo} className="glass flex gap-4 rounded-3xl p-5">
              <IconBox icon={m.icon} />
              <div>
                <p className="font-semibold">{m.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-soft">{m.texto}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NÃO INCLUSO */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[2rem] border border-panel bg-panel p-7 sm:p-9">
            <h3 className="font-serif text-2xl">O que <It>não</It> entra na manutenção</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {MANUT_NAO_INCLUSO.map((i) => (
                <li key={i} className="flex gap-2.5"><X size={17} className="mt-0.5 shrink-0 text-ac" /><Item texto={i} /></li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-soft">{MANUT_NAO_NOTA}</p>
          </div>
          <div className="glass flex flex-col rounded-[2rem] p-7 sm:p-9">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ac">Sem plano mensal</p>
            <h3 className="mt-2 font-serif text-xl leading-snug">{AVULSA.titulo}</h3>
            <p className="mt-4 text-sm text-soft">A partir de</p>
            <p className="font-serif text-4xl">{AVULSA.preco}<span className="text-base text-soft"> por solicitação</span></p>
            <p className="mt-3 text-sm leading-relaxed text-soft">Ajustes simples de texto ou troca de imagem. Alterações maiores são orçadas conforme o tempo técnico.</p>
          </div>
        </div>
      </Section>

      {/* CUSTOS EXTERNOS */}
      <Section id="externos" className="mt-24 scroll-mt-28">
        <Eyebrow>Fora do pacote</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          O que fica fora do pacote: <It>o site é seu</It>, no seu nome.
        </h2>
        <p className="mt-3 max-w-2xl text-soft">{EXTERNOS_INTRO}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {EXTERNOS.map((e) => (
            <article key={e.titulo} className="glass flex flex-col rounded-[2rem] p-7">
              <IconBox icon={e.icon} />
              <h3 className="mt-5 font-serif text-xl">{e.titulo}</h3>
              <p className="mt-1 text-xs text-soft">{e.exemplo}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-soft">Incluso no pacote?</p>
              <p className="font-semibold">{e.incluso}</p>
              <p className="mt-2 text-sm leading-relaxed text-soft">{e.quem}</p>
              <div className="mt-auto pt-5">
                <p className="font-mono text-xs uppercase tracking-wider text-soft">Valor aproximado</p>
                <p className="mt-1 font-semibold text-ac">{e.valor}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* PAGAMENTO */}
      <Section id="pagamento" className="mt-24 scroll-mt-28">
        <Eyebrow>Formas de pagamento</Eyebrow>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          Como pagar: escolha o jeito que <It>cabe</It> no seu caixa.
        </h2>
        <p className="mt-3 max-w-2xl text-soft">{PAGAMENTO_INTRO}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PAGAMENTOS.map((p) => (
            <article key={p.titulo} className="glass rounded-[2rem] p-7">
              <IconBox icon={p.icon} />
              <h3 className="mt-5 font-serif text-xl">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{p.texto}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-6 rounded-[2rem] bg-hl p-8 text-on-hl sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-3xl leading-tight">Ficou alguma <span className="italic text-hl-accent">dúvida</span> sobre valores?</p>
            <p className="mt-2 text-on-hl/80">Me chame no WhatsApp e eu respondo com um orçamento fechado para o seu projeto.</p>
          </div>
          <a href={waLink("Olá, Karen! Vi os valores de sites e landing pages e gostaria de um orçamento.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-hl-accent px-6 py-3 text-sm font-semibold text-hl transition-colors hover:bg-on-hl">
            <MessageCircle size={18} />Pedir orçamento<ArrowRight size={16} />
          </a>
        </div>
      </Section>
    </>
  );
}
