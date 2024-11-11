module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/.htaccess')
  eleventyConfig.addCollection("sections", function (collectionApi) {
    return collectionApi.getAll()
      .filter((a) => a.data.tags.includes('sections'))
      .sort((a, b) => a.data.order - b.data.order);
  })

  return {
    dir: { input: 'src', output: '_site' }
  };
};
