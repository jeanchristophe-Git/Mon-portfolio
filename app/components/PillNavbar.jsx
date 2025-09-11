/**
 * Composant PillNavbar - Barre de navigation en forme de pilule
 * 
 * Navigation sticky avec design en pilule arrondie, centrée en haut de la page
 * Gère l'état actif, navigation smooth scroll et menu mobile
 * 
 * Props:
 * - active: string - ID de la section actuellement active
 * - onJump: function - Callback pour naviguer vers une section
 * - open: boolean - État d'ouverture du menu mobile
 * - setOpen: function - Fonction pour modifier l'état du menu mobile
 * 
 * Caractéristiques:
 * - Design responsive (desktop pill / mobile hamburger)
 * - Backdrop blur pour transparence
 * - Indicateur actif avec animation
 * - Menu mobile en overlay
 */

import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "acceuil" },
  { id: "expertise", label: "travaux" },
  { id: "about", label: "A propos", isExternal: true, href: "/about" },
  { id: "resume", label: "curriculum vitae ↗" },
];

export default function PillNavbar({ active, onJump, open, setOpen }) {
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto flex max-w-[940px] items-center justify-center px-4">
        
        {/* Version Desktop - Navigation en pilule */}
        <div className="relative hidden w-full items-center justify-between rounded-[28px] border border-white/10 bg-black/70 px-4 py-1.5 text-sm backdrop-blur md:flex shadow-[inset_0_1px_0_rgba(255,255,255,.04),inset_0_-1px_0_rgba(255,255,255,.06)]">
          
          {/* Logo/Nom */}
          <a 
            href="/"
            className="rounded-full bg-white px-3 py-1 font-semibold text-black text-decoration-none"
          >
            JCB.
          </a>
          
          {/* Navigation principale */}
          <nav className="flex items-center gap-7">
            {NAV_ITEMS.map((navItem) => {
              // Gestion des liens externes vs navigation interne
              if (navItem.isExternal) {
                return (
                  <a
                    key={navItem.id}
                    href={navItem.href}
                    className="relative pb-1 transition-opacity opacity-70 hover:opacity-100"
                  >
                    {navItem.label}
                  </a>
                );
              }
              
              const targetId = navItem.id === "resume" ? "contact" : navItem.id;
              const isActive = active === targetId;
              
              return (
                <button
                  key={navItem.id}
                  onClick={() => onJump(targetId)}
                  className={`relative pb-1 transition-opacity hover:opacity-100 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {navItem.label}
                  {/* Indicateur de section active */}
                  <span 
                    className={`pointer-events-none absolute -bottom-1 left-1/2 h-[3px] w-1 -translate-x-1/2 rounded-full bg-white/90 transition-opacity ${
                      isActive ? "opacity-90" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
          
          {/* Bouton Contact avec gradient */}
          <button 
            onClick={() => onJump("contact")} 
            className="rounded-full bg-[linear-gradient(180deg,#1ea1ff,#0b61ff)] px-4 py-2 font-semibold text-white shadow-[0_10px_24px_rgba(13,97,255,.35)] ring-1 ring-white/20"
          >
            Contact
          </button>
        </div>
        
        {/* Version Mobile - Barre compacte */}
        <div className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur md:hidden">
          <a 
            href="/"
            className="rounded bg-white px-2 py-1 text-xs font-semibold text-black text-decoration-none"
          >
            JCB.
          </a>
          <button 
            onClick={() => setOpen(true)} 
            className="rounded-lg p-2 text-white/80" 
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5"/>
          </button>
        </div>
      </div>

      {/* Menu Mobile - Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60" 
            onClick={() => setOpen(false)} 
          />
          
          {/* Panel du menu */}
          <div className="absolute inset-x-0 bottom-0 rounded-t-2xl border border-white/10 bg-[#111] p-4">
            
            {/* Header du menu mobile */}
            <div className="mb-2 flex items-center justify-between">
              <a 
                href="/"
                className="rounded bg-white px-2 py-1 text-xs font-semibold text-black text-decoration-none"
              >
               JCB.
              </a>
              <button 
                onClick={() => setOpen(false)} 
                className="rounded-lg p-2 hover:bg-white/5"
              >
                <X className="h-5 w-5"/>
              </button>
            </div>
            
            {/* Navigation mobile */}
            <nav className="grid gap-1 text-sm">
              {NAV_ITEMS.map((navItem) => {
                // Gestion des liens externes vs navigation interne pour mobile
                if (navItem.isExternal) {
                  return (
                    <a 
                      key={navItem.id} 
                      href={navItem.href}
                      className="rounded-lg px-2 py-2 text-left hover:bg-white/5"
                    >
                      {navItem.label}
                    </a>
                  );
                }
                
                return (
                  <button 
                    key={navItem.id} 
                    onClick={() => onJump(navItem.id === "resume" ? "contact" : navItem.id)} 
                    className="rounded-lg px-2 py-2 text-left hover:bg-white/5"
                  >
                    {navItem.label}
                  </button>
                );
              })}
              
              {/* Bouton Contact mobile */}
              <button 
                onClick={() => onJump("contact")} 
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#1ea1ff,#0b61ff)] px-4 py-2 font-semibold text-white ring-1 ring-white/20"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}