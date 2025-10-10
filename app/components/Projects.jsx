"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import landingData from "../data/landing.json";

export default function Projects() {
  const { projects } = landingData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="work" className="section_home_cases">
      <div className="padding-global">
        <div className="container-large padding-section-medium" ref={ref}>
          <div className="cases_component">
            
            {/* Section title exactement comme Dinidu */}
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="label text-color-grey">{projects.title}</div>
              <h2 className="text-color-white">{projects.subtitle}</h2>
            </motion.div>

            {/* Project Component Grid exactement comme Dinidu */}
            <div className="project_component">
              
              {/* Layout row three - Projets principaux plus grands */}
              <div className="layout_row_three">
                {projects.items.slice(0, 3).map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={`/projects/${project.slug}`}
                    className="service_card w-inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
                  >
                    <div className="services_card-content">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="sm-card-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      
                      <div className="service_card-inner-content">
                        <motion.h3 
                          className="heading-style-h5"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                        >
                          {project.title} · <span className="project-type">{project.category}</span>
                        </motion.h3>
                        
                        <motion.p 
                          className="text-color-grey"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          className="services_card-content-bottom"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.9 + index * 0.15, duration: 0.6 }}
                        >
                          <div className="button-group">
                            <div className="link">
                              <div className="link">Learn more</div>
                              <div className="link-icon w-embed">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.43 5.92993L20.5 11.9999L14.43 18.0699" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M3.5 12H20.33" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Section disclaimer comme Dinidu */}
              <motion.div 
                className="disclaimer-content padding-top padding-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-color-snow">*Plus de projets et études de cas disponibles sur demande.</p>
                <div className="button-group">
                  <a href="mailto:jcbogbe@gmail.com?subject=Hello" className="button is-small w-button">Demander</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}