"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ExternalLink,
  Plus,
  Calendar,
  Globe,
  GraduationCap,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

// Import des composants et données
import PillNavbar from "../components/PillNavbar";
import BackgroundNoise from "../components/BackgroundNoise";
import aboutData from "../data/about.json";

// Composants utilitaires
const NoiseLayer = ({ radius = 16 }) => {
  const NOISE_URI = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.06'/></svg>`;
  
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ 
        backgroundImage: `url(${NOISE_URI})`, 
        backgroundSize: "120px 120px", 
        borderRadius: radius 
      }}
    />
  );
};

const Tag = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-white/85">
    {label}
  </span>
);

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-[28px]">
          {title}
        </h3>
        <span className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition ${open ? "rotate-45" : ""}`}>
          <Plus className="h-4 w-4" />
        </span>
      </button>
      
      {open && (
        <div className="px-5 pb-5 md:px-6 md:pb-6">
          {children}
        </div>
      )}
    </section>
  );
};

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToSection = (sectionId) => {
    if (sectionId === "home") {
      window.location.href = "/";
    } else if (sectionId.includes("#")) {
      window.location.href = sectionId;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-white">
      <BackgroundNoise type="image" imageUrl="/film-grain.jpg" opacity={0.4} />

      <PillNavbar 
        active={activeSection}
        onJump={navigateToSection}
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
      />

      <main className="mx-auto mt-20 max-w-6xl px-10 md:px-6 md:mt-32">
        
        {/* Section Hero */}
        <section className="relative grid gap-6 rounded-3xl border border-white/10 bg-black/60 p-6 md:grid-cols-2 md:p-8">
          <div className="relative flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-[38px] font-extrabold leading-[1.1] tracking-tight md:text-[44px]"
            >
              {aboutData.hero.title}
            </motion.h1>
            <h2 className="mt-2 text-lg text-white/80">{aboutData.hero.subtitle}</h2>
            <p className="mt-4 max-w-xl text-sm/6 text-white/80 md:text-[15px]/7">
              {aboutData.hero.description}
            </p>
          </div>

          {/* Image portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/12"
          >
            <Image
              src={aboutData.profile.image} 
              alt={aboutData.hero.subtitle} 
              width={400}
              height={500}
              className="w-full h-full object-cover" 
              priority
            />
          </motion.div>
        </section>

        {/* Sections Accordéon */}
        <div className="mt-8 space-y-4">
          
          {/* Experience */}
          <Accordion title="Expérience" defaultOpen={true}>
            <div className="space-y-5">
              {aboutData.experiences.map((exp, i) => (
                <article key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                  <div className="italic text-sm text-white/70">
                    <span className="font-semibold not-italic text-white/90">{exp.company}</span> {exp.location}
                  </div>
                  <h4 className="mt-1 text-xl font-semibold text-white md:text-2xl">{exp.role}</h4>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Tag label={exp.dateDisplay} />
                    <Tag label={exp.contractType} />
                    <Tag label={exp.workMode} />
                  </div>
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-white/85">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="list-disc pl-5">{resp}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Accordion>

          {/* Formation */}
          <Accordion title="Formation" defaultOpen={false}>
            <div className="grid gap-5 md:grid-cols-2">
              {aboutData.education.map((edu, i) => (
                <article key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <GraduationCap className="h-4 w-4" />
                    {edu.institution}
                  </div>
                  <h4 className="mt-1 text-lg font-semibold text-white md:text-xl">{edu.degree}</h4>
                  <div className="mt-2 text-xs text-white/70">
                    <Calendar className="mr-1 inline h-3.5 w-3.5" />
                    {edu.displayPeriod}
                  </div>
                  <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-white/85">
                    {edu.achievements.map((achievement, k) => (
                      <li key={k} className="list-disc pl-5">{achievement}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Accordion>

          {/* Certifications */}
          <Accordion title="Certifications" defaultOpen={false}>
            <div className="flex flex-wrap gap-2">
              {aboutData.certifications.map((cert, i) => (
                <Link 
                  key={i} 
                  href={cert.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium text-white/85 hover:bg-white/10"
                >
                  <BadgeCheck className="h-3.5 w-3.5 opacity-80" />
                  <span className="group-hover:underline">{cert.title}</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </Link>
              ))}
            </div>
          </Accordion>

          {/* Compétences */}
          <Accordion title="Compétences" defaultOpen={false}>
            <div className="grid gap-5 md:grid-cols-2">
              {aboutData.skills.categories.map((category, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="text-lg font-semibold text-white mb-3">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, j) => (
                      <span key={j} className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/90">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Valeurs */}
          <Accordion title="Mes Valeurs" defaultOpen={false}>
            <div className="grid gap-5 md:grid-cols-2">
              {aboutData.values.items.map((value, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>

        {/* CTA Final */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-8 text-center">
          <h2 className="text-[42px] font-semibold leading-tight md:text-[48px]">
            Prêt pour de nouveaux défis
          </h2>
          <div className="mt-5 flex justify-center">
            <Link 
              href="/#contact" 
              className="rounded-full bg-[#0B84FF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(11,132,255,0.35)] hover:brightness-110"
            >
              Me contacter
            </Link>
          </div>
        </section>

        <div className="h-10" />
      </main>
    </div>
  );
}