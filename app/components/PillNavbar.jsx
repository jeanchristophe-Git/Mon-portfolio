"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import landingData from "../data/landing.json";

const NAV_ITEMS = [
  { id: "home", label: "Accueil" },
  { id: "expertise", label: "Expertise" },
  { id: "work", label: "Projets" },
  { id: "about", label: "À propos", isExternal: true, href: "/about" },
  { id: "playground", label: "Playground", isExternal: true, href: "/playground" },
];

export default function PillNavbar({ active, onJump, open, setOpen }) {
  const { personal, navigation } = landingData;
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo/Brand */}
          <motion.a 
            href="/"
            className="text-lg font-bold text-white hover:text-zinc-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {personal.brand}
          </motion.a>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((navItem, index) => {
              if (navItem.isExternal) {
                return (
                  <motion.a
                    key={navItem.id}
                    href={navItem.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {navItem.label}
                  </motion.a>
                );
              }
              
              const isActive = active === navItem.id;
              
              return (
                <motion.button
                  key={navItem.id}
                  onClick={() => onJump(navItem.id)}
                  className={`relative text-sm transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {navItem.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>
          
          {/* Bouton Contact Desktop */}
          <motion.button 
            onClick={() => onJump("contact")} 
            className="hidden md:flex rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-zinc-100 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
          
          {/* Bouton Menu Mobile */}
          <motion.button 
            onClick={() => setOpen(true)} 
            className="md:hidden rounded-lg p-2 text-zinc-400 hover:text-white transition-colors" 
            aria-label="Open menu"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Menu className="h-5 w-5"/>
          </motion.button>
        </div>
      </div>

      {/* Menu Mobile - Overlay */}
      {open && (
        <motion.div 
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Panel du menu */}
          <motion.div 
            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-zinc-900 border-l border-zinc-800"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header du menu mobile */}
            <div className="flex h-16 items-center justify-between px-6 border-b border-zinc-800">
              <span className="text-lg font-bold text-white">
                {personal.brand}
              </span>
              <motion.button 
                onClick={() => setOpen(false)} 
                className="rounded-lg p-2 text-zinc-400 hover:text-white transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5"/>
              </motion.button>
            </div>
            
            {/* Navigation mobile */}
            <div className="p-6">
              <nav className="space-y-4">
                {NAV_ITEMS.map((navItem, index) => {
                  if (navItem.isExternal) {
                    return (
                      <motion.a 
                        key={navItem.id} 
                        href={navItem.href}
                        className="block py-3 text-lg text-zinc-300 hover:text-white transition-colors border-b border-zinc-800/50"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        onClick={() => setOpen(false)}
                      >
                        {navItem.label}
                      </motion.a>
                    );
                  }
                  
                  const isActive = active === navItem.id;
                  
                  return (
                    <motion.button 
                      key={navItem.id} 
                      onClick={() => {
                        onJump(navItem.id);
                        setOpen(false);
                      }} 
                      className={`block w-full py-3 text-left text-lg transition-colors border-b border-zinc-800/50 ${
                        isActive ? "text-white" : "text-zinc-300 hover:text-white"
                      }`}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {navItem.label}
                      {isActive && (
                        <motion.div
                          className="mt-1 h-0.5 bg-white rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>
              
              {/* Bouton Contact mobile */}
              <motion.button 
                onClick={() => {
                  onJump("contact");
                  setOpen(false);
                }} 
                className="mt-8 w-full rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-zinc-100 transition-colors"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}