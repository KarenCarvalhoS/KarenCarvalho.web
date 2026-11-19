/** Paleta e fontes do site, conforme o Manual de Identidade Visual 2026.
 *  As cores "semânticas" (page, ink, t1...) mudam sozinhas entre páginas claras e escuras:
 *  os valores ficam em src/index.css (variáveis). As cores fixas da marca ficam aqui. */
const v = (nome) => `rgb(var(--${nome}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Cores fixas da marca (não mudam de página para página)
        creme: "#FAF6EE", areia: "#E8E0CC", olive: "#5E6B2E", musgo: "#3F4A1F", pessego: "#F0A58A", terracota: "#B5532F",
        // Cores que se adaptam ao tom da página (claro ou escuro)
        page: v("page"), surface: v("surface"), panel: v("panel"),
        ink: v("ink"), soft: v("soft"),
        t1: v("t1"), t2: v("t2"), "on-t1": v("on-t1"),
        ac: v("ac"), "ac-bg": v("ac-bg"), sec: v("sec"),
        hl: v("hl"), "on-hl": v("on-hl"), "hl-accent": v("hl-accent"),
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
