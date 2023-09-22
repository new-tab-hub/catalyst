/**
 * Add Eleventy dataExtensions here
 *
*/

module.exports = {
  yamlAsData: function (eleventyConfig) {
    const yaml = require('js-yaml')
    eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
  }
}
