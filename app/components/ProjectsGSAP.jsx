"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import projectsData from "../data/landing/projects.json";

// Enregistrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Composant Projects avec animations GSAP style Apple
 *
 * Effets implémentés :
 * - Cards 3D au hover avec perspective
 * - Smooth scroll-triggered animations
 * - Staggered animations (animations décalées)
 * - Magnetic buttons (effet aimant)
 * - Parallax subtil sur images
 * - Glow effect au hover
 */
export default function Projects() {
  const projects = projectsData;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const magneticRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre au scroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animations des cartes avec effet stagger (décalé)
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Animation d'entrée au scroll
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          rotation: 5,
          scale: 0.95,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
        });

        // Parallax sur l'image à l'intérieur de la carte
        const image = card.querySelector(".project-image");
        if (image) {
          gsap.to(image, {
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            y: -50,
            ease: "none",
          });
        }

        // Effet 3D au hover (style Apple)
        card.addEventListener("mousemove", (e) => handle3DMove(e, card));
        card.addEventListener("mouseleave", () => handle3DLeave(card));
      });

      // Magnetic effect sur les boutons
      magneticRefs.current.forEach((button) => {
        if (!button) return;

        button.addEventListener("mousemove", (e) => handleMagneticMove(e, button));
        button.addEventListener("mouseleave", () => handleMagneticLeave(button));
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  /**
   * Gestion de l'effet 3D au hover (style Apple)
   * Rotation de la carte selon la position de la souris
   */
  const handle3DMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10deg

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      scale: 1.05,
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",
      duration: 0.5,
      ease: "power2.out",
    });

    // Parallax sur l'image
    const image = card.querySelector(".project-image");
    if (image) {
      gsap.to(image, {
        x: ((x - centerX) / centerX) * 20,
        y: ((y - centerY) / centerY) * 20,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    // Glow effect
    const glow = card.querySelector(".card-glow");
    if (glow) {
      gsap.to(glow, {
        opacity: 1,
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.3,
      });
    }
  };

  /**
   * Reset de l'effet 3D quand la souris quitte
   */
  const handle3DLeave = (card) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
      duration: 0.5,
      ease: "power2.out",
    });

    const image = card.querySelector(".project-image");
    if (image) {
      gsap.to(image, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    const glow = card.querySelector(".card-glow");
    if (glow) {
      gsap.to(glow, {
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  /**
   * Effet magnétique sur les boutons (style Apple)
   */
  const handleMagneticMove = (e, button) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  /**
   * Reset du bouton magnétique
   */
  const handleMagneticLeave = (button) => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section id="work" className="section_home_cases" ref={sectionRef}>
      <div className="padding-global">
        <div className="container-large padding-section-medium">
          <div className="cases_component">

            {/* Section title */}
            <div className="section-title" ref={titleRef}>
              <div className="label text-color-grey">{projects.title}</div>
              <h2 className="text-color-white">{projects.subtitle}</h2>
            </div>

            {/* Project Component Grid */}
            <div className="project_component">

              {/* Layout row three - Projets principaux */}
              <div className="layout_row_three">
                {projects.items.slice(0, 3).map((project, index) => (
                  <a
                    key={project.title}
                    href={`/projects/${project.slug}`}
                    className="service_card w-inline-block apple-card"
                    ref={(el) => (cardsRef.current[index] = el)}
                    style={{
                      transform: "perspective(1000px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Glow effect */}
                    <div
                      className="card-glow"
                      style={{
                        position: "absolute",
                        width: "300px",
                        height: "300px",
                        background: "radial-gradient(circle, rgba(33, 161, 255, 0.3) 0%, transparent 70%)",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        opacity: 0,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        filter: "blur(40px)",
                        zIndex: 0,
                      }}
                    />

                    <div className="services_card-content" style={{ position: "relative", zIndex: 1 }}>
                      <div style={{ overflow: "hidden", borderRadius: "1rem" }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="sm-card-image project-image"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{
                            transition: "transform 0.5s ease",
                            willChange: "transform",
                          }}
                        />
                      </div>

                      <div className="service_card-inner-content">
                        <h3 className="heading-style-h5">
                          {project.title} · <span className="project-type">{project.category}</span>
                        </h3>

                        <p className="text-color-grey">
                          {project.description}
                        </p>

                        <div className="services_card-content-bottom">
                          <div className="button-group">
                            <div
                              className="link magnetic-button"
                              ref={(el) => (magneticRefs.current[index] = el)}
                            >
                              <div className="link">Learn more</div>
                              <div className="link-icon w-embed">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.43 5.92993L20.5 11.9999L14.43 18.0699" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M3.5 12H20.33" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Section disclaimer */}
              <div className="disclaimer-content padding-top padding-medium">
                <p className="text-color-snow">*Plus de projets et études de cas disponibles sur demande.</p>
                <div className="button-group">
                  <a href="mailto:jcbogbe@gmail.com?subject=Hello" className="button is-small w-button">Demander</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .apple-card {
          position: relative;
          transition: all 0.3s ease;
          will-change: transform;
        }

        .magnetic-button {
          cursor: pointer;
          display: inline-block;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
