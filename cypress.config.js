const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9dx34q",
  base_url: "https://adopet-tau.vercel.app",
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
