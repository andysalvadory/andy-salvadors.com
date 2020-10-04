module.exports.config = {
  specs: ['test/{K..Z}**/**/*.e2e.js', 'src/{K..Z}**/**/*.e2e.js'],
  baseUrl: 'http://localhost:6008/',
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
