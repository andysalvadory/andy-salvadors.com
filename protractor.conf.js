module.exports.config = {
  specs: ['test/**/*.e2e.js', 'src/**/*.e2e.js'],
  baseUrl: 'http://localhost:6008/',
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
