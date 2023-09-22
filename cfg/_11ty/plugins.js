/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
 */

module.exports = {
  EleventyHtmlBase: (eleventyConfig) => {
    const {EleventyHtmlBasePlugin} = require("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  },

  EleventyEdge: (eleventyConfig) => {
    const {EleventyEdgePlugin} = require("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyEdgePlugin);
  },

  // Easily grab an svg image and render the raw svg contents with the ability to add classes
  // Ex: {{ '/src/assets/images/icons/regular/activity.svg' | svgContents("h-8 w-8 text-amber") | safe }}
  svgContents: (eleventyConfig) => {
    const plugin = require("eleventy-plugin-svg-contents");
    eleventyConfig.addPlugin(plugin);
  },

  phosphorIcons: (eleventyConfig) => {
    const plugin = require('eleventy-plugin-phosphoricons');
    eleventyConfig.addPlugin(plugin, {
      class: "phicon",
      size: 20,
      fill: "currentColor"
    });
  }
};
