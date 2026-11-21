import React from "react";
import { ExternalLink } from "lucide-react";

/* Prévias visuais simples (HTML/CSS) dos cards da página Sites.
   Com `href`, a prévia vira link (abre em nova aba) com efeito hover. Sem `href`, é só ilustração. */

function Frame({ url, children, href, legenda }) {
  const corpo = (
    <div className={`overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/10 ${href ? "transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl" : ""}`}>
      <div className="flex items-center gap-1.5 bg-neutral-200 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-yellow-400" /><span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="ml-2 truncate rounded bg-white px-2 py-0.5 font-mono text-[9px] text-neutral-500">{url}</span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden">{children}</div>
    </div>
  );
  return (
    <figure className="w-full">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group relative block" aria-label={`Abrir ${url} em nova aba`}>
          {corpo}
          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Ver site ao vivo <ExternalLink size={12} />
          </span>
        </a>
      ) : corpo}
      {legenda && <figcaption className="mt-2 text-xs text-soft">{legenda}</figcaption>}
    </figure>
  );
}

const Bar = ({ w = "w-full", c = "bg-neutral-200", h = "h-1.5" }) => <div className={`${h} ${w} rounded-full ${c}`} />;

// 1. Loja virtual (Ricardo Zanardo)
export function PreviewLoja() {
  const prods = ["#D9C7A8", "#BFA27A", "#8C7B62", "#E8DCC6"];
  return (
    <Frame url="ricardozanardo.com.br" href="https://ricardozanardo.com.br/" legenda="Prévia ilustrativa do projeto Ricardo Zanardo. Clique para ver o site real.">
      <div className="flex h-full flex-col bg-[#FBF8F3] text-neutral-800">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2">
          <span className="font-serif text-xs font-bold tracking-wide">RICARDO ZANARDO</span>
          <span className="flex gap-3 text-[8px] uppercase tracking-wider text-neutral-500"><span>Loja</span><span>Sobre</span><span>Contato</span><span className="rounded-full bg-neutral-800 px-2 py-0.5 text-white">Carrinho (2)</span></span>
        </div>
        <div className="px-4 pt-3"><p className="font-serif text-sm font-bold">Coleção em destaque</p><p className="text-[8px] text-neutral-500">Compre online com checkout seguro</p></div>
        <div className="grid flex-1 grid-cols-4 gap-2 px-4 py-3">
          {prods.map((c, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex-1 rounded-md" style={{ background: c }} />
              <Bar w="w-3/4" c="bg-neutral-300" /><span className="w-fit rounded bg-neutral-800 px-1.5 py-0.5 text-[7px] text-white">Comprar</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

// 2. Redesign (The Black Vision)
export function PreviewBlackVision() {
  return (
    <Frame url="theblackvision.com.br" href="https://www.theblackvision.com.br/" legenda="Prévia ilustrativa do projeto The Black Vision. Clique para ver o site real.">
      <div className="flex h-full flex-col bg-neutral-950 text-white">
        <div className="flex items-center justify-between px-4 py-2">
          <span className="text-[10px] font-bold tracking-[.25em]">THE BLACK VISION</span>
          <span className="flex gap-3 text-[8px] uppercase tracking-wider text-neutral-400"><span>Início</span><span>Projetos</span><span>Contato</span></span>
        </div>
        <div className="relative flex flex-1 flex-col items-start justify-center px-6" style={{ background: "radial-gradient(circle at 80% 40%, #3b3b3b 0, transparent 55%)" }}>
          <p className="text-[8px] uppercase tracking-[.3em] text-neutral-400">Visão. Estilo. Presença.</p>
          <p className="mt-1 font-serif text-xl font-bold leading-tight">Enxergue além<br />do óbvio.</p>
          <span className="mt-3 rounded-full border border-white/70 px-3 py-1 text-[8px] uppercase tracking-wider">Conhecer</span>
          <div className="absolute right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-white/30" />
          <div className="absolute right-10 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white/90" />
        </div>
      </div>
    </Frame>
  );
}

// 3. Site institucional (fictício)
export function PreviewInstitucional() {
  return (
    <Frame url="suaempresa.com.br" legenda="Exemplo ilustrativo de site institucional.">
      <div className="flex h-full flex-col bg-white text-slate-800">
        <div className="flex items-center justify-between bg-[#1E3A5F] px-4 py-2 text-white">
          <span className="text-[10px] font-bold">Sua Empresa</span>
          <span className="flex gap-3 text-[8px]"><span>Início</span><span>Serviços</span><span>Sobre</span><span>Contato</span></span>
        </div>
        <div className="flex flex-1 items-center gap-3 bg-gradient-to-r from-[#EAF1FA] to-white px-4">
          <div className="flex-1"><p className="font-serif text-sm font-bold leading-tight">Soluções que passam confiança</p><Bar w="w-5/6" c="bg-slate-300" /><div className="mt-1" /><Bar w="w-2/3" c="bg-slate-300" /><span className="mt-2 inline-block rounded bg-[#1E3A5F] px-2 py-1 text-[7px] text-white">Fale conosco</span></div>
          <div className="h-16 w-20 rounded-lg bg-[#9DB8D9]" />
        </div>
        <div className="grid grid-cols-3 gap-2 px-4 pb-3">
          {[0, 1, 2].map((i) => <div key={i} className="rounded border border-slate-200 p-1.5"><div className="mb-1 h-3 w-3 rounded-full bg-[#1E3A5F]" /><Bar c="bg-slate-300" /></div>)}
        </div>
      </div>
    </Frame>
  );
}

// 4. Landing page (fictícia)
export function PreviewLanding() {
  return (
    <Frame url="seuproduto.com.br" legenda="Exemplo ilustrativo de landing page.">
      <div className="flex h-full flex-col items-center justify-center gap-1.5 bg-gradient-to-b from-[#2B1055] to-[#7B2FF7] px-6 text-center text-white">
        <p className="text-[8px] uppercase tracking-[.25em] text-fuchsia-200">Vagas limitadas</p>
        <p className="font-serif text-lg font-bold leading-tight">Uma única página,<br />um único objetivo</p>
        <p className="text-[8px] text-white/80">Benefícios claros e um botão para falar com você.</p>
        <span className="mt-1 rounded-full bg-[#FFB400] px-4 py-1.5 text-[9px] font-bold text-neutral-900 shadow-lg">Quero saber mais</span>
        <div className="mt-2 flex gap-2">{["Rápido", "Seguro", "Simples"].map((t) => <span key={t} className="rounded bg-white/15 px-2 py-1 text-[7px]">{t}</span>)}</div>
      </div>
    </Frame>
  );
}
