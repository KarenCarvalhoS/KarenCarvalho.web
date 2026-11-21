import React from "react";
import { Image as ImageIcon, Play } from "lucide-react";

/* =====================================================================================
   ESPAÇO DE MÍDIA (prévia em imagem ou vídeo)

   Aparece em todos os cards de serviço e pacote. Enquanto o campo `src` estiver vazio,
   mostra um espaço reservado elegante. Para trocar pelo seu arquivo, é só preencher
   o objeto `midia` do item, no arquivo de dados da página (src/data/...):

     midia: {
       src: "/midia/site-institucional.mp4",   // arquivo em public/midia/  OU  link do YouTube/Vimeo
       legenda: "Exemplo de site institucional", // opcional
       poster: "/midia/capa.jpg",              // opcional, capa do vídeo
       ratio: "16/9",                          // "16/9" ou "4/3"
       autoplay: false,                        // true = vídeo toca sozinho, mudo e em loop
       alt: "Descrição da imagem",             // opcional, para acessibilidade
     }

   O tipo é detectado sozinho: .mp4/.webm = vídeo, YouTube/Vimeo = embed, o resto = imagem.
   ===================================================================================== */

const detectarTipo = (src) => {
  if (/youtube\.com|youtu\.be|vimeo\.com/i.test(src)) return "embed";
  if (/\.(mp4|webm|mov|m4v|ogv)(\?.*)?$/i.test(src)) return "video";
  return "imagem";
};

// Aceita o link normal do YouTube/Vimeo e converte para o formato de incorporação.
const paraEmbed = (url) => {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/i);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
  return url;
};

// `invert` = use dentro de cards escuros/destacados (fundo verde musgo).
export default function Midia({ midia = {}, invert = false, className = "" }) {
  const { src = "", tipo, poster, legenda, ratio = "16/9", alt = "", autoplay = false } = midia;
  const t = tipo || (src ? detectarTipo(src) : "");
  const cor = invert ? "on-hl" : "ink";

  return (
    <figure className={className}>
      <div
        className={`relative w-full overflow-hidden rounded-2xl ring-1 ${invert ? "bg-on-hl/10 ring-on-hl/25" : "bg-panel/60 ring-ink/15"}`}
        style={{ aspectRatio: ratio.replace("/", " / ") }}
      >
        {!src && (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `repeating-linear-gradient(135deg, transparent 0 10px, rgb(var(--${cor}) / .05) 10px 20px)` }}
          >
            <div className={`absolute inset-2 flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed px-4 text-center ${invert ? "border-on-hl/35 text-on-hl/80" : "border-ink/30 text-soft"}`}>
              <span className="flex items-center gap-1.5 opacity-80"><ImageIcon size={18} /><Play size={16} /></span>
              <span className="text-xs leading-snug sm:text-sm">Espaço reservado para prévia em imagem ou vídeo do projeto</span>
              <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">{ratio.replace("/", ":")}</span>
            </div>
          </div>
        )}

        {src && t === "imagem" && (
          <img src={src} alt={alt || legenda || ""} loading="lazy" className="h-full w-full object-cover" />
        )}
        {src && t === "video" && (
          <video
            className="h-full w-full object-cover"
            src={src} poster={poster} controls playsInline preload="metadata"
            {...(autoplay ? { autoPlay: true, muted: true, loop: true } : {})}
          />
        )}
        {src && t === "embed" && (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={paraEmbed(src)} title={legenda || "Vídeo de prévia"} loading="lazy" allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        )}
      </div>
      {legenda && <figcaption className={`mt-2 text-xs leading-snug ${invert ? "text-on-hl/75" : "text-soft"}`}>{legenda}</figcaption>}
    </figure>
  );
}
