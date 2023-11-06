const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.test.js',
  output: 'e2e/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:9000',
      show: true,
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'submission ke 3',
  plugins: {
    screenshotOnFail: {
      enabled: false,
    },
  },
};
