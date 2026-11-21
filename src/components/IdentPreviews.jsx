import React from "react";

/* Exemplos de identidade visual (SVG). Propositalmente FORA da paleta verde do site,
   para mostrar versatilidade de estilos. Marcas fictícias, apenas ilustrativas. */

const Wrap = ({ children, label, bg }) => (
  <figure className="w-full">
    <svg viewBox="0 0 320 180" role="img" aria-label={label} className="block w-full overflow-hidden rounded-2xl ring-1 ring-black/10" style={{ background: bg }}>{children}</svg>
    <figcaption className="mt-2 text-xs opacity-80">Exemplo ilustrativo: {label}</figcaption>
  </figure>
);
const serif = "'Playfair Display', Georgia, serif";
const sans = "'Plus Jakarta Sans', Arial, sans-serif";

// Principal: minimalista terracota e bege
export function ExPrincipal() {
  return (
    <Wrap label="marca minimalista em terracota e bege" bg="#F3E9DC">
      <circle cx="52" cy="50" r="22" fill="#C46A45" /><path d="M52 34c10 8 10 24 0 32-10-8-10-24 0-32z" fill="#F3E9DC" />
      <text x="84" y="48" fontFamily={serif} fontSize="19" fontWeight="700" fill="#5B3A29">Casa Argila</text>
      <text x="84" y="62" fontFamily={sans} fontSize="7" letterSpacing="2.5" fill="#A9795F">CERÂMICA ARTESANAL</text>
      {["#C46A45", "#E2B596", "#F3E9DC", "#5B3A29", "#A9795F"].map((c, i) => <rect key={c} x={20 + i * 34} y="92" width="30" height="30" rx="6" fill={c} stroke="#5B3A29" strokeOpacity=".15" />)}
      <text x="20" y="145" fontFamily={serif} fontSize="26" fill="#5B3A29">Aa</text><text x="62" y="140" fontFamily={sans} fontSize="7" fill="#A9795F">Playfair Display + Jakarta</text>
      <rect x="215" y="86" width="85" height="84" rx="6" fill="#C46A45" /><rect x="223" y="94" width="69" height="68" rx="3" fill="none" stroke="#F3E9DC" strokeOpacity=".6" />
      <text x="257" y="122" textAnchor="middle" fontFamily={serif} fontSize="11" fill="#F3E9DC">Manual</text><text x="257" y="136" textAnchor="middle" fontFamily={serif} fontSize="11" fill="#F3E9DC">da Marca</text>
    </Wrap>
  );
}

// Kit 1: papelaria, azul-marinho e dourado
export function ExPapelaria() {
  return (
    <Wrap label="papelaria corporativa em azul-marinho e dourado" bg="#E9ECF2">
      <rect x="20" y="18" width="130" height="150" rx="4" fill="#fff" stroke="#0F2547" strokeOpacity=".2" />
      <rect x="20" y="18" width="130" height="8" fill="#0F2547" /><text x="32" y="48" fontFamily={serif} fontSize="11" fontWeight="700" fill="#0F2547">Almeida &amp; Costa</text>
      <rect x="32" y="54" width="30" height="1.5" fill="#C9A24B" />
      {[76, 88, 100, 112, 124].map((y) => <rect key={y} x="32" y={y} width={y === 124 ? 60 : 105} height="3" rx="1.5" fill="#0F2547" opacity=".18" />)}
      <rect x="168" y="30" width="132" height="76" rx="5" fill="#0F2547" />
      <circle cx="190" cy="52" r="9" fill="none" stroke="#C9A24B" strokeWidth="1.5" /><text x="190" y="56" textAnchor="middle" fontFamily={serif} fontSize="10" fill="#C9A24B">A</text>
      <text x="182" y="82" fontFamily={serif} fontSize="9" fill="#fff">Dra. Marina Costa</text><text x="182" y="94" fontFamily={sans} fontSize="6" letterSpacing="1" fill="#C9A24B">ADVOCACIA EMPRESARIAL</text>
      <rect x="168" y="118" width="132" height="50" rx="4" fill="#fff" stroke="#0F2547" strokeOpacity=".2" />
      <text x="178" y="136" fontFamily={sans} fontSize="7" fontWeight="700" fill="#0F2547">Marina Costa</text><text x="178" y="148" fontFamily={sans} fontSize="6" fill="#5A6785">contato@almeidacosta.com.br</text><rect x="178" y="155" width="50" height="1.5" fill="#C9A24B" />
    </Wrap>
  );
}

// Kit 2: YouTube / Podcast, coral e roxo
export function ExYoutube() {
  return (
    <Wrap label="canal de YouTube/podcast em coral e roxo" bg="#2A1450">
      <rect width="320" height="74" fill="url(#g1)" /><defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#FF6B6B" /><stop offset="1" stopColor="#7C3AED" /></linearGradient></defs>
      <text x="100" y="40" fontFamily={sans} fontSize="18" fontWeight="800" fill="#fff">Papo Criativo</text><text x="100" y="56" fontFamily={sans} fontSize="8" letterSpacing="2" fill="#FFE3E3">PODCAST SEMANAL</text>
      <circle cx="60" cy="74" r="28" fill="#FF6B6B" stroke="#2A1450" strokeWidth="5" /><path d="M52 62v24l22-12z" fill="#fff" />
      {[0, 1, 2].map((i) => (
        <g key={i}><rect x={20 + i * 98} y="102" width="90" height="52" rx="6" fill={["#FF6B6B", "#A78BFA", "#FFB199"][i]} />
          <text x={29 + i * 98} y="125" fontFamily={sans} fontSize="11" fontWeight="800" fill="#2A1450">EP. 0{i + 1}</text><rect x={29 + i * 98} y="133" width="55" height="4" rx="2" fill="#2A1450" opacity=".5" /><rect x={29 + i * 98} y="141" width="35" height="4" rx="2" fill="#2A1450" opacity=".5" /></g>
      ))}
      <text x="20" y="171" fontFamily={sans} fontSize="7" fill="#C4B5FD">Banner, foto de perfil, telas e capas</text>
    </Wrap>
  );
}

// Kit 3: templates Instagram, amarelo e preto editorial
export function ExInstagram() {
  return (
    <Wrap label="templates de Instagram em amarelo e grafite" bg="#F4F1EA">
      <rect x="18" y="18" width="88" height="110" rx="6" fill="#F5C518" /><text x="28" y="48" fontFamily={sans} fontSize="14" fontWeight="800" fill="#1C1C1C">3 DICAS</text><text x="28" y="64" fontFamily={sans} fontSize="14" fontWeight="800" fill="#1C1C1C">PARA</text><text x="28" y="80" fontFamily={sans} fontSize="14" fontWeight="800" fill="#1C1C1C">VENDER</text>
      <rect x="28" y="92" width="36" height="14" rx="7" fill="#1C1C1C" /><text x="46" y="102" textAnchor="middle" fontFamily={sans} fontSize="6" fill="#F5C518">ARRASTE →</text>
      <rect x="116" y="18" width="88" height="110" rx="6" fill="#1C1C1C" /><text x="126" y="50" fontFamily={serif} fontSize="30" fill="#F5C518">“</text><rect x="126" y="62" width="64" height="4" rx="2" fill="#fff" /><rect x="126" y="72" width="54" height="4" rx="2" fill="#fff" /><rect x="126" y="82" width="60" height="4" rx="2" fill="#fff" /><text x="126" y="116" fontFamily={sans} fontSize="6" fill="#F5C518">@suamarca</text>
      <rect x="214" y="18" width="88" height="110" rx="6" fill="#FF5C8A" /><circle cx="258" cy="60" r="22" fill="#F5C518" /><text x="258" y="66" textAnchor="middle" fontFamily={sans} fontSize="16" fontWeight="800" fill="#1C1C1C">-30%</text><text x="258" y="104" textAnchor="middle" fontFamily={sans} fontSize="9" fontWeight="800" fill="#fff">OFERTA</text>
      <rect x="18" y="140" width="40" height="28" rx="14" fill="#1C1C1C" /><rect x="64" y="140" width="40" height="28" rx="14" fill="#F5C518" stroke="#1C1C1C" /><rect x="110" y="140" width="40" height="28" rx="14" fill="#FF5C8A" />
      <text x="170" y="158" fontFamily={sans} fontSize="8" fill="#1C1C1C">Feed, carrosséis, stories e Reels</text>
    </Wrap>
  );
}
