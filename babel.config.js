module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: '> 0.25%, not dead',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true,
      },
    ],
  ],
  ignore: [
    './scripts/component-generator/templates/',
    './test/e2e-runtime/',
    './node_modules',
  ],
};
