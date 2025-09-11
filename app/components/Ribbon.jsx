/**
 * Composant Ribbon - Badge fixe sur le côté droit
 * 
 * Affiche un petit badge vertical "W. Nominee" fixé sur le côté droit de l'écran
 * Visible uniquement sur desktop (masqué sur mobile)
 * 
 * Caractéristiques:
 * - Position fixe en haut à droite
 * - Z-index élevé pour rester au-dessus du contenu
 * - Couleur teal avec ombre
 * - Masqué sur mobile (md:block)
 */

export default function Ribbon() {
  return (
    <div className="fixed right-3 top-1/3 z-40 hidden rotate-0 md:block">
      <div className="rounded-l-md bg-teal-400 px-3 py-6 text-center font-semibold text-white shadow">
        W.
        <div className="mt-10  text-xs font-medium">Nominee</div>
      </div>
    </div>
  );
}