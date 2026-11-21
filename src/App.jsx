import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Consultoria from "./pages/Consultoria.jsx";
import Palestras from "./pages/Palestras.jsx";
import Sobre from "./pages/Sobre.jsx";
import Sites from "./pages/Sites.jsx";
import Identidade from "./pages/Identidade.jsx";
import Pacotes from "./pages/Pacotes.jsx";
import { useTone } from "./utils/tema.js";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Com #âncora (ex.: /#diagnostico), rola até a seção; senão volta ao topo.
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const tom = useTone();
  useEffect(() => {
    document.documentElement.dataset.tone = tom;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", tom === "green" ? "#3F4A1F" : "#EDE3CD");
  }, [tom]);
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/identidade-visual" element={<Identidade />} />
          <Route path="/pacotes-digitais" element={<Pacotes />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}