const config = {
  plugins: [
    "@tailwindcss/postcss",
    // Minification CSS agressive en production
    ...(process.env.NODE_ENV === 'production' 
      ? [
          'autoprefixer',
          ['cssnano', {
            preset: ['default', {
              // Optimisations CSS agressives
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              mergeLonghand: true,
              mergeRules: true,
              minifySelectors: true,
              minifyParams: true,
            }]
          }]
        ] 
      : []
    ),
  ],
};

export default config;
