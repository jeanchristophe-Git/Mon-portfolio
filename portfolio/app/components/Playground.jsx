/**
 * Composant Playground - Section Code Playground / GitHub
 *
 * 🎯 Objectif
 * - Remplacer la logique "Dribbble" par un playground orienté code (GitHub)
 * - Conserver le style glassmorphism + layout 2 colonnes
 * - Offrir une grille de projets open-source/modèles d’archi facilement éditable
 *
 * 🧩 Points clés
 * - Texte FR concis (aligné à ton site)
 * - CTA principal : "Voir sur GitHub"
 * - Data-driven : modifie le tableau `projects` pour gérer le contenu
 * - Accessible (aria-labels), responsive, clean
 *
 * ✅ Usage
 * - Remplace `githubProfileUrl` par ton profil
 * - Ajoute/règle les projets dans le tableau `projects`
 */

export default function Playground() {
  // Lien vers ton profil GitHub
  const githubProfileUrl = "https://github.com/ton-username";

  // Projets à afficher (modifie librement)
  const projects = [
    {
      id: 1,
      title: "webshield-ai",
      description:
        "Moteur IA de détection d’intrusions web pour PME (MVP/Thèse).",
      tags: ["NestJS", "Python", "PostgreSQL", "Security"],
      stars: 42, // placeholder visuel (sans appel API)
      url: "https://github.com/ton-username/webshield-ai",
      updatedAt: "2025-08-30",
    },
    {
      id: 2,
      title: "kota-platform",
      description:
        "Plateforme d’épargne communautaire (tontine) — approche FinTech.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Cloud"],
      stars: 31,
      url: "https://github.com/ton-username/kota-platform",
      updatedAt: "2025-08-21",
    },
    {
      id: 3,
      title: "nest-docker-starter",
      description:
        "Starter NestJS prêt pour Docker + Prisma. Idéal pour bootstraper.",
      tags: ["NestJS", "Docker", "Prisma"],
      stars: 19,
      url: "https://github.com/ton-username/nest-docker-starter",
      updatedAt: "2025-07-18",
    },
    {
      id: 4,
      title: "next-prisma-auth",
      description:
        "Boilerplate Next.js + Prisma avec auth classique (email/mot de passe).",
      tags: ["Next.js", "Prisma", "Auth"],
      stars: 24,
      url: "https://github.com/ton-username/next-prisma-auth",
      updatedAt: "2025-07-02",
    },
    {
      id: 5,
      title: "rn-expo-starter",
      description: "Starter React Native/Expo pour lancer une app mobile vite.",
      tags: ["React Native", "Expo"],
      stars: 15,
      url: "https://github.com/ton-username/rn-expo-starter",
      updatedAt: "2025-06-11",
    },
    {
      id: 6,
      title: "owasp-checklist",
      description:
        "Checklist OWASP pratique pour intégrer la sécurité dès le jour 1.",
      tags: ["Security", "OWASP"],
      stars: 28,
      url: "https://github.com/ton-username/owasp-checklist",
      updatedAt: "2025-05-29",
    },
  ];

  return (
    <section id="playground" className="mx-auto max-w-6xl px-4 pb-28">
      {/* Card container principale (glassmorphism) */}
      <div className="rounded-[26px] border border-white/10 bg-black/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Colonne gauche - Contenu textuel */}
          <div>
            {/* Label de section */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-white/60" />
              GitHub
            </div>

            {/* Titre principal */}
            <h3 className="mt-2 text-4xl font-bold text-white">
              Code playground
            </h3>

            {/* Description FR courte (alignée à ton site) */}
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300">
              Un espace d’exploration où je teste de nouvelles idées, des
              architectures propres et des solutions atypiques. Retrouvez mes
              projets open-source et expérimentations sur GitHub.
            </p>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap gap-2">
              {/* CTA principal avec gradient */}
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[linear-gradient(180deg,#21a1ff,#0a62ff)] px-4 py-2 text-xs font-semibold text-white"
                aria-label="Voir mon profil GitHub"
                title="Voir mon profil GitHub"
              >
                Voir sur GitHub
              </a>

              {/* Lien secondaire ancre interne (optionnel) */}
              <a
                href="#playground-grid"
                className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/90"
                aria-label="Explorer le playground"
                title="Explorer le playground"
              >
                Explorer le playground
              </a>
            </div>

            {/* Note discrète (optionnelle) */}
            <p className="mt-4 text-xs text-zinc-400">
              *Les étoiles affichées sont indicatives (pas d’appel API GitHub).
            </p>
          </div>

          {/* Colonne droite - Grille visuelle */}
          <div id="playground-grid" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
                aria-label={`Ouvrir ${p.title} sur GitHub`}
                title={`${p.title} • Ouvrir sur GitHub`}
              >
                {/* Header du repo */}
                <div className="flex items-center justify-between">
                  <div className="truncate text-sm font-semibold text-white">
                    {p.title}
                  </div>
                  <div className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-zinc-300">
                    {p.stars}★
                  </div>
                </div>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-300">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer (date MAJ) */}
                <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>Mis à jour le {formatDateFR(p.updatedAt)}</span>
                  <span className="opacity-0 transition group-hover:opacity-100">
                    Ouvrir →
                  </span>
                </div>

                {/* Accent hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition group-hover:ring-white/10" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Formatage rapide de date (YYYY-MM-DD → DD MMM YYYY) en FR
 * Pas d'import externe pour rester léger
 */
function formatDateFR(isoDate) {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return isoDate;
  }
}
