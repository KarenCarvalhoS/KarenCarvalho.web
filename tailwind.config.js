/** Paleta e fontes do site. Mude as cores aqui e tudo se atualiza. */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        o1: "#1B2418", o2: "#232D1F", o3: "#2C3825",   // verde oliva escuro (fundos)
        olive: "#606C38", olive2: "#556B2F",           // verde oliva elegante
        t1: "#D96B43", t2: "#C85A32", t3: "#B7472A",   // terracota (destaques)
        ivory: "#F4F4F0", mist: "#A9B09A",             // textos
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
