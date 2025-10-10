"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ExternalLink,
  Plus,
  Minus,
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

// =================== IMPORTS ===================
import PillNavbar from "../components/PillNavbar";
import aboutData from "../data/about.json"; // JSON structure: profile, hero, experiences, education, certifications, skills, values
import SiteFooter from "../components/SiteFooter";

// =================== ACCORDION COMPONENT ===================
// Composant Accordion réutilisable pour Experience, Education, Certifications
const CVAccordion = ({ title, children, defaultOpen = false, isLast = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  
  return (
    <div className={`about_cv_accordion ${isLast ? 'is-last' : ''}`}>
      <motion.div 
        className="about_cv-description"
        onClick={() => setOpen(!open)}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      >
        <h3 className="heading-style-h5 text-color-white">{title}</h3>
        <div className="plus-icon">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
      </motion.div>
      
      <motion.div 
        className="about_cv_list-wrapper"
        initial={{ height: 0 }}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="about_cv_list">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// =================== MAIN ABOUT PAGE COMPONENT ===================
// Page Structure:
// 1. Hero Section - Title and profile intro
// 2. CV Section - Experience, Education, Certifications (Accordions)
// 3. Tools Section - Technologies and skills grid
// 4. About Myself Section - Image + My Beliefs
export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation handler - redirects to home or other sections
  const navigateToSection = (sectionId) => {
    if (sectionId === "home") {
      window.location.href = "/";
    } else if (sectionId.includes("#")) {
      window.location.href = sectionId;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-white">
      <PillNavbar 
        active={activeSection}
        onJump={navigateToSection}
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
      />

      <main>
        
        {/* =================== 1. HERO SECTION =================== */}
        {/* Section d'introduction avec titre et description */}
        <section className="section_about_hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium is-hero">
                <div className="header_component about">
                  
                  {/* Hero Title - Partie gauche */}
                  <motion.div 
                    className="hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="about-title text-color-white">
                      {aboutData.hero.title}
                    </h1>
                    <p className="text-color-grey mt-4">
                      {aboutData.hero.description}
                    </p>
                    
                    <div className="button-group is-padding-top-small mt-8">
                      <a 
                        href="/cv-jean-christophe-bogbe.pdf"
                        target="_blank"
                        className="button is-small w-button mr-4"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download CV
                      </a>
                      
                      <a 
                        href="https://dribbble.com/jcbogbe"
                        target="_blank"
                        className="dribbble_button"
                      >
                        <div className="dribbble_lottie">
                          <motion.div 
                            className="w-6 h-6 rounded-full bg-pink-500"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        </div>
                        Dribbble
                      </a>
                    </div>
                  </motion.div>

                  {/* About Profile - Partie droite */}
                  <motion.div 
                    className="about_profile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="image_profile">
                      <Image
                        src={aboutData.profile.image}
                        alt={aboutData.hero.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== 2. CV SECTION =================== */}
        {/* Accordéons: Expérience, Éducation, Certifications */}
        <section className="section_about_cv">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium fixed-top">
                <div className="about_cv_component">
                  
                  {/* EXPERIENCE ACCORDION - aboutData.experiences */}
                  <CVAccordion title="Experience" defaultOpen={false}>
                    {aboutData.experiences.map((exp, i) => (
                      <motion.div 
                        key={i} 
                        className="about_cv_item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                      >
                        <div className="about_cv_item-content">
                          <div className="about_cv_item-header">
                            <h4 className="heading-style-h5 text-color-white">{exp.role}</h4>
                            <div className="about_cv_item-meta text-color-grey">
                              {exp.company} • {exp.dateDisplay}
                            </div>
                          </div>
                          <div className="about_cv_item-description text-color-grey">
                            {exp.responsibilities.map((resp, j) => (
                              <p key={j}>{resp}</p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CVAccordion>

                  {/* EDUCATION ACCORDION - aboutData.education */}
                  <CVAccordion title="Education">
                    {aboutData.education.map((edu, i) => (
                      <motion.div 
                        key={i} 
                        className="about_cv_item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                      >
                        <div className="about_cv_item-content">
                          <div className="about_cv_item-header">
                            <h4 className="heading-style-h5 text-color-white">{edu.degree}</h4>
                            <div className="about_cv_item-meta text-color-grey">
                              {edu.institution} • {edu.displayPeriod}
                            </div>
                          </div>
                          <div className="about_cv_item-description text-color-grey">
                            {edu.achievements.map((achievement, j) => (
                              <p key={j}>{achievement}</p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CVAccordion>

                  {/* CERTIFICATIONS ACCORDION - aboutData.certifications */}
                  <CVAccordion title="Licenses & certifications" isLast={true}>
                    <div className="certificates-grid">
                      {aboutData.certifications.map((cert, i) => (
                        <motion.a
                          key={i}
                          href={cert.url}
                          target="_blank"
                          className="certificate-item"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="certificate-content">
                            <h5 className="text-color-white">{cert.title}</h5>
                            <div className="certificate-arrow">
                              <ExternalLink className="h-4 w-4" />
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </CVAccordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== 3. TOOLS SECTION =================== */}
        {/* Grid des technologies et compétences - aboutData.skills */}
        <section className="section_about_tools">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium">
                <h2 className="text-align-center text-color-white mb-12 heading-style-h3">
                  Tools & Technologies
                </h2>
                
                <div className="w-layout-grid logo_grid">
                  {aboutData.skills.categories[0]?.items.slice(0, 8).map((skill, i) => (
                    <motion.div 
                      key={skill}
                      className="logo_wrapper"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="logo_logo">
                        <span className="text-color-grey text-sm">{skill}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== ABOUT MYSELF SECTION - IMPROVED LAYOUT =================== */}
        <section className="section_about_myself">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium">
                <div className="about_myself_component">
                  
                  {/* CARD DECK EFFECT - Image avec cartes inclinées */}
                  <motion.div 
                    className="about_myself_image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="card-deck">
                      {/* Carte de gauche - inclinée vers la gauche */}
                      <motion.div 
                        className="card-left"
                        initial={{ opacity: 0, rotate: -25 }}
                        whileInView={{ opacity: 1, rotate: -15 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Image
                          src={aboutData.profile.image}
                          alt="Card left"
                          width={180}
                          height={250}
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Carte centrale - image principale */}
                      <motion.div 
                        className="card-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Image
                          src={aboutData.profile.image}
                          alt="Jean Christophe Bogbé"
                          width={200}
                          height={280}
                          className="about_myself_image object-cover"
                          priority
                        />
                      </motion.div>

                      {/* Carte de droite - inclinée vers la droite */}
                      <motion.div 
                        className="card-right"
                        initial={{ opacity: 0, rotate: 25 }}
                        whileInView={{ opacity: 1, rotate: 15 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <Image
                          src={aboutData.profile.image}
                          alt="Card right"
                          width={180}
                          height={250}
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* CONTENT - Right side with My Beliefs */}
                  <motion.div 
                    className="about_myself_content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Section Title */}
                    <h2 className="about_myself_content h2">
                      My Beliefs
                    </h2>
                    
                    <p className="about_myself_content p">
                      {aboutData.hero.description}
                    </p>
                    
                    {/* Beliefs List - styled like Dinidu */}
                    <div className="my_beliefs_list">
                      {aboutData.values.items.map((value, i) => (
                        <motion.div 
                          key={i} 
                          className="belief_item"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <BadgeCheck className="belief_icon h-5 w-5" />
                          <div className="belief_content">
                            <h4 className="belief_title">{value.title}</h4>
                            <p className="belief_text">{value.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter/>
    </div>
  );
}