/**
 * Composant FAQSection - Section Foire Aux Questions
 * 
 * Affiche une liste de questions/réponses dans des éléments <details> expandables
 * Utilise les éléments HTML natifs pour l'accessibilité et l'animation
 * 
 * Caractéristiques:
 * - Éléments <details>/<summary> natifs HTML pour l'accessibilité
 * - Animation de chevron avec rotation via CSS (group-open:)
 * - Questions et réponses facilement modifiables
 * - Design cohérent avec les autres sections
 * - Responsive et optimisé pour mobile
 */

import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  // Données FAQ - facilement modifiables pour CMS futur
  const faqItems = [
  { 
    question: "Quels services proposes-tu ?", 
    answer: "Product engineering (web & mobile), MVP sécurisé, audits OWASP, intégration paiement, dashboards, et déploiement cloud."
  },
  { 
    question: "Avec quels outils/tech utilises-tu ?", 
    answer: "Frontend: React, Next.js, Tailwind. Backend: NestJS, Prisma, PostgreSQL. Mobile: React Native/Expo. DevOps: Docker, Railway. Sécurité: OWASP ZAP, Burp (bases)."
  },
  { 
    question: "Comment se passe la collaboration ?", 
    answer: "Cadrage des objectifs, sprints de 1–2 semaines, updates async, revue hebdo. Je m’intègre à votre stack et vos outils."
  },
  { 
    question: "Où es-tu basé ?", 
    answer: "Abidjan (UTC). 100% remote avec recouvrement horaire flexible selon votre fuseau."
  },
  { 
    question: "Comment utilises-tu l’IA dans ton travail ?", 
    answer: "Idéation, accélération des itérations, QA de code et détection d’anomalies. L’IA assiste—les décisions restent humaines."
  },
  { 
    question: "Tu travailles seul ou en équipe ?", 
    answer: "Les deux. Autonome sur des MVP, et à l’aise en équipe pluridisciplinaire (PM, designers, ingénieurs)."
  },
  { 
    question: "Peut-on obtenir une étude de cas détaillée ?", 
    answer: "Oui. Des cas plus complets (process, métriques, choix techniques) sont disponibles sur demande."
  },
  { 
    question: "Et la sécurité/consfidientialité ?", 
    answer: "Security-by-Design (secrets, auth, surface d’attaque), bonnes pratiques OWASP. NDA et accès restreints possibles."
  },
];


  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 pb-24">
      
      {/* Header de section */}
      <div className="text-center text-[15px] italic text-zinc-300">FAQ</div>
      <h2 className="mt-2 text-center text-4xl font-bold text-white md:text-5xl">
        Quick answers
      </h2>
      
      {/* Liste des FAQ */}
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {faqItems.map((faq) => (
          <details 
            key={faq.question} 
            className="group rounded-[18px] border border-white/10 bg-black/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.04),0_10px_25px_rgba(0,0,0,.35)]"
          >
            {/* Summary cliquable avec icône */}
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white/90">
              {faq.question}
              
              {/* Icône chevron avec animation rotation */}
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            
            {/* Contenu de la réponse */}
            <p className="mt-2 text-sm text-zinc-300">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}