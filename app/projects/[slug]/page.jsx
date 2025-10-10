"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

import PillNavbar from "../../components/PillNavbar";
import SiteFooter from "../../components/SiteFooter";
import landingData from "../../data/landing.json";

// Données des projets détaillées
const projectsDetails = {
  "kota": {
    title: "KOTA - App de Tontine",
    subtitle: "Application révolutionnaire de tontine moderne pour l'Afrique",
    category: "Mobile App",
    year: "2024",
    client: "Startup",
    duration: "6 mois",
    role: "Lead Developer & Product Designer",
    team: ["Product Manager", "UI/UX Designer", "Backend Developer", "Mobile Developer"],
    description: `KOTA révolutionne les tontines traditionnelles africaines en les digitalisant. Cette application mobile permet aux utilisateurs de créer, rejoindre et gérer des groupes de tontine avec une interface moderne et sécurisée.

Le projet combine les valeurs culturelles africaines avec la technologie moderne pour créer une expérience utilisateur exceptionnelle. J'ai dirigé le développement frontend et l'architecture produit.`,
    
    challenges: [
      "Adapter les pratiques traditionnelles aux technologies modernes",
      "Créer une interface intuitive pour tous les âges",
      "Assurer la sécurité des transactions financières",
      "Gérer les notifications push pour les contributions"
    ],
    
    solutions: [
      "Interface bilingue français/langues locales",
      "Système de notifications intelligent",
      "Architecture sécurisée avec chiffrement end-to-end",
      "Design system culturellement adapté"
    ],
    
    tech: ["React Native", "NestJS", "TypeScript", "PostgreSQL", "Firebase"],
    features: [
      "Gestion de groupes de tontine",
      "Système de paiement intégré",
      "Notifications intelligentes",
      "Chat groupe intégré",
      "Historique complet des transactions",
      "Mode offline"
    ],
    
    images: [
      "/image/projet/kota-1.jpg",
      "/image/projet/kota-2.jpg", 
      "/image/projet/kota-3.jpg"
    ],
    
    mainImage: "/image/projet/kota.jpg",
    links: {
      demo: "#",
      github: "#"
    }
  },
  
  "webshield": {
    title: "WebShield AI",
    subtitle: "Solution de cybersécurité basée sur l'intelligence artificielle",
    category: "Security Tool",
    year: "2024",
    client: "Enterprise",
    duration: "8 mois",
    role: "Security Engineer & AI Specialist", 
    team: ["Security Architect", "ML Engineer", "Backend Developer", "DevOps Engineer"],
    description: `WebShield AI est une solution avancée de cybersécurité qui utilise l'intelligence artificielle pour détecter et prévenir les menaces en temps réel. 

Le système analyse le trafic web, identifie les patterns malveillants et réagit automatiquement pour protéger les applications web contre diverses attaques.`,
    
    challenges: [
      "Détection en temps réel des menaces sophistiquées",
      "Réduction des faux positifs",
      "Performance sur du trafic haute volume",
      "Interface intuitive pour les équipes sécurité"
    ],
    
    solutions: [
      "Modèles ML optimisés pour la détection",
      "Dashboard temps réel avec analytics",
      "API d'intégration flexible", 
      "Système d'alertes intelligent"
    ],
    
    tech: ["Python", "TensorFlow", "FastAPI", "Docker", "Redis", "Elasticsearch"],
    features: [
      "Détection IA des menaces",
      "Dashboard analytics",
      "Alertes en temps réel",
      "API d'intégration",
      "Rapports automatisés",
      "Machine Learning adaptatif"
    ],
    
    images: [
      "/image/projet/webshield-1.jpg",
      "/image/projet/webshield-2.jpg",
      "/image/projet/webshield-3.jpg"
    ],
    
    mainImage: "/image/projet/webshield.jpg",
    links: {
      demo: "#",
      github: "#"
    }
  },
  
  "portfolio": {
    title: "Portfolio Personnel",
    subtitle: "Portfolio moderne avec architecture sécurisée",
    category: "Website", 
    year: "2024",
    client: "Personnel",
    duration: "3 mois",
    role: "Full-Stack Developer & Designer",
    team: ["Designer", "Developer"],
    description: `Mon portfolio personnel construit avec les dernières technologies web. Une vitrine de mes compétences en développement et design, optimisée pour les performances et l'accessibilité.

Le site présente mes projets, compétences et expériences avec une approche modern et interactive.`,
    
    challenges: [
      "Performance optimale sur tous les devices",
      "SEO et accessibilité avancés", 
      "Animations fluides sans impact performance",
      "Design system cohérent et évolutif"
    ],
    
    solutions: [
      "Architecture Next.js optimisée",
      "Animations Framer Motion performantes",
      "Design system Tailwind personnalisé",
      "Optimisations images et assets"
    ],
    
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Design responsive",
      "Animations interactives", 
      "Mode sombre",
      "SEO optimisé",
      "Performance 100/100",
      "Accessibilité WCAG"
    ],
    
    images: [
      "/image/projet/portfolio-1.jpg",
      "/image/projet/portfolio-2.jpg",
      "/image/projet/portfolio-3.jpg"
    ],
    
    mainImage: "/image/projet/portfolio.jpg",
    links: {
      demo: "/",
      github: "#"
    }
  }
};

export default function ProjectPage({ params }) {
  const [activeSection, setActiveSection] = useState("work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const project = projectsDetails[params.slug];
  
  if (!project) {
    notFound();
  }

  const navigateToSection = (sectionId) => {
    if (sectionId === "home") {
      window.location.href = "/";
    } else {
      window.location.href = `/#${sectionId}`;
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