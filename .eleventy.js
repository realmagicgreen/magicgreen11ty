const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginSass = require('./src/_11ty/sass');
const readingTime = require('./src/_11ty/reading-time');
const pluginDate = require("eleventy-plugin-date");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const slugify = require("@sindresorhus/slugify");

let Nunjucks = require("nunjucks");

module.exports = function(eleventyConfig) {
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("_includes")
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  // PLUGINS

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: { year: "numeric", month: "short", day: "numeric" },
      // Add a new filter to format a Date to just the month and year.
      readableMonth: { year: "numeric", month: "long" },
      // Add a new filter using formatting tokens.
      readableYear: { year: "numeric" },
    }
  });

  // sass
  eleventyConfig.addPlugin(pluginSass, {
    watch: './src/scss/*.scss',
    outputDir: './src/_includes/css/'
  });

  // FILTERS

  // Universal slug filter strips unsafe chars from URLs
  // eleventyConfig.addFilter("slug", function (str) {
  //   return slugify(str, {
  //     lower: true,
  //     replacement: "-",
  //     remove: /[*+~.·,()'"`´%!?¿:@»]/g
  //   });
	// });

  //LiquidFilters
  eleventyConfig.addLiquidFilter('readingTime', readingTime);

  //NunjucksFilter
  eleventyConfig.addNunjucksFilter('readingTime', readingTime);

  //Full-width massive, from https://github.com/eduardoboucas/buildtimes
  //not used yet
  eleventyConfig.addLiquidFilter("feature_title", title => {
    const MIN_LENGTH = 10;
    const MAX_LENGTH = 20;

    if (!title) return "";

    let currentLine = "";
    let lines = [];
    let words = title.split(" ");

    words.forEach(word => {
      if (currentLine.length + word.length <= MAX_LENGTH) {
        currentLine += word + " ";
      } else {
        lines.push(currentLine);

        currentLine = word + " ";
      }
    });

    if (currentLine.length < MIN_LENGTH) {
      lines[lines.length - 1] += currentLine;
    } else {
      lines.push(currentLine);
    }

    return `
      <span class="feature-title__full">${title}</span>

      ${lines
        .map(
          line => `
        <span aria-hidden="true" class="feature-title__part">${line.slice(
          0,
          -1
        )}</span>
      `
        )
        .join("")}
    `;
  });

  // COLLECTIONS

  //tags as in 11ty base repo
  eleventyConfig.addCollection('tagList', require('./src/_11ty/getTagList'));
  eleventyConfig.addCollection('tagListPosts', require('./src/_11ty/tagListPosts'));

  // pass some assets right through
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-144x144.png');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-192x192.png');

  // Aliases are in relation to the _includes folder HTML(LIQUID)
  eleventyConfig.addLayoutAlias('default', 'default.html');
  eleventyConfig.addLayoutAlias('index', 'index.html');
  eleventyConfig.addLayoutAlias('post', 'post.html');
  eleventyConfig.addLayoutAlias('post_index_category', 'post_index_category.html');
  eleventyConfig.addLayoutAlias('resources', 'resources.html');

  // Aliases are in relation to the _includes folder NUNJUCKS
  // for example FUMES has this:
  // eleventyConfig.addLayoutAlias('text_author', 'layouts/text_author.njk');

  // eleventyConfig.setLiquidOptions({
  //   dynamicPartials: false,
  //   root: [
  //     '_includes',
  //     '.'
  //   ]
  // });

  const markdownItOptions = { html: true };
  const markdownItAnchorOptions = {
    permalinkClass: "heading-anchor",
    level: 1,
    permalink: true,
    permalinkBefore: true,
    slugify
  };
  const markdownItPlugin = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
  );

  eleventyConfig.setLibrary("md", markdownItPlugin);

  return {
    dir: {
      input: 'src',
    },
    // templateFormats : ['njk', 'md', 'liquid', 'html'],
    // markdownTemplateEngine: 'liquid',
    // htmlTemplateEngine : 'liquid',
    passthroughFileCopy: true,
  };
}
