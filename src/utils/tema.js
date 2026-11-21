import { useLocation } from "react-router-dom";

// Tom de cada página: as páginas se alternam entre "light" (creme) e "green" (verde escuro da marca).
// Para trocar, mude o valor. Lembre de ajustar também a lista de verdes no script do index.html.
export const TONS = {
  "/": "light",
  "/sites": "green",
  "/identidade-visual": "light",
  "/pacotes-digitais": "green",
  "/consultoria": "light",
  "/palestras": "green",
  "/sobre": "light",
};

export const tomDoCaminho = (caminho) => TONS[caminho.replace(/\/+$/, "") || "/"] ?? "light";

export function useTone() {
  const { pathname } = useLocation();
  return tomDoCaminho(pathname);
}
