import React from 'react';
import { ArrowRight, Store, Building2 } from "lucide-react";
import { Btn, Bd, It, IconBox, Section } from "../components/ui.jsx";
import logoTagline from "../assets/brand/logo-tagline.svg";
import DiagnosticoForm from "../components/DiagnosticoForm.jsx";
import { PILARES } from "../data/servicos.js";

export default function Inicio() {
  const irParaFormulario = () => document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* HERO */}
      <Section className="grid items-center gap-14 pt-12 sm:pt-20 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <span className="inline-flex rounded-full bg-t1/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ac-bg">Consultoria de tecnologia e IA</span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Sua equipe perde horas em tarefas que a <It>tecnologia</It> faz em <Bd>minutos</Bd>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            Nota fiscal digitada à mão, planilha bagunçada, processo que só uma pessoa sabe fazer, site que não traz cliente. Eu resolvo isso de um jeito simples, sem complicar a sua rotina.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn onClick={irParaFormulario}>Descobrir onde perco tempo<ArrowRight size={18} /></Btn>
            <Btn variant="secondary" to="/consultoria">Ver o que posso resolver</Btn>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md rounded-[2rem] bg-panel p-8 sm:p-10 lg:max-w-none">
          <img src={logoTagline} alt="Karen Carvalho .web: Tecnologia, IA e Automação" className="h-auto w-full" />
        </div>
      </Section>

      {/* 3 PILARES */}
      <Section className="mt-24 grid gap-5 md:grid-cols-3">
        {PILARES.map((p) => (
          <article key={p.n} className="glass rounded-[2rem] p-7">
            <div className="flex items-center justify-between">
              <IconBox icon={p.icon} />
              <span className="font-serif text-2xl text-sec">{p.n}</span>
            </div>
            <h3 className="mt-6 font-serif text-xl">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-soft">{p.texto}</p>
          </article>
        ))}
      </Section>

      {/* PARA QUEM É */}
      <Section className="mt-24">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Empresa pequena ou grande, <It>o problema é parecido</It>.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="glass rounded-[2rem] p-7 sm:p-9">
            <IconBox icon={Store} />
            <h3 className="mt-5 font-serif text-2xl">Se a sua empresa é pequena</h3>
            <p className="mt-3 leading-relaxed text-soft">Você faz de tudo um pouco e o tempo nunca sobra. Eu tiro da sua mão o que é repetitivo e coloco você na internet de um jeito que passa confiança e traz cliente.</p>
          </article>
          <article className="glass rounded-[2rem] p-7 sm:p-9">
            <IconBox icon={Building2} />
            <h3 className="mt-5 font-serif text-2xl">Se a sua empresa é grande</h3>
            <p className="mt-3 leading-relaxed text-soft">Cada setor faz de um jeito e o retrabalho se espalha. Eu padronizo processos, automatizo o que trava e treino o time para usar IA com método e segurança.</p>
          </article>
        </div>
      </Section>

      {/* DIAGNÓSTICO */}
      <Section id="diagnostico" className="mt-24 scroll-mt-24">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            O que mais <Bd>trava</Bd> a sua empresa <It>hoje</It>?
          </h2>
          <p className="mt-3 text-soft">Conte em dois minutos o que mais te atrapalha. Eu respondo com um caminho prático, sem enrolação.</p>
        </div>
        <DiagnosticoForm />
      </Section>
    </>
  );
}
