const merge = require('lodash/merge');
const path = require('path');
const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

module.exports = (config, env, defaultConfig) => {
  defaultConfig.module.rules[0].use[0].loader = require.resolve('babel-loader');
  defaultConfig.plugins
    .find(plugin => plugin.constructor.name === 'ProgressPlugin')
    .handler = () => undefined

  const newConfig = wixStorybookConfig(defaultConfig);
  const srcPath = path.resolve(__dirname, '../..', 'src');

  return merge(newConfig, {
    context: srcPath,
    resolve: {
      alias: {
        'wix-style-react': srcPath,
      },
    },
  });
};
