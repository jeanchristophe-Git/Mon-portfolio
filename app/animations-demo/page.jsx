"use client";

import { useState } from "react";
import HeroThreeJS from "../components/HeroThreeJS";
import ProjectsGSAP from "../components/ProjectsGSAP";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

/**
 * Page de démonstration des animations
 * Compare Framer Motion vs GSAP/Three.js
 *
 * Accès : http://localhost:3000/animations-demo
 */
export default function AnimationsDemo() {
  const [showGSAP, setShowGSAP] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Header avec toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">
            🎨 Animations Demo
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400">
              {showGSAP ? "GSAP / Three.js" : "Framer Motion"}
            </span>

            <button
              onClick={() => setShowGSAP(!showGSAP)}
              className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Toggle: {showGSAP ? "Voir Framer Motion" : "Voir GSAP"}
            </button>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main className="pt-20">
        {showGSAP ? (
          <>
            {/* Version GSAP / Three.js */}
            <div className="mb-12 px-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <h2 className="text-2xl font-bold mb-2">✨ Version GSAP & Three.js</h2>
                <p className="text-zinc-400">
                  Effets : Cards 3D au hover, Magnetic buttons, Parallax, Sphere 3D animée, Glow effect
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  <li>• <strong>Hero :</strong> Sphere 3D avec distorsion + Parallax souris</li>
                  <li>• <strong>Projects :</strong> Rotation 3D au hover + Magnetic buttons</li>
                  <li>• <strong>Performance :</strong> ScrollTrigger optimisé + Cleanup automatique</li>
                </ul>
              </div>
            </div>

            <HeroThreeJS onJump={() => {}} />
            <ProjectsGSAP />
          </>
        ) : (
          <>
            {/* Version Framer Motion (originale) */}
            <div className="mb-12 px-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700">
                <h2 className="text-2xl font-bold mb-2">🎬 Version Framer Motion (Originale)</h2>
                <p className="text-zinc-400">
                  Effets : Animations fade-in simples, Carousel infini, Stagger basique
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  <li>• <strong>Hero :</strong> Animation rotative simple + Fade-in</li>
                  <li>• <strong>Projects :</strong> Apparition décalée + Hover scale basique</li>
                  <li>• <strong>Performance :</strong> useInView + once:true</li>
                </ul>
              </div>
            </div>

            <Hero onJump={() => {}} />
            <Projects />
          </>
        )}

        {/* Guide rapide */}
        <section className="py-20 px-6 bg-zinc-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              📖 Guide Rapide
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Framer Motion */}
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700">
                <h3 className="text-xl font-bold mb-4 text-zinc-200">Framer Motion</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Facile à utiliser (syntaxe déclarative)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Intégré React (composants motion.*)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>AnimatePresence pour transitions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">~</span>
                    <span>Animations simples/moyennes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Pas de 3D natif</span>
                  </div>
                </div>
              </div>

              {/* GSAP */}
              <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 text-zinc-200">GSAP & Three.js</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Très performant (Timeline optimisée)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Animations complexes (3D, Parallax)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>ScrollTrigger puissant</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Three.js pour effets 3D réels</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">~</span>
                    <span>Courbe d'apprentissage plus élevée</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Code examples */}
            <div className="mt-12 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">🚀 Pour utiliser GSAP dans votre projet :</h3>
                <pre className="bg-zinc-900 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// app/page.js
import HeroThreeJS from "./components/HeroThreeJS";
import ProjectsGSAP from "./components/ProjectsGSAP";

export default function Page() {
  return (
    <>
      <HeroThreeJS onJump={navigateToSection} />
      <ProjectsGSAP />
    </>
  );
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">📚 Documentation complète :</h3>
                <p className="text-zinc-400 mb-2">
                  Consultez le fichier <code className="px-2 py-1 bg-zinc-800 rounded">ANIMATIONS-GUIDE.md</code> pour :
                </p>
                <ul className="space-y-2 text-sm text-zinc-300 ml-4">
                  <li>• Personnalisation des effets 3D</li>
                  <li>• Configuration ScrollTrigger avancée</li>
                  <li>• Optimisations performance</li>
                  <li>• Troubleshooting</li>
                  <li>• Exemples de code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-zinc-500 text-sm border-t border-zinc-800">
        <p>
          Made with ❤️ using{" "}
          <a href="https://greensock.com" target="_blank" className="text-blue-400 hover:underline">
            GSAP
          </a>
          {" & "}
          <a href="https://threejs.org" target="_blank" className="text-purple-400 hover:underline">
            Three.js
          </a>
        </p>
      </footer>
    </div>
  );
}
