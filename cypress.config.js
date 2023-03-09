const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      /*on('before:browser:launch', (browser = {
        family: 'chromium',
        isHeadless: false
      }, launchOptions) => {

        if (browser.name !== 'electron'
          || browser.name === 'chromium'
          || browser.name === 'edge'
          //|| browser.name === 'firefox'
        ) {
          launchOptions.preferences.default['preference'] = true;
          launchOptions.args.push('--start-fullscreen');
          launchOptions.args.push('--disable-gpu');
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push("--incognito");
        }
        if (browser.name === 'electron') {
          launchOptions.preferences.darkTheme = true;
          launchOptions.preferences.devTools = true;
          launchOptions.preferences.fullscreen = true;
        }
      });*/

      const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
      await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor',   createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config

    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: 'https://computer-database.gatling.io',
    chromeWebSecurity: false,
    //defaultCommandTimeout: 60 * 1000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: 'junit',
    reporterOptions: {
      mochaFile: "cypress/reports/junit.[hash].xml",
      charts: true,
      configFile: "reporterOpts.json",
      reportDir: "cypress/reports",
      toConsole: true
    },
    retries: 0,
    //pageLoadTimeout: 60 * 1000,
    screenshotOnRunFailure: true,
    scrollBehavior: 'nearest',
    video: true,
  },
});