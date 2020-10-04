module.exports.config = {
  specs: [
    'test/{A..J}**/**/*.e2e.js',
    'src/{A..J}**/**/*.e2e.js',
    'test/{a..z}**/**/*.e2e.js',
    'src/{a..z}**/**/*.e2e.js',
  ],
  baseUrl: 'http://localhost:6008/',
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
