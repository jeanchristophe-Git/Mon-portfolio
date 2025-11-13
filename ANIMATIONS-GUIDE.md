# 🎨 Guide des Animations Style Apple - GSAP & Three.js

Ce guide explique comment utiliser les nouveaux composants d'animation GSAP et Three.js pour créer des effets style Apple impressionnants dans votre portfolio.

---

## 📦 Technologies Utilisées

- **GSAP 3** - GreenSock Animation Platform (animations performantes)
- **ScrollTrigger** - Plugin GSAP pour animations au scroll
- **Three.js** - Bibliothèque 3D WebGL
- **@react-three/fiber** - React renderer pour Three.js
- **@react-three/drei** - Helpers Three.js pour React

---

## 🚀 Installation

Les packages sont déjà installés :

```bash
npm install gsap three @react-three/fiber @react-three/drei
```

---

## 🎯 Composants Disponibles

### 1. ProjectsGSAP.jsx - Cards 3D avec Effets Apple

**Localisation**: `app/components/ProjectsGSAP.jsx`

#### Effets Implémentés

✅ **Effet 3D au Hover**
- Rotation de la carte selon la position de la souris
- Perspective 1000px pour effet 3D réaliste
- Scale 1.05 au hover
- Box-shadow dynamique

✅ **Parallax sur Images**
- Images se déplacent avec le scroll (scrub: 1)
- Mouvement subtil au hover de la carte

✅ **Magnetic Buttons**
- Boutons "Learn more" suivent la souris
- Effet élastique au retour (ease: "elastic.out")
- Déplacement de 30% (x * 0.3)

✅ **Glow Effect**
- Lueur bleue suit la souris sur la carte
- Radial gradient avec blur(40px)
- Opacité animée

✅ **Scroll-Triggered Animations**
- Cards apparaissent avec rotation et scale
- Animations staggered (décalées de 0.2s)
- Déclenchement à 90% du viewport

#### Utilisation

```jsx
import ProjectsGSAP from "./components/ProjectsGSAP";

export default function Page() {
  return (
    <main>
      <ProjectsGSAP />
    </main>
  );
}
```

#### Configuration ScrollTrigger

```javascript
scrollTrigger: {
  trigger: card,
  start: "top 90%",      // Commence quand top de card est à 90% du viewport
  end: "bottom 20%",     // Termine quand bottom est à 20%
  toggleActions: "play none none reverse",  // play on enter, reverse on leave
}
```

#### Personnalisation 3D

Ajustez les paramètres dans `handle3DMove` :

```javascript
const rotateX = ((y - centerY) / centerY) * -10; // Changez -10 pour plus/moins de rotation
const rotateY = ((x - centerX) / centerX) * 10;  // Changez 10 pour plus/moins de rotation

gsap.to(card, {
  rotateX,
  rotateY,
  transformPerspective: 1000,  // Changez perspective
  scale: 1.05,                 // Changez le scale au hover
  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)",  // Personnalisez l'ombre
  duration: 0.5,
  ease: "power2.out",
});
```

---

### 2. HeroThreeJS.jsx - Hero avec Sphere 3D Animée

**Localisation**: `app/components/HeroThreeJS.jsx`

#### Effets Implémentés

✅ **Sphere 3D avec Distorsion**
- MeshDistortMaterial pour effet liquide/organique
- Rotation continue douce
- Mouvement de hover (sin wave)

✅ **Gradient Animé Background**
- Radial gradient pulsant
- Animation 8s infinite

✅ **Parallax Souris**
- Canvas suit le mouvement de la souris
- Déplacement de ±20px max

✅ **Animations Texte GSAP**
- Timeline avec stagger
- Apparition du bas vers le haut
- Opacity fade-in

#### Utilisation

```jsx
import HeroThreeJS from "./components/HeroThreeJS";

export default function Page() {
  return (
    <main>
      <HeroThreeJS onJump={(section) => console.log(section)} />
    </main>
  );
}
```

#### Configuration Sphere

Ajustez dans `AnimatedSphere` :

```javascript
<Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
  <MeshDistortMaterial
    color="#21a1ff"      // Couleur de la sphere
    distort={0.4}        // 0-1, niveau de distorsion (0.4 = subtil)
    speed={2}            // Vitesse d'animation distorsion
    roughness={0.2}      // 0-1, rugosité surface
    metalness={0.8}      // 0-1, aspect métallique
  />
</Sphere>
```

#### Couleurs Alternatives

```javascript
// Violet/Purple (style Vercel)
color="#8b5cf6"

// Vert/Green (style Matrix)
color="#10b981"

// Rouge/Red (style danger)
color="#ef4444"

// Or/Gold (style premium)
color="#fbbf24"
```

#### Lumières Three.js

Ajustez l'éclairage dans le `<Canvas>` :

```javascript
<ambientLight intensity={0.5} />  // Lumière ambiante (augmentez pour plus clair)
<directionalLight position={[10, 10, 5]} intensity={1} />  // Lumière directionnelle
<pointLight position={[-10, -10, -5]} intensity={0.5} color="#21a1ff" />  // Point lumineux coloré
```

---

## 🔧 Intégration dans page.js

### Option 1 : Remplacer Framer Motion par GSAP (Recommandé)

```jsx
// app/page.js
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Composants principaux
import PillNavbar from "./components/PillNavbar";
import HeroThreeJS from "./components/HeroThreeJS";  // ← Nouveau Hero
import AboutSection from "./components/AboutSection";

// Composants avec chargement différé
const ProjectsGSAP = dynamic(() => import("./components/ProjectsGSAP"));  // ← Nouveau Projects
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Contact = dynamic(() => import("./components/Contact"));
const FAQSection = dynamic(() => import("./components/FAQSection"));
const SiteFooter = dynamic(() => import("./components/SiteFooter"));

export default function PortfolioMain() {
  // ... (le reste du code identique)

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-zinc-200">
      <a href="#main-content" className="skip-to-content">
        Aller au contenu principal
      </a>

      <PillNavbar
        active={activeSection}
        onJump={navigateToSection}
        open={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
      />

      <main id="main-content">
        <HeroThreeJS onJump={navigateToSection} />  {/* ← Hero avec Three.js */}
        <div className="mx-auto max-w-7xl">
          <AboutSection />
          {/* <Expertise /> */}  {/* Gardez l'ancien ou créez version GSAP */}
          <ProjectsGSAP />  {/* ← Projects avec GSAP */}
          <Testimonials />
          <Contact />
          <FAQSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
```

### Option 2 : Tester côte à côte (Mode Debug)

Créez une route séparée pour tester :

```jsx
// app/animations-test/page.jsx
"use client";

import HeroThreeJS from "../components/HeroThreeJS";
import ProjectsGSAP from "../components/ProjectsGSAP";

export default function AnimationsTest() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <HeroThreeJS onJump={() => {}} />
      <ProjectsGSAP />
    </div>
  );
}
```

Accédez à `http://localhost:3000/animations-test`

---

## ⚙️ Optimisations Performance

### 1. Lazy Loading Three.js

Pour éviter de charger Three.js sur toutes les pages :

```jsx
const HeroThreeJS = dynamic(() => import("./components/HeroThreeJS"), {
  ssr: false,  // Désactive Server-Side Rendering
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>
});
```

### 2. Reducer Motion (Accessibilité)

Désactiver animations pour `prefers-reduced-motion` :

```javascript
// Dans useEffect
useEffect(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Désactiver animations GSAP
    gsap.globalTimeline.clear();
    return;
  }

  // ... reste du code
}, []);
```

### 3. Cleanup GSAP

Toujours cleanup les animations :

```javascript
useEffect(() => {
  const ctx = gsap.context(() => {
    // Vos animations ici
  }, sectionRef);

  return () => ctx.revert();  // ← Important ! Cleanup
}, []);
```

---

## 🎨 Exemples Avancés

### Effet de Texte Split (Apple Style)

```javascript
// Séparer chaque lettre pour animation
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";  // Plugin premium

gsap.registerPlugin(SplitText);

const split = new SplitText(titleRef.current, { type: "chars" });

gsap.from(split.chars, {
  opacity: 0,
  y: 100,
  rotateX: -90,
  stagger: 0.02,
  duration: 1,
  ease: "back.out",
});
```

### Scroll Horizontal (Apple Park Style)

```javascript
gsap.to(cardsRef.current, {
  xPercent: -100 * (cardsRef.current.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: containerRef.current,
    pin: true,
    scrub: 1,
    end: () => "+=" + containerRef.current.offsetWidth,
  }
});
```

### Smooth Scroll Custom

```javascript
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";  // Plugin premium

gsap.registerPlugin(ScrollSmoother);

ScrollSmoother.create({
  smooth: 1.5,      // Durée du smooth (en secondes)
  effects: true,    // Active data-speed attributes
  smoothTouch: 0.1, // Smooth sur mobile
});
```

---

## 🐛 Troubleshooting

### Erreur: "gsap is not defined"

Solution: Vérifiez que vous avez bien `"use client"` en haut du fichier.

```jsx
"use client";  // ← Important pour Next.js

import { gsap } from "gsap";
```

### Erreur: "window is not defined"

Solution: Enregistrez les plugins côté client uniquement :

```javascript
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
```

### Three.js Canvas Blanc

Solution: Ajoutez des lumières :

```jsx
<Canvas>
  <ambientLight intensity={0.5} />
  <directionalLight position={[5, 5, 5]} />
  {/* Votre contenu 3D */}
</Canvas>
```

### Animations ne se déclenchent pas

Solution: Vérifiez le trigger et les valeurs start/end :

```javascript
scrollTrigger: {
  trigger: element,
  start: "top 80%",   // Essayez différentes valeurs
  markers: true,      // ← Active les markers de debug
}
```

---

## 📚 Ressources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Demos](https://greensock.com/st-demos/)
- [Three.js Journey](https://threejs-journey.com/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)

---

## 🎯 Prochaines Étapes

1. **Tester les composants** : `npm run dev`
2. **Ajuster les couleurs** selon votre charte graphique
3. **Optimiser** : Lazy load Three.js si non utilisé partout
4. **Ajouter d'autres composants** : Expertise, Testimonials en GSAP
5. **Créer des variantes** : Différentes formes 3D dans Hero

---

**Créé le : 13 Janvier 2025**
**Auteur : Claude AI + Jean-Christophe Bogbé**
