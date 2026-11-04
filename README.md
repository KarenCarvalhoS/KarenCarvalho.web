# Site Karen Carvalho | Consultora de Tecnologia & IA

React + Vite + Tailwind CSS + lucide-react + React Router.

## Rodar no computador
```bash
npm install
npm run dev      # abre em http://localhost:5173
```

## Publicar
```bash
npm run build    # gera a pasta dist/
```
Envie a pasta `dist/` (ou conecte o repositório) para Netlify ou Vercel. Os arquivos `public/_redirects` e `vercel.json` já cuidam das rotas.

## Onde editar cada coisa
| O que mudar | Arquivo |
|---|---|
| Telefone, e-mail, Instagram | `src/data/contato.js` |
| Serviços, preços e textos dos cards | `src/data/servicos.js` |
| Cores e fontes | `tailwind.config.js` |
| Foto | substituir `src/assets/karen.jpg` |
| Página Início (título, subtítulo) | `src/pages/Inicio.jsx` |
| Página Consultoria | `src/pages/Consultoria.jsx` |
| Página Workshops & Palestras (preço, mensagem) | `src/pages/Palestras.jsx` |
| Página Sobre (texto de apresentação) | `src/pages/Sobre.jsx` |
| Formulário de diagnóstico | `src/components/DiagnosticoForm.jsx` |
| Menu e rodapé | `src/components/Header.jsx` e `Footer.jsx` |

Dica: palavras em *itálico terracota* usam `<It>…</It>` e em **negrito** usam `<Bd>…</Bd>`.
