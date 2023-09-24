// next.config.js
module.exports = {
    // Other Next.js config options
  
    // Exclude the lib directory from server-side bundle
    experimental: {
      excludeDefaultMomentLocales: true,
      exclude: [/\/api\//],
    },
};
  