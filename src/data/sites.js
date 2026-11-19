import { LayoutTemplate, Globe, ShieldCheck, Wrench, Server, AtSign, Handshake, CreditCard, QrCode, RefreshCw, DatabaseBackup, Activity, Gauge, Clock } from "lucide-react";

// ===== PÁGINA SITES: todos os valores e textos ficam aqui. Edite e o site inteiro atualiza. =====

// Faixa de resumo no topo da página
export const RESUMO = [
  { rotulo: "Site Institucional", valor: "R$ 850", nota: "a partir de, pagamento único" },
  { rotulo: "Landing Page", valor: "R$ 650", nota: "a partir de, pagamento único" },
  { rotulo: "Manutenção mensal", valor: "R$ 250", nota: "a partir de, por mês" },
  { rotulo: "Alteração avulsa", valor: "R$ 80", nota: "a partir de, por solicitação" },
];

export const PRODUTOS = [
  {
    id: "site", icon: Globe, tag: "Site Institucional", preco: "R$ 850",
    descricao: "Hoje o cliente pesquisa no Google antes de ligar. Seu site mostra quem você é, o que faz e como falar com você, e passa credibilidade desde o primeiro clique. Para empresas, profissionais liberais e instituições.",
    nota: "Valor referente ao pacote inicial simplificado. Projetos maiores ou com recursos personalizados são orçados sob medida.",
    itens: [
      "Até 3 páginas essenciais (ex.: Início, Sobre/Serviços e Contato)",
      "Layout limpo, profissional e adaptado para celular e computador",
      "Botão direto para o WhatsApp e links para redes sociais",
      "SEO básico (configuração inicial para o Google indexar o site)",
    ],
    prazo: "A partir de 8 dias úteis",
    prazoNota: "após o envio de todos os textos, fotos e logotipo.",
    mensagem: "Olá, Karen! Tenho interesse no Site Institucional (a partir de R$ 850). Pode me passar mais detalhes e um orçamento?",
  },
  {
    id: "landing", icon: LayoutTemplate, tag: "Landing Page", preco: "R$ 650",
    descricao: "Se você divulga um serviço ou paga anúncio, a página precisa ter um único objetivo: fazer o visitante te chamar. É isso que a landing page faz. Ideal para lançar um produto ou receber tráfego de anúncios.",
    nota: "Valor referente à estrutura essencial. Páginas mais longas, com copywriting aprofundado ou integrações extras têm orçamento personalizado.",
    itens: [
      "Até 4 seções estratégicas (Apresentação, Benefícios/Serviço, Prova Social/Depoimentos e Chamada para Ação)",
      "Botão flutuante e links diretos para o WhatsApp",
      "1 formulário de contato simples integrado",
      "SEO básico (títulos, descrições e carregamento rápido)",
      "Design responsivo (celular, tablet e computador)",
    ],
    prazo: "A partir de 5 dias úteis",
    prazoNota: "após o recebimento do material.",
    mensagem: "Olá, Karen! Tenho interesse na Landing Page (a partir de R$ 650). Pode me passar mais detalhes e um orçamento?",
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
  "Criação de novas páginas ou novas seções do zero",
  "Redesign (mudança total de cores, identidade visual ou estrutura do layout)",
  "Novas integrações (meios de pagamento, áreas restritas, sistemas externos ou automações)",
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
