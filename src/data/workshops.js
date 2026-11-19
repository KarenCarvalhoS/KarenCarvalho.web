import { Hourglass, Repeat, Shuffle, Lock, FileText, Wand2, ShieldCheck, Users, Video, MapPin, Bot, SearchCheck } from "lucide-react";

// ===== PÁGINA WORKSHOPS E PALESTRAS: textos e valores ficam aqui. =====

export const DORES = [
  { icon: Hourglass, titulo: "Pede, recebe texto genérico e refaz tudo", texto: "A equipe usa o ChatGPT ou o Gemini como buscador, digita perguntas soltas e gasta mais tempo corrigindo do que ganhou." },
  { icon: Repeat, titulo: "Tarefa repetitiva comendo o dia", texto: "Responder cliente, montar relatório, resumir reunião, criar proposta. Todo dia, as mesmas horas." },
  { icon: Shuffle, titulo: "Cada um usa de um jeito", texto: "Sem método, o resultado muda de pessoa para pessoa e ninguém consegue repetir o que deu certo." },
  { icon: Lock, titulo: "Medo de expor dados da empresa", texto: "Muita gente não sabe o que pode e o que não pode colocar numa ferramenta de IA." },
];

export const APRENDE = [
  { icon: Wand2, titulo: "Pedir do jeito certo", texto: "Engenharia de prompt sem tecniquês: como pedir para a IA e receber algo pronto para usar." },
  { icon: FileText, titulo: "Aplicar na rotina real", texto: "Atendimento, e-mails, textos, organização de ideias e análise rápida de documentos." },
  { icon: ShieldCheck, titulo: "Usar com segurança", texto: "O que pode e o que não pode entrar na IA ao lidar com dados da empresa." },
];

export const PACOTES_INTRO = "Valores por turma fechada da empresa, de até 20 participantes.";
export const PACOTES = [
  {
    id: "palestra", nome: "Palestra de IA", duracao: "1h a 1h30", preco: "R$ 600",
    para: "Eventos internos, semanas de inovação e convenções. Desperta o time para usar IA de forma prática e segura.",
    formato: "Online ao vivo ou presencial",
    itens: [
      "Apresentação dinâmica, sem tecniquês",
      "Demonstração ao vivo das principais ferramentas (Gemini, ChatGPT, Perplexity)",
      "Boas práticas de segurança e privacidade",
      "Material resumido em PDF com links e dicas",
      "Bloco final de perguntas e respostas",
    ],
    nota: "Valor do formato online padrão. Presencial ou roteiro 100% personalizado para o seu setor: orçado sob medida.",
    mensagem: "Olá, Karen! Quero uma Palestra de IA para a minha empresa (a partir de R$ 600). Empresa: ___ | Nº de participantes: ___ | Formato (online/presencial): ___",
  },
  {
    id: "workshop", nome: "Workshop Prático", duracao: "2h30 a 3h", preco: "R$ 1.200", destaque: true, selo: "Mão na massa",
    para: "Equipes que precisam sair da teoria e aplicar IA já nas entregas. Os participantes criam e ajustam comandos ao vivo comigo.",
    formato: "Online ao vivo ou presencial",
    itens: [
      "Como pedir para a IA e receber respostas prontas para uso",
      "Prática guiada: atendimento, e-mails, textos, ideias e análise de documentos",
      "Intervalo rápido e exercícios ao vivo",
      "Guia de Prompts em PDF para a equipe consultar depois",
      "Certificado digital de participação",
    ],
    nota: "Valor da turma online com material padrão. Diagnóstico prévio ou assistentes sob medida têm orçamento personalizado.",
    mensagem: "Olá, Karen! Quero um Workshop Prático de IA para a minha empresa (a partir de R$ 1.200). Empresa: ___ | Nº de participantes: ___ | Formato (online/presencial): ___",
  },
  {
    id: "imersao", nome: "Imersão Aplicada", duracao: "4h em 2 encontros", preco: "R$ 1.800",
    para: "Quem quer ir mais fundo: criar assistentes e fluxos da rotina real da equipe, em dois encontros de 2 horas.",
    formato: "Online ao vivo",
    itens: [
      "Diagnóstico prévio das rotinas da equipe",
      "Criação guiada de assistentes e fluxos reais durante as aulas",
      "Gravação para a equipe rever por 30 dias",
    ],
    nota: "Assistentes entregues prontos e configurados depois do treinamento são orçados à parte.",
    mensagem: "Olá, Karen! Quero uma Imersão Aplicada de IA para a minha empresa (a partir de R$ 1.800). Empresa: ___ | Nº de participantes: ___",
  },
];

export const ADICIONAIS_INTRO = "Cada empresa está em um momento. Se você precisar ir além do pacote, eu incluo:";
export const ADICIONAIS = [
  { icon: SearchCheck, titulo: "Diagnóstico e exemplos do seu setor", texto: "Reunião prévia para adaptar exemplos e exercícios aos processos reais da sua empresa." },
  { icon: Bot, titulo: "Assistentes personalizados (Gems / GPTs)", texto: "Assistentes prontos e configurados para a equipe usar no atendimento, vendas ou administrativo." },
  { icon: Video, titulo: "Direito de gravação", texto: "Aula gravada para treinar novos colaboradores. Adicional de 20% a 30% sobre o valor base." },
  { icon: MapPin, titulo: "Formato presencial", texto: "Eventos na sua empresa, na Grande São Paulo e Alto Tietê. Deslocamento e estrutura orçados conforme o local." },
];

export const PASSOS = [
  { n: "1", titulo: "Você me chama", texto: "Conta o que a equipe faz hoje e onde o tempo está indo embora." },
  { n: "2", titulo: "Eu indico o formato", texto: "Você recebe a sugestão ideal e o valor fechado, sem surpresa." },
  { n: "3", titulo: "Treino ao vivo", texto: "Sua equipe aprende na prática e sai pronta para aplicar na semana seguinte." },
];
