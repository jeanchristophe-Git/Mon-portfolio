"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import PillNavbar from "../../components/PillNavbar";
import SiteFooter from "../../components/SiteFooter";

// Import des données de projets depuis JSON
import kotaData from "../../data/projects/kota.json";
import webshieldData from "../../data/projects/webshield.json";
import portfolioData from "../../data/projects/portfolio.json";

/**
 * Mapping des données de projets
 * Les données sont maintenant chargées depuis des fichiers JSON séparés
 * pour faciliter la maintenance et la scalabilité
 */
const projectsDetails = {
  "kota": kotaData,
  "webshield": webshieldData,
  "portfolio": portfolioData
};

/**
 * Page de détail d'un projet
 * @param {Object} params - Paramètres de route Next.js
 * @param {string} params.slug - Slug du projet (kota, webshield, portfolio)
 */
export default function ProjectPage({ params }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const project = projectsDetails[params.slug];

  // Redirection 404 si le projet n'existe pas
  if (!project) {
    notFound();
  }

  /**
   * Navigation vers une section
   * Utilise Next.js router au lieu de window.location pour de meilleures performances
   * @param {string} sectionId - ID de la section cible
   */
  const navigateToSection = (sectionId) => {
    if (sectionId === "home") {
      router.push("/");
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-zinc-200">
      <PillNavbar 
        active={activeSection}
        onJump={navigateToSection}
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
      />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            
            {/* Navigation de retour */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link 
                href="/#work" 
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux projets
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Informations du projet */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center rounded-full border border-zinc-700/50 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 mb-6">
                  {project.category} · {project.year}
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  {project.subtitle}
                </p>
                
                {/* Métadonnées */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Client
                    </h3>
                    <p className="text-white">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Durée
                    </h3>
                    <p className="text-white">{project.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Rôle
                    </h3>
                    <p className="text-white">{project.role}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      Équipe
                    </h3>
                    <p className="text-white">{project.team.join(", ")}</p>
                  </div>
                </div>

                {/* Liens d'action */}
                <div className="flex gap-4">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black font-semibold hover:bg-zinc-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Voir le projet
                    </motion.a>
                  )}
                  
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-white hover:bg-zinc-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      Code source
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Image principale */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800/50">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                À propos du projet
              </h2>
              <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                {project.description}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies utilisées */}
        <section className="py-16 bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Technologies utilisées
              </h2>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.tech.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Défis et solutions */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Défis */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Défis rencontrés
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-red-400 mt-3" />
                      <p className="text-zinc-300">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">
                  Solutions apportées
                </h2>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <div className="h-2 w-2 rounded-full bg-green-400 mt-3" />
                      <p className="text-zinc-300">{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités clés */}
        <section className="py-16 bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Fonctionnalités clés
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="h-3 w-3 rounded-full bg-cyan-400 mb-4" />
                  <h3 className="font-semibold text-white">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie d'images */}
        {project.images.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Aperçus du projet
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800/50"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA pour autres projets */}
        <section className="py-16 bg-zinc-900/20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Découvrir d'autres projets
              </h2>
              <p className="text-zinc-400 mb-8">
                Explorez mes autres réalisations et collaborations
              </p>
              
              <motion.a
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black font-semibold hover:bg-zinc-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir tous les projets
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}