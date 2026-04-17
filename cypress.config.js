const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    video: true, // Adicione esta linha
    screenshotOnRunFailure: true, // Adicione esta linha
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});