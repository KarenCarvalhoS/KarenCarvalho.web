import { Globe, FileText, Table, Cpu, MessageCircle, GraduationCap, Terminal, ShieldCheck } from "lucide-react";

// Cards da página Consultoria. Para adicionar um serviço, copie um bloco.
export const SERVICOS = [
  { icon: Globe, tag: "Web", titulo: "Landing Pages de Alta Conversão", preco: "A partir de R$ 450",
    itens: ["Layout responsivo e rápido", "Copy focada em conversão", "Integração com WhatsApp e formulários"] },
  { icon: FileText, tag: "IA & Dados", titulo: "Extração & Tratamento de Notas Fiscais com IA", preco: "A partir de R$ 300",
    itens: ["Leitura automática de notas", "Dados organizados e conferidos", "Horas semanais recuperadas"] },
  { icon: Table, tag: "Planilhas", titulo: "Limpeza e Padronização de Planilhas e Relatórios", preco: "A partir de R$ 200",
    itens: ["Remoção de duplicidades e erros", "Padrão único de colunas", "Relatórios prontos para decisão"] },
  { icon: Cpu, tag: "Processos", titulo: "Criação de POPs e Manuais Operacionais", preco: "A partir de R$ 350",
    itens: ["Passo a passo claro e objetivo", "Padronização da operação", "Onboarding de equipe mais rápido"] },
  { icon: MessageCircle, tag: "Marketing", titulo: "Gestão de Mídias Sociais com IA", preco: "Mensal: R$ 500",
    extra: "Trimestral: R$ 1.350 | Semestral: R$ 2.400",
    itens: ["Planejamento e criação de conteúdo", "Calendário editorial consistente", "Produção ágil com apoio de IA"] },
];

// Os 3 pilares da página Início.
export const PILARES = [
  { icon: Cpu, n: "01", titulo: "Automação & Operações Técnicas", texto: "Tratamento de dados, notas fiscais e POPs para tirar a operação do manual." },
  { icon: Globe, n: "02", titulo: "Desenvolvimento Web Ágil", texto: "Landing pages com alta taxa de conversão, entregues no prazo da sua campanha." },
  { icon: GraduationCap, n: "03", titulo: "Capacitação & Workshops de IA", texto: "Treinamentos corporativos para a equipe usar IA com segurança e resultado." },
];

// Grade didática da página Workshops & Palestras.
export const GRADE = [
  { icon: Cpu, titulo: "Desmistificação da IA", texto: "Ferramentas práticas que geram ROI imediato versus o hype da internet." },
  { icon: FileText, titulo: "Automação de Documentos", texto: "Leitura de notas, organização de planilhas e relatórios rápidos." },
  { icon: Terminal, titulo: "Engenharia de Prompt para Equipes Operacionais", texto: "Como pedir à IA de forma que o resultado seja útil e repetível." },
  { icon: ShieldCheck, titulo: "Segurança, Confidencialidade e Boas Práticas", texto: "O que pode e o que não pode entrar na IA ao lidar com dados empresariais." },
];

export const FORMATOS = [
  { titulo: "Palestra Executiva", duracao: "1h a 1h30", texto: "Visão estratégica para lideranças decidirem onde aplicar IA." },
  { titulo: "Workshop Prático", duracao: "2h a 3h", texto: "Mão na massa com as ferramentas, usando casos reais da sua operação." },
];
