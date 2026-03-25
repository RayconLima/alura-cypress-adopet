const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9dx34q",
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
