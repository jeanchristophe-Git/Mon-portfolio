/**
 * Composant NoiseBG - Arrière-plan avec texture grain de film
 * 
 * Crée un effet de texture subtile en arrière-plan pour donner du grain au design
 * Utilise un SVG généré pour créer l'effet de bruit (noise)
 * 
 * Caractéristiques:
 * - Position fixe couvrant tout l'écran
 * - Z-index négatif pour rester derrière le contenu
 * - Effet de turbulence fractal pour le grain
 * - Gradient de vignettage pour obscurcir les bords
 * - Non interactif (pointer-events-none)
 */

export default function NoiseBG() {
  // SVG encodé pour créer l'effet de grain de film
  const NOISE = encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.035'/></svg>"
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Couche de bruit/grain */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml;utf8,${NOISE}")` 
        }} 
      />
      {/* Gradient de vignettage pour obscurcir les bords */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.35),transparent_20%,transparent_80%,rgba(0,0,0,.35))]" />
    </div>
  );
}