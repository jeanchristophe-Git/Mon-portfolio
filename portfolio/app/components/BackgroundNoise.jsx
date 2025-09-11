/**
 * Composant BackgroundNoise - Arrière-plan configurable
 * 
 * Permet de facilement changer l'arrière-plan entre :
 * - Effet noise SVG généré (par défaut)  
 * - Image personnalisée (ex: grain de film, texture)
 * 
 * Props:
 * - type: "svg" | "image" - Type d'arrière-plan
 * - imageUrl: string - URL de l'image (si type="image")
 * - opacity: number - Opacité de l'effet (0-1)
 * - className: string - Classes CSS supplémentaires
 * 
 * Utilisation:
 * <BackgroundNoise type="image" imageUrl="/noise/grain.jpg" opacity={0.3} />
 */

export default function BackgroundNoise({ 
  type = "svg", 
  imageUrl = "/noise/film-grain.jpg", 
  opacity = 0.55,
  className = ""
}) {
  
  // SVG noise généré (version actuelle)
  const SVG_NOISE = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.06'/></svg>`;

  // Style de base pour l'arrière-plan
  const baseStyle = {
    opacity: opacity
  };

  // Style selon le type
  const backgroundStyle = type === "image" 
    ? {
        ...baseStyle,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }
    : {
        ...baseStyle,
        backgroundImage: `url(${SVG_NOISE})`,
        backgroundSize: "120px 120px",
        backgroundRepeat: "repeat"
      };

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
      style={backgroundStyle}
    />
  );
}