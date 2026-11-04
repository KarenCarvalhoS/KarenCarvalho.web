import { MessageCircle } from "lucide-react";
import { Btn, Bd, It, IconBox, Section } from "../components/ui.jsx";
import { GRADE, FORMATOS } from "../data/servicos.js";
import { waLink } from "../utils/links.js";

const MENSAGEM = "Olá, Karen! Gostaria de uma proposta corporativa para palestra/workshop de IA aplicada aos negócios. Empresa: ___ | Nº de participantes: ___ | Formato (remoto/presencial): ___";

export default function Palestras() {
  return (
    <Section className="pt-14">
      <p className="text-sm text-mist">Para empresas de pequeno a grande porte, de qualquer segmento.</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
        Inteligência Artificial Aplicada aos Negócios: <It>Da Teoria à Prática Diária</It>
      </h1>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {GRADE.map((g) => (
          <article key={g.titulo} className="glass flex gap-4 rounded-[2rem] p-7">
            <IconBox icon={g.icon} />
            <div>
              <h3 className="font-serif text-xl">{g.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{g.texto}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {FORMATOS.map((f) => (
          <div key={f.titulo} className="rounded-[2rem] border border-olive bg-olive/25 p-7">
            <p className="text-sm font-semibold text-t1">{f.duracao}</p>
            <h3 className="mt-1 font-serif text-2xl">{f.titulo}</h3>
            <p className="mt-2 text-sm text-mist">{f.texto}</p>
          </div>
        ))}
      </div>

      <div className="glass mt-8 flex flex-col justify-between gap-6 rounded-[2rem] p-8 sm:p-10 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-mist">Investimento</p>
          <p className="font-serif text-3xl sm:text-4xl">A partir de <Bd>R$ 600</Bd></p>
          <p className="mt-1 text-sm text-mist">Formato remoto e turmas enxutas.</p>
        </div>
        <Btn href={waLink(MENSAGEM)}><MessageCircle size={18} />Solicitar proposta corporativa</Btn>
      </div>
    </Section>
  );
}
