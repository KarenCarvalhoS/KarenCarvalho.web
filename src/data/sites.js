import { ShoppingBag, LayoutTemplate, Palette, Link2, Globe, ShieldCheck, Wrench, Server, AtSign, Handshake, CreditCard, QrCode, RefreshCw, DatabaseBackup, Activity, Gauge, Clock } from "lucide-react";

// ===== PÁGINA SITES: todos os valores e textos ficam aqui. Edite e o site inteiro atualiza. =====
// As prévias visuais dos 4 cards principais ficam em src/components/Previews.jsx.
// Itens "incluso": use "Nome do item | explicação prática". O nome sai em negrito.

// Faixa de resumo no topo da página
export const RESUMO = [
  { rotulo: "Site + Loja Nuvemshop", valor: "R$ 950", nota: "a partir de, pagamento único", destaque: true },
  { rotulo: "Site Institucional", valor: "R$ 850", nota: "a partir de, pagamento único" },
  { rotulo: "Landing Page", valor: "R$ 650", nota: "a partir de, pagamento único" },
  { rotulo: "Redesign de site", valor: "R$ 320", nota: "a partir de" },
  { rotulo: "Link na Bio", valor: "R$ 90", nota: "a partir de" },
  { rotulo: "Manutenção mensal", valor: "R$ 250", nota: "a partir de, por mês" },
  { rotulo: "Alteração avulsa", valor: "R$ 80", nota: "a partir de, por solicitação" },
];

export const PRODUTOS = [
  {
    id: "nuvemshop", icon: ShoppingBag, titulo: "Site + Integração Nuvemshop (Loja Virtual)", preco: "R$ 950", destaque: true, selo: "Serviço principal", preview: "loja",
    descricao: "É a criação do seu site já integrado à Nuvemshop, a plataforma de lojas virtuais. Na prática, você ganha um site com cara profissional para vender produtos online, com vitrine organizada e checkout (carrinho e pagamento) pronto para receber pedidos.",
    nota: "Valor referente ao pacote inicial. A mensalidade da plataforma Nuvemshop é contratada por você, direto com a Nuvemshop. Lojas maiores ou com recursos extras são orçadas sob medida.",
    itens: [
      "Site com visual profissional | página inicial, vitrine e páginas de produto na identidade da sua marca, para o cliente confiar e comprar",
      "Integração com a Nuvemshop | conecta o site à plataforma que cuida de estoque, pedidos e pagamentos, tudo em um painel simples para você",
      "Checkout pronto | carrinho e tela de pagamento configurados, com os meios de pagamento ativos na sua conta",
      "Layout para celular e computador | a maioria das compras acontece no celular, então a loja é pensada primeiro para ele",
      "Botão de WhatsApp e redes sociais | o cliente tira dúvidas com você antes de comprar",
    ],
    mensagem: "Olá, Karen! Tenho interesse no Site + Integração Nuvemshop (Loja Virtual), a partir de R$ 950. Pode me passar mais detalhes e um orçamento?",
  },
  {
    id: "redesign", preview: "blackvision", icon: Palette, titulo: "Redesign / Revitalização de Site Existente", preco: "R$ 320",
    descricao: "Você já tem um site no ar, mas ele não passa a imagem profissional que o seu negócio merece? O redesign moderniza o visual e reorganiza o conteúdo para quem visita entender rápido e entrar em contato.",
    itens: [
      "Modernização visual | novas cores, fontes e imagens para o site parecer atual e profissional",
      "Ajuste para celular e computador | corrige telas quebradas ou difíceis de usar no celular",
      "Reorganização do conteúdo | textos e seções em uma ordem que facilita entender e entrar em contato",
    ],
    mensagem: "Olá, Karen! Tenho interesse no Redesign do meu site (a partir de R$ 320). Pode me passar mais detalhes e um orçamento?",
  },
  {
    id: "site", preview: "institucional", icon: Globe, titulo: "Site Institucional", preco: "R$ 850",
    descricao: "Hoje o cliente pesquisa no Google antes de ligar. Seu site mostra quem você é, o que faz e como falar com você, e passa credibilidade desde o primeiro clique. Para empresas, profissionais liberais e instituições.",
    nota: "Valor referente ao pacote inicial simplificado. Projetos maiores ou com recursos personalizados são orçados sob medida.",
    itens: [
      "Até 3 páginas essenciais | por exemplo Início, Sobre/Serviços e Contato: o básico para o cliente te conhecer e te chamar",
      "Layout limpo e responsivo | o site se ajusta sozinho a qualquer tela, do celular ao computador",
      "Botão de WhatsApp e redes sociais | com um toque, o visitante vira conversa",
      "SEO básico | ajustes iniciais para o Google encontrar e mostrar o seu site nas buscas",
    ],
    prazo: "A partir de 8 dias úteis",
    prazoNota: "após o envio de todos os textos, fotos e logotipo.",
    mensagem: "Olá, Karen! Tenho interesse no Site Institucional (a partir de R$ 850). Pode me passar mais detalhes e um orçamento?",
  },
  {
    id: "landing", preview: "landing", icon: LayoutTemplate, titulo: "Landing Page", preco: "R$ 650",
    descricao: "Se você divulga um serviço ou paga anúncio, a página precisa ter um único objetivo: fazer o visitante te chamar. É isso que a landing page faz. Ideal para lançar um produto ou receber tráfego de anúncios.",
    nota: "Valor referente à estrutura essencial. Páginas mais longas, com copywriting aprofundado ou integrações extras têm orçamento personalizado.",
    itens: [
      "Até 4 seções estratégicas | Apresentação, Benefícios, Depoimentos (prova social) e Chamada para Ação, a ordem que guia o visitante até o contato",
      "Botão flutuante de WhatsApp | fica sempre visível na tela enquanto a pessoa rola a página",
      "1 formulário de contato | o visitante deixa nome e telefone e você recebe o pedido de contato",
      "SEO básico | títulos, descrições e velocidade ajustados para o Google e para os anúncios",
      "Design responsivo | aparece bem no celular, no tablet e no computador",
    ],
    prazo: "A partir de 5 dias úteis",
    prazoNota: "após o recebimento do material.",
    mensagem: "Olá, Karen! Tenho interesse na Landing Page (a partir de R$ 650). Pode me passar mais detalhes e um orçamento?",
  },
  {
    id: "linkbio", icon: Link2, titulo: "Página de Links / Cartão Digital Web (Link na Bio)", preco: "R$ 90",
    descricao: "Uma mini-página exclusiva, na identidade da sua marca, que reúne em um único link o seu WhatsApp, catálogo, redes sociais e tudo o que o cliente precisa para chamar você.",
    itens: [
      "Mini-página personalizada | com as cores e o logotipo da sua marca",
      "Tudo em um só link | WhatsApp, catálogo e redes sociais juntos, sem o cliente procurar",
      "Pronta para a bio do Instagram | o Instagram só aceita um link, e este link leva a tudo",
    ],
    mensagem: "Olá, Karen! Tenho interesse na Página de Links / Cartão Digital (a partir de R$ 90). Pode me passar mais detalhes?",
  },
];

export const MANUT_INTRO = "Texto desatualizado, preço errado, site fora do ar. Eu cuido da parte técnica e das atualizações, e você cuida do seu negócio.";
export const MANUT_CONTRATO = "Contrato com permanência mínima de 3 meses.";

export const MANUT_PLANOS = [
  {
    nome: "Plano Essencial", sub: "Suporte Técnico", preco: "R$ 250", destaque: true,
    nota: "Valor referente ao suporte técnico básico para sites institucionais ou landing pages simples.",
    texto: "Indicado para quem precisa manter o site funcionando perfeitamente e fazer atualizações pontuais de texto e imagem.",
    mensagem: "Olá, Karen! Tenho interesse no Plano de Manutenção Essencial (a partir de R$ 250/mês). Pode me passar mais detalhes?",
  },
  {
    nome: "Plano Completo", sub: "Site + Presença Digital", preco: "R$ 790",
    nota: "",
    texto: "Indicado para quem deseja unir a manutenção técnica do site com suporte contínuo de design e materiais para redes sociais.",
    mensagem: "Olá, Karen! Tenho interesse no Plano de Manutenção Completo (a partir de R$ 790/mês). Pode me passar mais detalhes?",
  },
];

export const MANUT_INCLUSO_TITULO = "O que você recebe todo mês (Plano Essencial)";
export const MANUT_INCLUSO = [
  { icon: RefreshCw, titulo: "Atualizações de conteúdo", texto: "Troca de textos, fotos, banners, preços e dados de contato." },
  { icon: DatabaseBackup, titulo: "Segurança e Backup", texto: "Cópias de segurança periódicas para proteger seus arquivos." },
  { icon: Activity, titulo: "Monitoramento técnico", texto: "Verificação de funcionamento, links e estabilidade no ar." },
  { icon: Gauge, titulo: "Limite de solicitações", texto: "Até 4 alterações simples por mês (não acumulativas)." },
  { icon: Clock, titulo: "Tempo de resposta", texto: "Atendimento em horário comercial (segunda a sexta, das 09h às 17h), com prazo de execução de até 48 horas úteis." },
];

export const MANUT_NAO_INCLUSO = [
  "Criação de novas páginas ou seções do zero (é um projeto novo, não um ajuste)",
  "Redesign: mudança total de cores, identidade visual ou estrutura do layout",
  "Novas integrações: meios de pagamento, áreas restritas, sistemas externos ou automações",
];
export const MANUT_NAO_NOTA = "Transparência total: demandas estruturais ou fora do plano mensal são orçadas à parte antes de qualquer execução.";

export const AVULSA = {
  preco: "R$ 80",
  titulo: "Alteração avulsa (para clientes sem plano mensal)",
  texto: "A partir de R$ 80 por solicitação, referente a ajustes simples de texto ou troca de imagem. Alterações maiores são orçadas conforme o tempo técnico.",
};

export const EXTERNOS_INTRO = "Para você ter total autonomia e ser o único dono do seu site, os serviços abaixo são contratados direto no seu nome ou CNPJ.";
export const EXTERNOS = [
  {
    icon: Globe, titulo: "Domínio", exemplo: "o endereço do seu site, ex.: suaempresa.com.br",
    incluso: "Não", quem: "Pago diretamente pelo cliente (no Registro.br).", valor: "A partir de R$ 40,00 por ano",
  },
  {
    icon: Server, titulo: "Hospedagem", exemplo: "onde o site fica armazenado para ficar 24h no ar",
    incluso: "Depende do projeto",
    quem: "Para sites de estrutura leve hospedados em nuvem moderna (Vercel), o plano inicial pode ter custo zero para tráfego padrão. Projetos que exigem servidores dedicados ou bancos de dados têm custo pago pelo cliente.",
    valor: "R$ 0 no plano inicial, ou a partir de R$ 200 por ano",
  },
  {
    icon: AtSign, titulo: "E-mail profissional", exemplo: "ex.: contato@suaempresa.com.br",
    incluso: "Não (serviço opcional)", quem: "Contratado pelo cliente.",
    valor: "A partir de R$ 0 (planos gratuitos básicos como Zoho Mail) ou a partir de R$ 35/mês por conta (Google Workspace)",
  },
];

export const PAGAMENTO_INTRO = "Condições flexíveis e transparentes para você começar com segurança.";
export const PAGAMENTOS = [
  { icon: QrCode, titulo: "À vista no Pix", texto: "Desconto especial sobre o valor total do projeto, com pagamento integral na aprovação." },
  { icon: Handshake, titulo: "Entrada + Entrega (sem juros)", texto: "50% de entrada via Pix para reservar a agenda e iniciar o desenvolvimento + 50% na entrega final, antes da publicação oficial." },
  { icon: CreditCard, titulo: "Cartão de crédito (via InfinitePay)", texto: "Parcelamento em até 6x sem juros (ou em até 12x com taxas da operadora)." },
];
