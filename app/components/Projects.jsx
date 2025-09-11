import Image from "next/image";
import landingData from "../data/landing.json";

export default function Projects() {
  const { projects } = landingData;

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 pb-24">
      
      {/* Header de section */}
      <div className="text-center text-[15px] italic text-zinc-300">{projects.title}</div>
      <h2 className="mt-2 text-center text-4xl font-bold text-white md:text-5xl">
         {projects.subtitle}
      </h2>
      
      {/* Grille de projets */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <article 
            key={project.title} 
            className="rounded-[26px] border border-white/10 bg-black/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)]"
          >
            
            {/* Screenshot du projet */}
            <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            
            {/* Titre du projet */}
            <h3 className="mt-4 text-lg font-semibold text-white">
              {project.title}
            </h3>
            
            {/* Description courte */}
            <p className="mt-1 text-sm text-zinc-300">
              {project.description}
            </p>
          </article>
        ))}
      </div>
      
      {/* Note et CTA pour plus de projets */}
      <div className="mt-10 text-center text-sm text-zinc-400">
        *D'autres projets et études de cas sont disponibles sur demande.
      </div>
      
      <div className="mt-4 text-center">
        <button className="rounded-full bg-[linear-gradient(180deg,#21a1ff,#0a62ff)] px-5 py-2 text-sm font-semibold text-white">
          Me contacter
        </button>
      </div>
    </section>
  );
}