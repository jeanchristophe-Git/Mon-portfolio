import Image from "next/image";
import landingData from "../data/landing.json";

export default function Expertise() {
  const { expertise } = landingData;

  return (
    <section id="expertise" className="mx-auto max-w-6xl px-4 py-28">
      
      {/* Header de section */}
      <div className="text-center text-[15px] italic text-zinc-300">{expertise.title}</div>
      <h2 className="mt-2 text-center text-4xl font-bold text-white md:text-5xl">
         {expertise.subtitle}
      </h2>

      {/* Grille des domaines d'expertise */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {expertise.items.map((area, index) => (
          <article 
            key={area.title} 
            className="rounded-[26px] border border-white/10 bg-black/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)]"
          >
            
            {/* Image d'illustration du domaine */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden relative">
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Titre du domaine */}
            <h3 className="mt-5 text-xl font-semibold text-white">
              {area.title}
            </h3>
            
            {/* Description détaillée */}
            <p className="mt-2 text-sm text-zinc-300">
              {area.description}
            </p>
            
            {/* Tags de compétences */}
            <div className="mt-4 flex flex-wrap gap-2">
              {area.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}