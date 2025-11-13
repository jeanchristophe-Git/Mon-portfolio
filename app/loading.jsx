"use client";

import { motion } from "framer-motion";

/**
 * Composant Loading global
 * Affiché pendant le chargement des pages et composants dynamiques
 * Utilise Suspense de React pour les transitions fluides
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center">
      <div className="text-center">
        {/* Logo animé */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-24 h-24 mx-auto">
            {/* Cercle extérieur tournant */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Cercle intérieur pulsant */}
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Texte de chargement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-white mb-2">
            Chargement...
          </h2>
          <p className="text-sm text-zinc-400">
            Préparation du contenu
          </p>
        </motion.div>

        {/* Points animés */}
        <motion.div className="flex gap-2 justify-center mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
