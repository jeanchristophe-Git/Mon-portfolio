"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

/**
 * Page 404 Not Found personnalisée
 * Affichage élégant avec animations et navigation de retour
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        {/* Illustration 404 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.h1
              className="text-[12rem] md:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-900"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              404
            </motion.h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-zinc-700" />
            </motion.div>
          </div>
        </motion.div>

        {/* Titre et Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page introuvable
          </h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-md mx-auto">
            Oups ! La page que vous recherchez semble s'être perdue dans le cyberespace.
            Peut-être a-t-elle été déplacée ou n'existe plus.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-black font-semibold hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b0b0b]"
          >
            <Home className="h-5 w-5" />
            Retour à l'accueil
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3 text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b0b0b]"
          >
            <ArrowLeft className="h-5 w-5" />
            Page précédente
          </button>
        </motion.div>

        {/* Suggestions de liens */}
        <motion.div
          className="mt-16 pt-8 border-t border-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-zinc-500 mb-4">
            Vous cherchez peut-être :
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/#work"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline"
            >
              Mes projets
            </Link>
            <span className="text-zinc-700">•</span>
            <Link
              href="/about"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline"
            >
              À propos
            </Link>
            <span className="text-zinc-700">•</span>
            <Link
              href="/#contact"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline"
            >
              Contact
            </Link>
            <span className="text-zinc-700">•</span>
            <Link
              href="/playground"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline"
            >
              Playground
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
