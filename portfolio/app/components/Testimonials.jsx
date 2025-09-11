import landingData from "../data/landing.json";

export default function Testimonials() {
  const testimonialsList = landingData.testimonials;

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 pb-28">
      {/* Header de section */}
      <div className="text-center text-[15px] italic text-zinc-300">
        Recommandations
      </div>
      <h2 className="mt-2 text-center text-4xl font-bold text-white md:text-5xl">
        Paroles de collaborateurs
      </h2>

      {/* Grille des témoignages */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonialsList.map((t) => (
          <figure
            key={`${t.author}-${t.id}`}
            className="group relative rounded-[26px] border border-white/10 bg-black/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)] transition hover:border-white/20 hover:bg-black/50"
          >
            {/* Header: identité */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <div className="flex h-full w-full items-center justify-center text-xs text-zinc-400">
                  {getInitials(t.author)}
                </div>
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-white">
                  {t.author}
                </div>
                <div className="truncate text-xs text-zinc-400">
                  {t.role}
                  {t.company ? ` • ${t.company}` : ""}
                </div>
              </div>
            </div>

            {/* Citation principale */}
            <blockquote className="mt-4 text-sm leading-relaxed text-zinc-200">
              "{t.quote}"
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}

function getInitials(fullName = "") {
  const parts = fullName.split(" ").filter(Boolean).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() || "").join("");
}