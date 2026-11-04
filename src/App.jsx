import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Consultoria from "./pages/Consultoria.jsx";
import Palestras from "./pages/Palestras.jsx";
import Sobre from "./pages/Sobre.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
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
