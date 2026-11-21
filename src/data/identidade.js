import { Shapes, Palette, Type, FileImage, BookOpen, Mail, Youtube, Instagram } from "lucide-react";

// ===== PÁGINA IDENTIDADE VISUAL: valores e textos ficam aqui. =====
// Os exemplos do bloco principal e dos kits são prévias em SVG: src/components/IdentPreviews.jsx.
// Itens dos kits: use "Nome do item | explicação prática".

export const HERO = {
  midia: { src: "", legenda: "", ratio: "4/3" }, // 📌 MÍDIA do topo da página (sugestão: um mockup de marca)
};

export const PRINCIPAL = {
  titulo: "Identidade Visual Completa + Manual da Marca",
  preco: "R$ 280",
  mensagem: "Olá, Karen! Tenho interesse na Identidade Visual Completa + Manual da Marca (a partir de R$ 280). Pode me passar mais detalhes?",
  incluso: [
    { icon: Shapes, titulo: "Logotipo principal e variações", texto: "O símbolo da sua marca em versões horizontal, vertical e só o ícone, para caber em qualquer lugar: site, perfil de rede social, nota fiscal." },
    { icon: Palette, titulo: "Paleta de cores oficial", texto: "As cores certas da marca, com os códigos para tela (HEX e RGB) e para impressão (CMYK), para nunca sair uma cor diferente." },
    { icon: Type, titulo: "Tipografia oficial", texto: "As letras definidas para títulos e textos, para tudo o que você publicar ter o mesmo estilo." },
    { icon: FileImage, titulo: "Arquivos finais em alta resolução", texto: "PNG sem fundo (para colocar sobre qualquer cor), PDF e arquivos editáveis, prontos para usar ou levar à gráfica." },
    { icon: BookOpen, titulo: "Manual da Marca completo", texto: "Um guia prático que ensina onde e como usar o logotipo, o que não fazer (esticar, trocar cores, usar em fundo ruim) e como manter a marca sempre profissional." },
  ],
};

export const DESTAQUE = {
  titulo: "Um manual que ensina a usar a sua marca",
  midia: {
    src: "", ratio: "16/9", // 📌 MÍDIA EM DESTAQUE: coloque aqui a sua gravação de tela do Manual da Marca
    legenda: "Veja por dentro como funciona o Manual da Marca que acompanha seu projeto",
  },
};

export const PROCESSO_TITULO = "Do primeiro papo à marca pronta, em 4 passos";
export const PROCESSO = [
  { n: "1", titulo: "Briefing", texto: "Conversamos sobre o seu negócio, o seu público e o que você quer transmitir." },
  { n: "2", titulo: "Pesquisa e Conceito", texto: "Estudo o seu mercado e crio a direção visual da sua marca." },
  { n: "3", titulo: "Apresentação e Ajustes", texto: "Você vê a proposta e nós fazemos os ajustes necessários." },
  { n: "4", titulo: "Entrega Final", texto: "Você recebe os arquivos organizados e o Manual da Marca completo." },
];
export const PROCESSO_MIDIA = { src: "", legenda: "", ratio: "4/3" }; // 📌 MÍDIA do processo de criação

export const KITS = [
  {
    id: "papelaria", icon: Mail, titulo: "Kit Papelaria Digital & Corporativa", rotulo: "A partir de", preco: "R$ 150",
    itens: ["Assinatura de e-mail | seus dados e logotipo no rodapé de cada e-mail enviado", "Papel timbrado editável | folha com a marca para propostas e contratos", "Cartão digital interativo | PDF com botões clicáveis para enviar pelo WhatsApp", "Fundo virtual para reuniões | imagem da marca atrás de você no Meet e no Zoom"],
    mensagem: "Olá, Karen! Tenho interesse no Kit Papelaria Digital & Corporativa (a partir de R$ 150). Pode me passar mais detalhes?",
  },
  {
    id: "youtube", icon: Youtube, titulo: "Identidade Visual para YouTube / Podcast", rotulo: "A partir de", preco: "R$ 220",
    itens: ["Banner responsivo | imagem do topo do canal, que se ajusta a celular, TV e computador", "Foto de perfil | o ícone do canal, nítido mesmo em tamanho pequeno", "Telas de início e encerramento | vinhetas que dão cara profissional aos vídeos", "5 templates de capas (thumbnails) | modelos da imagem de capa, para atrair cliques"],
    mensagem: "Olá, Karen! Tenho interesse na Identidade Visual para YouTube / Podcast (a partir de R$ 220). Pode me passar mais detalhes?",
  },
  {
    id: "instagram", icon: Instagram, titulo: "Kit de Templates Editáveis para Instagram", rotulo: "Pacote fechado", preco: "R$ 260",
    descricao: "Para quem produz as próprias artes.",
    itens: ["Banco exclusivo no Canva | pasta de modelos só sua, no Canva (grátis)", "10 modelos de feed | posts quadrados que você edita com seus textos", "5 carrosséis | posts com várias imagens deslizáveis, ótimos para ensinar", "8 stories | artes verticais para os stories do dia a dia", "5 capas de Reels | imagem de abertura dos vídeos, no estilo da marca"],
    mensagem: "Olá, Karen! Tenho interesse no Kit de Templates Editáveis para Instagram (R$ 260). Pode me passar mais detalhes?",
  },
];

export const CROSSSELL = {
  titulo: "Quer unir Identidade Visual e Site com desconto?",
  texto: "Nos Pacotes Digitais eu reúno marca, site e redes sociais em um combo com condição especial.",
};
