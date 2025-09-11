import Image from "next/image";
import landingData from "../data/landing.json";

export default function Hero({ onJump }) {
  const { hero } = landingData;
  
  return (
    <section id="home" className="mx-auto max-w-5xl px-4 pt-28 text-center md:pt-32">
      
      {/* Sous-titre avec indicateur */}
      <div className="mx-auto max-w-3xl text-[15px] italic text-zinc-300">
        {hero.subtitle}
        <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-cyan-300"/>
      </div>
      
      {/* Titre principal */}
      <h1 
        className="mt-5 text-[44px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[64px] md:text-[92px]"
        dangerouslySetInnerHTML={{ __html: hero.title }}
      />
      
      {/* Description */}
      <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-relaxed text-zinc-300">
        {hero.description}
      </p>
      
      {/* CTA */}
      <div className="mt-10">
        <button 
          onClick={() => onJump("about")} 
          className="rounded-full bg-[linear-gradient(180deg,#21a1ff,#0a62ff)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,98,255,.35)]"
        >
          {hero.cta}
        </button>
      </div>

      {/* Grille de projets */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {hero.projectPlaceholders.map((label, index) => (
          <div 
            key={index} 
            className="rounded-[22px] border border-white/10 bg-black/40 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)]"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
              <span className="text-zinc-500 text-sm">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}