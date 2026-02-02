const esbuild = require('esbuild');

module.exports = function (eleventyConfig) {
  // Copier les assets statiques
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Build JS avec esbuild
  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/scripts/main.js'],
      bundle: true,
      minify: process.env.NODE_ENV === 'production',
      sourcemap: process.env.NODE_ENV !== 'production',
      target: ['es2020'],
      outfile: 'assets/main.js',
    });
  });

  // Watch des fichiers JS
  eleventyConfig.addWatchTarget("src/scripts/");

  return {
    dir: {
      input: "src",
      output: ".",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
