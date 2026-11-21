import { Globe, LayoutTemplate, FileText, Table, ClipboardList, MessageCircle, Cpu, GraduationCap } from "lucide-react";

// 📌 MÍDIA: cada card tem o campo `midia` (veja src/components/Midia.jsx).
// Cards da página Consultoria. `dor` = o problema que o cliente sente. Para adicionar um serviço, copie um bloco.
export const SERVICOS = [
  { icon: Globe, tag: "Web", titulo: "Um site que passa confiança antes de você falar", preco: "A partir de R$ 850", detalhes: "/sites",
    midia: { src: "", legenda: "", ratio: "16/9" }, // 📌 MÍDIA deste serviço
    dor: "O cliente te procura no Google e não encontra, ou encontra algo que não convence.",
    itens: ["Até 3 páginas essenciais", "Bonito no celular e no computador", "Botão de WhatsApp, redes sociais e SEO básico"] },
  { icon: LayoutTemplate, tag: "Web", titulo: "Uma página feita para o cliente chamar você", preco: "A partir de R$ 650", detalhes: "/sites",
    midia: { src: "", legenda: "", ratio: "16/9" }, // 📌 MÍDIA deste serviço
    dor: "Você divulga ou paga anúncio, mas o clique morre numa página que não converte.",
    itens: ["Até 4 seções pensadas para vender", "WhatsApp e formulário de contato", "Rápida, responsiva e com SEO básico"] },
  { icon: FileText, tag: "IA & Dados", titulo: "Chega de digitar nota fiscal à mão", preco: "A partir de R$ 300",
    midia: { src: "", legenda: "", ratio: "16/9" }, // 📌 MÍDIA deste serviço
    dor: "Horas por semana lendo, digitando e conferindo nota, com risco de erro.",
    itens: ["A IA lê as notas por você", "Dados organizados e conferidos", "Você recupera horas toda semana"] },
  { icon: Table, tag: "Planilhas", titulo: "Planilha que ajuda a decidir, não que dá dor de cabeça", preco: "A partir de R$ 200",
    midia: { src: "", legenda: "", ratio: "16/9" }, // 📌 MÍDIA deste serviço
    dor: "Dados duplicados, colunas fora do lugar e cada pessoa preenchendo de um jeito.",
    itens: ["Remoção de duplicidades e erros", "Um padrão único para todo mundo", "Relatórios prontos para decisão"] },
  { icon: ClipboardList, tag: "Processos", titulo: "Processo escrito, equipe alinhada", preco: "A partir de R$ 350",
    midia: { src: "", legenda: "", ratio: "16/9" }, // 📌 MÍDIA deste serviço
    dor: "O jeito certo de fazer mora na cabeça de uma pessoa só. Se ela falta, a operação trava.",
    itens: ["Passo a passo claro e objetivo", "Operação padronizada", "Pessoa nova aprende mais rápido"] },
  { icon: MessageCircle, tag: "Marketing", titulo: "Redes sociais ativas sem virar sua segunda jornada", preco: "Mensal: R$ 500",
    midia: { src: "", legenda: "", ratio: "16/9" }, // 📌 MÍDIA deste serviço
    extra: "Trimestral: R$ 1.350 | Semestral: R$ 2.400",
    dor: "Você sabe que precisa postar, mas falta tempo, ideia e constância.",
    itens: ["Planejamento e criação de conteúdo", "Calendário editorial para não ficar sem postar", "Produção ágil com apoio de IA"] },
];

// Os 3 pilares da página Início.
export const PILARES = [
  { icon: Cpu, n: "01", titulo: "Tarefas manuais viram automáticas", texto: "Notas fiscais, planilhas e relatórios que consomem horas passam a andar sozinhos." },
  { icon: Globe, n: "02", titulo: "Presença que traz cliente", texto: "Sites e landing pages que passam confiança e levam a pessoa direto para o seu WhatsApp." },
  { icon: GraduationCap, n: "03", titulo: "Equipe que usa IA direito", texto: "Workshops e palestras para o time parar de perder tempo e começar a produzir mais." },
];
