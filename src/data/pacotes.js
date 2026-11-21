import { Rocket, Crown, Instagram, Presentation, BookOpen, FileText, Magnet, GraduationCap, Clapperboard, CalendarCheck, CalendarDays } from "lucide-react";

// ===== PÁGINA PACOTES DIGITAIS: valores e textos ficam aqui. =====
// Itens "incluso": use "Nome do item | explicação prática". O nome sai em negrito.

// ----- Bloco 1: pacotes prontos -----
export const PACOTES = [
  {
    id: "presenca", icon: Rocket, nome: "Pacote Presença Digital", subtitulo: "Ideal para começar do jeito certo",
    rotulo: "Pacote fechado", preco: "R$ 490",
    itens: [
      "Identidade Visual completa | logotipo, cores e fontes oficiais, para sua marca ter sempre a mesma cara em todo lugar",
      "Landing Page de alta conversão | uma página única, feita para o visitante clicar e te chamar",
      "Kit Inicial Instagram | foto de perfil, 5 capas de destaque e 6 modelos editáveis para o perfil ficar organizado e profissional",
    ],
    mensagem: "Olá, Karen! Quero contratar o Pacote Presença Digital (R$ 490). Pode me passar os próximos passos?",
  },
  {
    id: "autoridade", icon: Crown, nome: "Pacote Autoridade Completa", subtitulo: "Para se posicionar como referência", selo: "Mais Completo", destaque: true,
    rotulo: "Pacote fechado", preco: "R$ 790",
    itens: [
      "Identidade Visual completa | logotipo, cores, fontes e Manual da Marca, que ensina onde e como usar (ou não usar) o logotipo",
      "Site Institucional (até 5 páginas) | o cartão de visitas da empresa na internet: quem você é, o que faz e como te contatar",
      "12 artes/carrosséis para Instagram | posts prontos para publicar, sem você precisar criar do zero",
      "Cartão de Visita Digital | PDF com botões clicáveis (WhatsApp, site, Instagram) para enviar por mensagem",
    ],
    mensagem: "Olá, Karen! Quero contratar o Pacote Autoridade Completa (R$ 790). Pode me passar os próximos passos?",
  },
  {
    id: "instagram", icon: Instagram, nome: "Pacote Destaque no Instagram", subtitulo: "Foco em posicionamento e conteúdo",
    rotulo: "Pacote fechado", preco: "R$ 350",
    itens: [
      "Reestruturação visual do perfil | bio, destaques e cores reorganizados para o perfil passar confiança logo de cara",
      "12 posts estratégicos | artes únicas e carrosséis (várias imagens deslizáveis) pensados para atrair e informar",
      "6 templates editáveis no Canva | modelos que você mesmo edita no Canva, grátis, para postar quando quiser",
      "5 criativos para anúncios | artes prontas para impulsionar no Instagram e Facebook",
    ],
    mensagem: "Olá, Karen! Quero contratar o Pacote Destaque no Instagram (R$ 350). Pode me passar os próximos passos?",
  },
  {
    id: "slides", icon: Presentation, nome: "Pacote Apresentação Profissional (Slides)", subtitulo: "Para reuniões, palestras e vendas",
    rotulo: "A partir de", preco: "R$ 180",
    itens: [
      "Apresentação estratégica | Pitch Deck (para apresentar o negócio a investidores), Proposta Comercial, Aula ou Palestra",
      "Até 15 slides | tamanho ideal para uma apresentação objetiva",
      "Visual moderno e gráficos | números e ideias organizados para o público entender rápido",
      "Arquivo editável | você pode alterar textos e dados depois, sem depender de mim",
    ],
    mensagem: "Olá, Karen! Quero contratar o Pacote Apresentação Profissional em slides (a partir de R$ 180). Pode me passar os próximos passos?",
  },
  {
    id: "editorial", icon: BookOpen, nome: "Pacote Editorial & Catálogo", subtitulo: "Materiais ricos e comerciais",
    rotulo: "A partir de", preco: "R$ 250",
    itens: [
      "Diagramação | organização de textos e imagens em Revista Digital, E-book, Cardápio Interativo ou Catálogo de Produtos",
      "Até 12 páginas | conteúdo completo, sem ficar longo demais",
      "Capa personalizada | a primeira impressão do material, na identidade da sua marca",
      "PDF pronto | arquivo para enviar por WhatsApp e e-mail ou levar para a gráfica",
    ],
    mensagem: "Olá, Karen! Quero contratar o Pacote Editorial & Catálogo (a partir de R$ 250). Pode me passar os próximos passos?",
  },
];

// ----- Bloco 2: pacote personalizado -----
export const PERSONALIZADO = {
  titulo: "Quer trocar itens ou montar um pacote sob medida?",
  texto: "Gostou de alguns serviços de um pacote, mas quer substituir por outro ou combinar entregas diferentes? Você tem total liberdade para personalizar seu combo. Escolha exatamente o que o seu negócio precisa e eu monto uma proposta exclusiva com condição especial de pacote.",
  botao: "Personalizar meu pacote no WhatsApp",
  mensagem: "Olá, Karen! Quero montar um pacote personalizado. Gostei de alguns itens dos Pacotes Digitais e queria combinar entregas diferentes.",
};

// ----- Bloco 3: adicionais e combos extras -----
export const ADICIONAIS_INTRO = "Serviços que você pode contratar sozinhos ou somar ao seu pacote personalizado.";
export const ADICIONAIS = [
  {
    id: "midiakit", icon: FileText, titulo: "Proposta Comercial / Mídia Kit Interativo (PDF)",
    texto: "Documento visual clicável para apresentar serviços, números e fechar contratos.",
    rotulo: "A partir de", preco: "R$ 190",
  },
  {
    id: "captura", icon: Magnet, titulo: "Página de Captura + Isca Digital",
    texto: "Landing page de captura integrada a um e-book ou checklist visual diagramado.",
    rotulo: "Combo", preco: "R$ 380",
  },
  {
    id: "lancamento", icon: GraduationCap, titulo: "Kit Lançamento de Curso ou Evento",
    texto: "Página de inscrição + artes de divulgação + apostila/workbook + certificado digital.",
    rotulo: "Combo", preco: "R$ 550",
  },
  {
    id: "reels", icon: Clapperboard, titulo: "Vídeos Curtos / Reels Animados com IA (3 vídeos)",
    texto: "Vídeos dinâmicos de 15 a 45 segundos, com narração, legendas animadas e cenas criadas com IA.",
    rotulo: "A partir de", preco: "R$ 150",
  },
  {
    id: "convite", icon: CalendarCheck, titulo: "Convite Digital Interativo",
    texto: "Convite em mini-site ou PDF com botões clicáveis de confirmação de presença (RSVP), mapa e informações do evento.",
    rotulo: "A partir de", preco: "R$ 110",
  },
  {
    id: "calendario", icon: CalendarDays, titulo: "Calendário Editorial + 30 Legendas/Roteiros",
    texto: "Planejamento de 30 dias de conteúdo com ideias, roteiros de Reels e legendas prontas para postar.",
    rotulo: "A partir de", preco: "R$ 200",
  },
].map((a) => ({
  ...a,
  mensagem: `Olá, Karen! Tenho interesse no extra "${a.titulo}" (${a.rotulo.toLowerCase()} ${a.preco}). Pode me passar mais detalhes?`,
}));
