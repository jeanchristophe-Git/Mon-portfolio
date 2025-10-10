"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import landingData from "../data/landing.json";

export default function Expertise() {
  const { expertise } = landingData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="expertise" className="section_home_services">
      <div className="padding-global">
        <div className="container-large padding-section-medium" ref={ref}>
          <div className="services_component">
            
            {/* Section title exactement comme Dinidu */}
            <motion.div 
              className="section-title"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="label text-color-grey">{expertise.title}</div>
              <h2 className="text-align-center text-color-white">{expertise.subtitle}</h2>
            </motion.div>

            {/* Service Component Grid exactement comme Dinidu */}
            <div className="w-layout-grid service_component">
              {expertise.items.slice(0, 2).map((area, index) => (
                <motion.div 
                  key={area.title}
                  className="services_card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                >
                  <div className="services_card-content">
                    
                    {/* Image container avec animation Lottie-like */}
                    <div className="image-container">
                      <motion.div 
                        className="lottie_services bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center"
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 6,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.div 
                          className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center"
                          animate={{ 
                            rotate: [0, 180, 360] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 8,
                            ease: "linear"
                          }}
                        >
                          <div className="w-8 h-8 bg-white rounded-lg opacity-90" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    <div className="service_content">
                      
                      {/* Services card content bottom */}
                      <div className="services_card-content-bottom">
                        <motion.h3 
                          className="heading-style-h5"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                        >
                          {area.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-color-grey"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                        >
                          {area.description}
                        </motion.p>
                      </div>
                      
                      {/* Tag wrapper exactement comme Dinidu */}
                      <motion.div 
                        className="tag-wrapper"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                      >
                        {area.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            className="tag-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 1.1 + index * 0.2 + skillIndex * 0.05, duration: 0.4 }}
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}