"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Composants principaux
import BackgroundNoise from "./components/BackgroundNoise";
import PillNavbar from "./components/PillNavbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";

// Composants avec chargement différé pour la performance
const Expertise = dynamic(() => import("./components/Expertise"));
const Projects = dynamic(() => import("./components/Projects"));
const Playground = dynamic(() => import("./components/Playground"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Contact = dynamic(() => import("./components/Contact"));
const FAQSection = dynamic(() => import("./components/FAQSection"));
const SiteFooter = dynamic(() => import("./components/SiteFooter"));

// Page principale du portfolio

export default function PortfolioMain() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Système de scroll-spy pour tracker la section active
  useEffect(() => {
    const sectionIds = ["home", "about", "expertise", "work", "playground", "testimonials", "contact", "faq"];
    
    let ticking = false;
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const visibleEntries = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            
            if (visibleEntries[0]) {
              setActiveSection(visibleEntries[0].target.id);
            }
            
            ticking = false;
          });
          ticking = true;
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.3] }
    );

    sectionElements.forEach((section) => scrollSpyObserver.observe(section));
    return () => scrollSpyObserver.disconnect();
  }, []);

  // Navigation avec scroll fluide
  const navigateToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;
    
    targetElement.scrollIntoView({ 
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-zinc-200">
      
      <BackgroundNoise 
        type="image"
        imageUrl="/film-grain.jpg"
        opacity={0.4}
      />
      
      
      <PillNavbar 
        active={activeSection}
        onJump={navigateToSection}
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
      />
      
      <main className="mx-auto max-w-7xl">
        <Hero onJump={navigateToSection} />
        <AboutSection />
        <Expertise />
        <Projects />
        <Playground />
        <Testimonials />
        <Contact />
        <FAQSection />
      </main>
      
      <SiteFooter />
    </div>
  );
}