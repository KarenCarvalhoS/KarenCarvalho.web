import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Btn } from "./ui.jsx";
import { waLink, mailLink } from "../utils/links.js";

const VAZIO = { nome: "", empresa: "", contato: "", problema: "" };

export default function DiagnosticoForm() {
  const [f, setF] = useState(VAZIO);
  const [erros, setErros] = useState({});
  const set = (campo) => (e) => setF({ ...f, [campo]: e.target.value });

  // Validação antes de enviar
  function validar() {
    const e = {};
    const contato = f.contato.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contato);
    const telOk = contato.replace(/\D/g, "").length >= 10;
    if (f.nome.trim().length < 2) e.nome = "Informe seu nome.";
    if (f.empresa.trim().length < 2) e.empresa = "Informe o nome da empresa.";
    if (!emailOk && !telOk) e.contato = "Use um e-mail válido ou WhatsApp com DDD.";
    if (f.problema.trim().length < 10) e.problema = "Descreva o gargalo em pelo menos 10 caracteres.";
    setErros(e);
    return Object.keys(e).length === 0;
  }

  // Texto da mensagem (edite aqui para mudar o que chega até você)
  const mensagem = () =>
    `Olá, Karen! Gostaria de um diagnóstico rápido.\n\nNome: ${f.nome.trim()}\nEmpresa: ${f.empresa.trim()}\nContato: ${f.contato.trim()}\n\nGargalo atual:\n${f.problema.trim()}`;

  const enviarWhatsApp = () => validar() && window.open(waLink(mensagem()), "_blank", "noopener");
  const enviarEmail = () => validar() && (window.location.href = mailLink(`Diagnóstico rápido - ${f.empresa.trim()}`, mensagem()));

  const Erro = ({ campo }) => (erros[campo] ? <p className="mt-1 text-xs text-t1">{erros[campo]}</p> : null);

  return (
    <form onSubmit={(e) => e.preventDefault()} noValidate className="glass rounded-[2rem] p-6 sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-mist">Nome
          <input className="field mt-1" value={f.nome} onChange={set("nome")} placeholder="Seu nome" /><Erro campo="nome" />
        </label>
        <label className="block text-sm text-mist">Nome da empresa
          <input className="field mt-1" value={f.empresa} onChange={set("empresa")} placeholder="Sua empresa" /><Erro campo="empresa" />
        </label>
        <label className="block text-sm text-mist sm:col-span-2">WhatsApp ou e-mail
          <input className="field mt-1" value={f.contato} onChange={set("contato")} placeholder="(11) 90000-0000 ou voce@empresa.com" /><Erro campo="contato" />
        </label>
        <label className="block text-sm text-mist sm:col-span-2">
          Descreva qual problema técnico ou gargalo operacional eu posso solucionar para o seu negócio hoje.
          <textarea rows={5} className="field mt-2" value={f.problema} onChange={set("problema")}
            placeholder="Ex: Nossas notas fiscais tomam 10 horas semanais para organizar; ou precisamos de uma Landing Page rápida para a nova campanha..." />
          <Erro campo="problema" />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Btn onClick={enviarWhatsApp}><MessageCircle size={18} />Enviar para o WhatsApp</Btn>
        <Btn variant="secondary" onClick={enviarEmail}><Mail size={18} />Enviar por E-mail</Btn>
      </div>
    </form>
  );
}
