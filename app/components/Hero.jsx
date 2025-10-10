"use client";

import { motion } from "framer-motion";
import heroData from "../data/landing/hero.json";
import profileData from "../data/personal/profile.json";

export default function Hero({ onJump }) {
  const hero = heroData;
  const personal = profileData;
  
  return (
    <section id="home" className="section_home_header hero">
      <div className="padding-global">
        <div className="container-large">
          <div className="hero-title-wrapper">
            <div className="max-width-large hero">
              {/* Animation Lottie + Label comme Dinidu */}
              <div className="animation_lottie align-centre">
                <motion.div 
                  className="label is_fixed text-color-grey"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {hero.subtitle}
                </motion.div>
                <div className="icon-animation">
                  <motion.div 
                    className="animation w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { repeat: Infinity, duration: 3 },
                      scale: { repeat: Infinity, duration: 2 },
                    }}
                  />
                </div>
              </div>
              
              {/* Titre principal exactement comme Dinidu */}
              <motion.h1 
                className="text-align-center text-color-white text-4xl md:text-6xl lg:text-7xl font-bold mt-8"
                dangerouslySetInnerHTML={{ __html: hero.title }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              
              {/* Description hero-text comme Dinidu */}
              <motion.p 
                className="text-color-grey hero-text mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {hero.description}
              </motion.p>
            </div>
          </div>
          
          {/* Moving Hero Section - Scroll horizontal vers la droite SEULEMENT comme Dinidu */}
          <motion.div 
            className="moving-hero mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="inside-moving-hero">
              <motion.div 
                className="flex gap-4"
                animate={{ x: ["-100%", "0%"] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 20,
                  ease: "linear" 
                }}
              >
                {/* Duplication pour scroll infini */}
                {[...hero.projectPlaceholders, ...hero.projectPlaceholders, ...hero.projectPlaceholders].map((label, index) => (
                  <div 
                    key={index}
                    className="hero-image flex-shrink-0 w-64 h-48 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center"
                  >
                    <span className="text-zinc-500 text-sm">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Button Group exactement comme Dinidu */}
          <motion.div 
            className="button-group align-center mobile mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button 
              onClick={() => onJump("about")}
              className="button is-small w-button"
            >
              {hero.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}