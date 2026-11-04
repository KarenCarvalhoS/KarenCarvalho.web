import { ArrowRight } from "lucide-react";
import { Btn, Bd, It, IconBox, Section } from "../components/ui.jsx";
import Portrait from "../components/Portrait.jsx";
import DiagnosticoForm from "../components/DiagnosticoForm.jsx";
import { PILARES } from "../data/servicos.js";

export default function Inicio() {
  const irParaFormulario = () => document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* HERO */}
      <Section className="grid items-center gap-14 pt-12 sm:pt-20 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <span className="inline-flex rounded-full bg-t1/15 px-4 py-1.5 text-xs font-semibold text-t1">Consultoria técnica para empresas</span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Transforme processos manuais em <It>eficiência operacional</It> com <Bd>Inteligência Artificial</Bd>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Sou consultora técnica e resolvo gargalos reais: notas fiscais que consomem horas, planilhas bagunçadas, processos sem padrão e páginas que não convertem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn onClick={irParaFormulario}>Fazer diagnóstico rápido<ArrowRight size={18} /></Btn>
            <Btn variant="secondary" to="/consultoria">Ver serviços</Btn>
          </div>
        </div>
        <Portrait className="mx-auto w-[78%] max-w-sm lg:max-w-none" />
      </Section>

      {/* 3 PILARES */}
      <Section className="mt-24 grid gap-5 md:grid-cols-3">
        {PILARES.map((p) => (
          <article key={p.n} className="glass rounded-[2rem] p-7">
            <div className="flex items-center justify-between">
              <IconBox icon={p.icon} />
              <span className="font-serif text-2xl text-olive">{p.n}</span>
            </div>
            <h3 className="mt-6 font-serif text-xl">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{p.texto}</p>
          </article>
        ))}
      </Section>

      {/* DIAGNÓSTICO */}
      <Section id="diagnostico" className="mt-24 scroll-mt-24">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            <Bd>Diagnóstico Rápido:</Bd> <It>qual é o gargalo da sua empresa hoje?</It>
          </h2>
          <p className="mt-3 text-mist">Leva menos de dois minutos. Eu respondo com um caminho prático.</p>
        </div>
        <DiagnosticoForm />
      </Section>
    </>
  );
}
