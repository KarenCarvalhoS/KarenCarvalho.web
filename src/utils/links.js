import { CONTATO } from "../data/contato.js";

// Link do WhatsApp com a mensagem codificada.
export const waLink = (mensagem) =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`;

// Link de e-mail com assunto e corpo codificados.
export const mailLink = (assunto, corpo) =>
  `mailto:${CONTATO.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
