"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import PillNavbar from "../components/PillNavbar";
import Playground from "../components/Playground";
import SiteFooter from "../components/SiteFooter";

export default function PlaygroundPage() {
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
        active="playground"
        onJump={navigateToSection}
        open={false}
        setOpen={() => {}}
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
                href="/#projects" 
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux projets
              </Link>
            </motion.div>

            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center rounded-full border border-zinc-700/50 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400 mb-6">
                  Design Playground
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Expérimentations créatives
                </h1>
                
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                  Un espace dédié à l'exploration et à l'innovation dans le design et le développement
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Composant Playground existant */}
        <Playground />
      </main>

      <SiteFooter />
    </div>
  );
}