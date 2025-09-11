/**
 * Composant Contact - WebShield AI (coming soon)
 *
 * - Teaser de projet futur (WebShield AI)
 * - Card large avec image et badge "Coming soon"
 * - Sous-texte court orienté produit + sécurité
 * - CTA: Être notifié (mailto pré-rempli) + Contact
 */

export default function Contact() {
  const contactEmail = "hello@jc.design"; // ← change ton email
  const notifySubject = encodeURIComponent("WebShield AI — être notifié");
  const notifyBody = encodeURIComponent(
    "Bonjour JC,\n\nJe souhaite être notifié dès la sortie de WebShield AI.\n\nMerci !"
  );

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 pb-28">
      {/* Header avec teaser */}
      <div className="text-center text-[15px] italic text-zinc-300">
        Quelque chose se prépare.
      </div>
      <h2 className="mt-1 text-center text-2xl font-semibold text-white">
        WebShield AI — coming soon.
      </h2>
      <p className="mt-2 text-center text-sm text-zinc-300">
        Moteur IA de détection d’intrusions web pour PME.{" "}
        <span className="hidden sm:inline">
          Security-by-design, pensé pour le déploiement simple et la scalabilité.
        </span>
      </p>

      {/* Card de preview projet */}
      <div className="relative mx-auto mt-6 max-w-3xl rounded-[26px] border border-white/10 bg-black/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)]">
        {/* Image */}
        <div className="relative">
          <img
            src="/projects/webshield-coming-soon.jpg" // ← mets ton visuel
            alt="WebShield AI — aperçu coming soon"
            className="aspect-[16/9] w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />

          {/* Badges overlay */}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-black/50 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur">
              IA • Sécurité Web
            </span>
            <span className="rounded-full border border-white/10 bg-black/50 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur">
              Coming soon
            </span>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
        <a
          href={`mailto:${contactEmail}?subject=${notifySubject}&body=${notifyBody}`}
          className="rounded-full bg-[linear-gradient(180deg,#21a1ff,#0a62ff)] px-6 py-3 text-sm font-semibold text-white"
        >
          Être notifié
        </a>
      
      </div>

      {/* Note discrète */}
      <p className="mt-3 text-center text-xs text-zinc-400">
        * Démo privée sur demande pour partenaires sélectionnés.
      </p>
    </section>
  );
}
