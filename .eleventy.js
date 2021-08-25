const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginDate = require("eleventy-plugin-date");
const slugify = require("@sindresorhus/slugify");
const readingTime = require('./src/_11ty/reading-time');
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [640, 880, 1024, 1920],
    formats: ["avif", "jpeg"],
    outputDir: "./src/assets/p/11ty_image_output/",
    urlPath: "/assets/p/11ty_image_output/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    zoom: "true",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    //use the whitespaceMode option to strip the whitespace from the output of the <picture> element (a must-have for use in markdown files).
    whitespaceMode: "inline"
  });
}

module.exports = function(eleventyConfig) {

  // 11ty image
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // PLUGINS

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


  // FILTERS

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  // Usage #
  // {% catslogan "solution", "Small..." %}
  // notyetUSED

//   eleventyConfig.addShortcode("catslogan", function(cat, slogan) {
//     return `<div class="catslogan">
// <div class="catslogan--cat">${cat}</div>
// <div class="catslogan--slogan">@${slogan}</div>
// </div>`;
//    });

  //LiquidFilters
  eleventyConfig.addLiquidFilter('readingTime', readingTime);

  //NunjucksFilter
  eleventyConfig.addNunjucksFilter('readingTime', readingTime);

  //Full-width massive, from https://github.com/eduardoboucas/buildtimes
  //notyetUSED

  // eleventyConfig.addLiquidFilter("feature_title", title => {
  //   const MIN_LENGTH = 10;
  //   const MAX_LENGTH = 20;
  //
  //   if (!title) return "";
  //
  //   let currentLine = "";
  //   let lines = [];
  //   let words = title.split(" ");
  //
  //   words.forEach(word => {
  //     if (currentLine.length + word.length <= MAX_LENGTH) {
  //       currentLine += word + " ";
  //     } else {
  //       lines.push(currentLine);
  //
  //       currentLine = word + " ";
  //     }
  //   });
  //
  //   if (currentLine.length < MIN_LENGTH) {
  //     lines[lines.length - 1] += currentLine;
  //   } else {
  //     lines.push(currentLine);
  //   }
  //
  //   return `
  //     <span class="feature-title__full">${title}</span>
  //
  //     ${lines
  //       .map(
  //         line => `
  //       <span aria-hidden="true" class="feature-title__part">${line.slice(
  //         0,
  //         -1
  //       )}</span>
  //     `
  //       )
  //       .join("")}
  //   `;
  // });

  // COLLECTIONS


  // tags as in 11ty base repo
  eleventyConfig.addCollection('tagList', require('./src/_11ty/getTagList'));
  eleventyConfig.addCollection('tagListPosts', require('./src/_11ty/tagListPosts'));

  // pass some assets right through
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-144x144.png');
  eleventyConfig.addPassthroughCopy('./src/android-chrome-192x192.png');

  // aliases are in relation to the _includes folder HTML(LIQUID)
  eleventyConfig.addLayoutAlias('default', 'default.html');
  eleventyConfig.addLayoutAlias('index', 'index.html');
  eleventyConfig.addLayoutAlias('post', 'post.html');
  eleventyConfig.addLayoutAlias('post_index_category', 'post_index_category.html');
  eleventyConfig.addLayoutAlias('resources', 'resources.html');

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: [
      '_includes',
      '.'
    ]
  });

  const markdownItOptions = { html: true };
  const markdownItAnchorOptions = {
    permalinkClass: "heading-anchor",
    level: 1,
    permalink: true,
    permalinkSymbol: "&#128279;",
    permalinkBefore: false,
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
    templateFormats : ['njk', 'md', 'liquid', 'html'],
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine : 'liquid',
    passthroughFileCopy: true,
  };
}
