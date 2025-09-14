/** @type {import('next').NextConfig} */
const nextConfig = {
  // =================== OPTIMISATIONS PERFORMANCE ===================
  
  // Compression avec gzip/brotli pour réduire la taille des bundles
  compress: true,
  
  // Optimisation des images avec next/image
  images: {
    // Formats d'images modernes pour réduire la taille
    formats: ['image/webp', 'image/avif'],
    // Tailles responsive prédéfinies
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Breakpoints pour images responsive
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configuration du compilateur Webpack pour la performance
  webpack: (config, { dev, isServer }) => {
    // En production, optimisations avancées
    if (!dev && !isServer) {
      // Division intelligente des chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Vendor séparé pour les dépendances tierces
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          // Chunk pour les composants communs
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    return config;
  },

  // =================== SÉCURITÉ ET SEO ===================
  
  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Sécurité
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Performance - Cache des assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache long pour les assets statiques
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // =================== OPTIMISATIONS BUILD ===================
  
  // Réduction du bundle JavaScript
  experimental: {
    // Tree shaking agressif pour les icônes
    optimizePackageImports: ['lucide-react'],
    // Optimisation des bundles de production
    optimizeCss: true,
  },
  
  // Minification et optimisation en production
  compiler: {
    // Suppression des console.log en production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuration Terser pour minification JS avancée
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Division intelligente des chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          // Vendor séparé pour les dépendances tierces
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          // Chunk pour les composants communs
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
      
      // Optimisation Terser pour minification agressive
      config.optimization.minimizer = config.optimization.minimizer || [];
    }
    
    return config;
  },
  
  // Output standalone pour déploiement optimisé
  output: 'standalone',
};

export default nextConfig;
