// Configuration principale du site

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./dinidu-styles.css";

// Configuration des polices
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  display: "swap",
});

// Métadonnées SEO
export const metadata = {
  // Base URL pour les metadata
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://jcbogbe.com' : 'http://localhost:3000'),
  // Informations de base
  title: {
    template: "%s | Jean-Christophe Bogbé - Product-Minded Engineer ",
    default: "Jean-Christophe Bogbé - Product-Minded Engineer & Cybersecurity Enthusiast "
  },
  description: "Mid Product-Minded Engineer et Cybersecurity Enthusiast basé à Abidjan. Je crée des produits qui résolvent de vrais problèmes avec une approche security-first. Spécialisé en développement full-stack et solutions fintech africaines.",
  
  // Mots-clés pour le SEO
  keywords: [
    "UX Designer",
    "UI Designer", 
    "Experience Designer",
    "Product Engineer",
    "Full-Stack Developer",
    "Cybersecurity", 
    "React Developer",
    "Next.js",
    "Fintech",
    "Côte d'Ivoire",
    "Abidjan",
    "Portfolio",
    "KOTA",
    "Tontine",
    "WebShield AI",
    "NestJS",
    "Security Engineer",
    "African Tech",
    "INPHB",
    "MSCIA",
    "Portfolio",
    "Web Design",
    "App Design",
    "Visual Design"
  ],
  
  // Informations auteur
  authors: [{ name: "Jean-Christophe Bogbé", url: "https://jcbogbe.com" }],
  creator: "Jean-Christophe Bogbé",
  
  
  // Configuration Open Graph (réseaux sociaux)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jcbogbe.com",
    siteName: "Jean-Christophe Bogbé Portfolio",
    title: "Jean-Christophe Bogbé - Product-Minded Engineer & Cybersecurity Enthusiast",
    description: "Je ne code pas juste. Je crée des produits qui résolvent de vrais problèmes pour de vraies personnes. Ingénieur avec une approche security-first.",
    images: [
      {
        url: "/images/jc-og-image.jpg", // Image à créer (1200x630px)
        width: 1200,
        height: 630,
        alt: "Jean-Christophe Bogbé - Product Engineer Portfolio"
      }
    ]
  },
  
  // Configuration Twitter
  twitter: {
     card: "summary_large_image",
    title: "Jean-Christophe Bogbé - Product-Minded Engineer",
    description: "Je crée des produits qui résolvent de vrais problèmes avec une approche security-first. Co-fondateur de KOTA, passionné de cybersécurité.",
    images: ["/images/jc-twitter-image.jpg"], // Image à créer
    creator: "@jcbogbe" // Remplacer par votre vrai Twitter si vous en avez un
  },
  
  // Robots et indexation
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  // Verification et analytics
  verification: {
    // google: "votre-code-google-search-console", // À ajouter plus tard
    // yandex: "votre-code-yandex", // Si nécessaire
  }
};


// =================== VIEWPORT ET PERFORMANCE ===================
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" }
  ]
};

// =================== STRUCTURED DATA FOR SEO ===================
/**
 * Structured Data JSON-LD pour améliorer le SEO et les rich snippets
 * Conforme à schema.org pour Person et WebSite
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jcbogbe.com/#person",
      "name": "Jean-Christophe Bogbé",
      "alternateName": "JC Bogbé",
      "description": "Product-Minded Engineer et Cybersecurity Enthusiast basé à Abidjan, Côte d'Ivoire. Spécialisé en développement full-stack et solutions fintech africaines.",
      "url": "https://jcbogbe.com",
      "image": "https://jcbogbe.com/image/me/jeanchristophebogbe.png",
      "sameAs": [
        "https://www.linkedin.com/in/jcbogbe",
        "https://github.com/jcbogbe",
        "https://twitter.com/jcbogbe"
      ],
      "jobTitle": "Product-Minded Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "KOTA",
        "url": "https://kota.ci"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abidjan",
        "addressCountry": "CI"
      },
      "knowsAbout": [
        "Web Development",
        "Cybersecurity",
        "React",
        "Next.js",
        "TypeScript",
        "Fintech",
        "Mobile Development",
        "Product Engineering"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://jcbogbe.com/#website",
      "url": "https://jcbogbe.com",
      "name": "Jean-Christophe Bogbé Portfolio",
      "description": "Portfolio personnel de Jean-Christophe Bogbé, Product Engineer et Cybersecurity Enthusiast",
      "publisher": {
        "@id": "https://jcbogbe.com/#person"
      },
      "inLanguage": "fr-FR"
    },
    {
      "@type": "WebPage",
      "@id": "https://jcbogbe.com/#webpage",
      "url": "https://jcbogbe.com",
      "name": "Jean-Christophe Bogbé - Product-Minded Engineer",
      "isPartOf": {
        "@id": "https://jcbogbe.com/#website"
      },
      "about": {
        "@id": "https://jcbogbe.com/#person"
      },
      "description": "Mid Product-Minded Engineer et Cybersecurity Enthusiast basé à Abidjan. Je crée des produits qui résolvent de vrais problèmes avec une approche security-first.",
      "inLanguage": "fr-FR"
    }
  ]
};

// =================== LAYOUT PRINCIPAL ===================
export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Preconnect pour les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data (JSON-LD) pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-zinc-200`}>
        {/* Conteneur principal avec largeur optimisée */}
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
