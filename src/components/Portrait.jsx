import foto from "../assets/karen.jpg"; // para trocar a foto, substitua o arquivo em src/assets

// Foto com moldura orgânica e borda terracota
export default function Portrait({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="organic absolute -inset-3 rotate-[-4deg] border border-t1/60" />
      <div className="organic absolute -inset-1 bg-t1/20 blur-2xl" />
      <div className="organic relative aspect-[4/5] overflow-hidden border-[3px] border-t1/80 bg-o3 shadow-2xl">
        <img src={foto} alt="Karen Carvalho, consultora de tecnologia e IA" className="h-full w-full object-cover object-top" />
      </div>
      <div className="glass absolute -bottom-4 -left-2 rounded-2xl px-4 py-3 sm:-left-6">
        <p className="font-serif text-base leading-tight">Karen Carvalho</p>
        <p className="text-xs text-mist">Tecnologia & IA</p>
      </div>
    </div>
  );
}
