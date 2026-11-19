import { useLocation } from "react-router-dom";

// Tom de cada página: as páginas se alternam entre claras e escuras.
// Para trocar, mude "light" por "dark" (e vice-versa). Lembre de ajustar também o script no index.html.
export const TONS = {
  "/": "light",
  "/sites": "dark",
  "/consultoria": "light",
  "/palestras": "dark",
  "/sobre": "light",
};

export const tomDoCaminho = (caminho) => TONS[caminho.replace(/\/+$/, "") || "/"] ?? "light";

export function useTone() {
  const { pathname } = useLocation();
  return tomDoCaminho(pathname);
}
