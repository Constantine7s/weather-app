/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appIncludes = [resolveApp('src')];

/* eslint-disable no-param-reassign */
module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin',
  );
  config.module.rules[0].include = appIncludes;
  config.module.rules[1] = null;
  config.module.rules[2].oneOf[1].include = appIncludes;
  config.module.rules[2].oneOf[1].options.plugins = [
    // require.resolve('babel-plugin-react-native-web'),
  ].concat(config.module.rules[2].oneOf[1].options.plugins);
  config.module.rules = config.module.rules.filter(Boolean);
  config.plugins.push(new webpack.DefinePlugin({ __DEV__: env !== 'production' }));
  config.resolve.alias = {
    '@': path.resolve(path.join(__dirname, 'src')),
  };
  if (env !== 'production') {
    config.devtool = 'cheap-eval-source-map';
  }
  return config;
};
