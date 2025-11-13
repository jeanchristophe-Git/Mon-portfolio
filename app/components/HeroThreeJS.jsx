"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { gsap } from "gsap";
import heroData from "../data/landing/hero.json";
import profileData from "../data/personal/profile.json";

/**
 * Sphere 3D animée avec distorsion (effet Apple/Vercel)
 */
function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotation douce
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;

    // Mouvement de hover subtil
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#21a1ff"
        attach="material"
        distort={0.4} // Niveau de distorsion
        speed={2} // Vitesse d'animation
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

/**
 * Composant Hero avec animation Three.js style Apple
 *
 * Effets :
 * - Sphere 3D avec distorsion fluide
 * - Gradient animé en arrière-plan
 * - Animations texte GSAP
 * - Parallax souris
 */
export default function HeroThreeJS({ onJump }) {
  const hero = heroData;
  const personal = profileData;

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline pour les animations d'entrée
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
        .from(
          descRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );

      // Parallax sur le canvas selon la souris
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(canvasContainerRef.current, {
          x,
          y,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });

    return () => ctx.revert();
  }, []);

  /**
   * Parse le titre en remplaçant les <br/> par des sauts de ligne JSX
   */
  const renderTitle = () => {
    const parts = hero.title.split("<br/>");
    return parts.map((part, index) => (
      <span
        key={index}
        style={{
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            display: "inline-block",
          }}
        >
          {part}
        </span>
        {index < parts.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <section
      id="home"
      className="section_home_header hero"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background gradient animé */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(33, 161, 255, 0.1) 0%, transparent 50%)",
          animation: "pulseGlow 8s ease-in-out infinite",
        }}
      />

      {/* Three.js Canvas */}
      <div
        ref={canvasContainerRef}
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "600px",
          height: "600px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            {/* Lumières */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#21a1ff" />

            {/* Sphere animée */}
            <AnimatedSphere />

            {/* Controls optionnels (désactiver pour pas de contrôle utilisateur) */}
            {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
          </Suspense>
        </Canvas>
      </div>

      <div className="padding-global" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="container-large">
          <div className="hero-title-wrapper">
            <div className="max-width-large hero">
              {/* Label */}
              <div className="animation_lottie align-centre">
                <div className="label is_fixed text-color-grey">{hero.subtitle}</div>
              </div>

              {/* Titre principal */}
              <h1
                ref={titleRef}
                className="text-align-center text-color-white text-4xl md:text-6xl lg:text-7xl font-bold mt-8"
                style={{
                  perspective: "1000px",
                }}
              >
                {renderTitle()}
              </h1>

              {/* Description */}
              <p
                ref={descRef}
                className="text-color-grey hero-text mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                {hero.description}
              </p>

              {/* Button CTA */}
              <div ref={ctaRef} className="button-group align-center mobile mt-12 text-center">
                <button onClick={() => onJump("about")} className="button is-small w-button">
                  {hero.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
