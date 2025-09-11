/**
 * Composant SiteFooter - Pied de page du site
 * 
 * Footer avec CTA final pour nouveaux projets et liens sociaux/contact
 * Structure en deux parties : card de contact principale + informations de contact
 * 
 * Caractéristiques:
 * - CTA "Exploring new challenges" dans une card mise en avant
 * - Liens sociaux et informations de contact
 * - Copyright dynamique avec année courante
 * - Statut de disponibilité clairement affiché
 * - Links facilement modifiables pour personnalisation
 */

export default function SiteFooter() {
  // Données de contact - facilement modifiables
  const contactInfo = {
  email: "hello@jcbogbe.com",           // ← mets ton vrai email (ex: contact@...)
  location: "Abidjan, Côte d’Ivoire",   // TZ: UTC (Afrique/Abidjan)
  availability: "Disponible en remote",
  name: "Jean-Christophe Bogbé",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ton-handle" },
    { name: "GitHub",   url: "https://github.com/ton-username" },
    { name: "X",        url: "https://x.com/ton-handle" },
    //{ name: "YouTube",  url: "https://www.youtube.com/@ton-handle" },
    // { name: "Portfolio", url: "https://jcbogbe.com" }, // optionnel si tu veux l’afficher ici
    // { name: "Calendly", url: "https://calendly.com/ton-handle/30min" }, // optionnel prise de RDV
  ],
};


  return (
    <footer className="border-t border-white/10 py-16 text-sm text-zinc-400">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Card CTA principale pour nouveaux projets */}
        <div className="rounded-[26px] border border-white/10 bg-black/40 p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)]">
          
          {/* Titre d'accroche */}
          <h2 className="mb-6 text-3xl font-bold text-white">
            Exploring new challenges
          </h2>
          
          {/* CTA de contact principal */}
          <button className="rounded-full bg-[linear-gradient(180deg,#21a1ff,#0a62ff)] px-6 py-3 font-semibold text-white shadow-[0_8px_20px_rgba(33,161,255,.35)]">
            Contact
          </button>
        </div>
        
        {/* Section informations de contact et liens */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          
          {/* Liens sociaux et informations de contact */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            
            {/* Liens sociaux */}
            {contactInfo.socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                className="hover:text-white"
              >
                {social.name}
              </a>
            ))}
            
            {/* Email de contact */}
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="hover:text-white"
            >
              {contactInfo.email}
            </a>
            
            {/* Localisation */}
            <span>{contactInfo.location}</span>
            
            {/* Statut de disponibilité */}
            <span className="font-medium text-white">
              {contactInfo.availability}
            </span>
          </div>
          
          {/* Copyright */}
          <div className="text-xs">
            © {new Date().getFullYear()} {contactInfo.name}
          </div>
        </div>
      </div>
    </footer>
  );
}