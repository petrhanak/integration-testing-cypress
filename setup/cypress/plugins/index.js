/**
 * merge webpack config work with cypress
 */
const webpack = require('@cypress/webpack-preprocessor')

const webpackConfig = require('../../internals/webpack/webpack.base.babel')({
  plugins: [],
})

module.exports = on => {
  const options = {
    webpackOptions: {
      module:  webpackConfig.module,
      plugins: webpackConfig.plugins,
      resolve: webpackConfig.resolve,
    },
    watchOptions:   {},
  }

  on('file:preprocessor', webpack(options))
}
