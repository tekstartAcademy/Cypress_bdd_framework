const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', browserify.default(config));
      // implement node event listeners here
      return config;
    },
    specPattern: '**/*.feature',
    defaultCommandTimeout: 10000,
  },
});
