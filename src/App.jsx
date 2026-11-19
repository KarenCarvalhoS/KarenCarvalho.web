import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Consultoria from "./pages/Consultoria.jsx";
import Palestras from "./pages/Palestras.jsx";
import Sobre from "./pages/Sobre.jsx";
import Sites from "./pages/Sites.jsx";
import { useTone } from "./utils/tema.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const tom = useTone();
  useEffect(() => {
    document.documentElement.dataset.tone = tom;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", tom === "dark" ? "#5E6B2E" : "#EDE3CD");
  }, [tom]);
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sites" element={<Sites />} />
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