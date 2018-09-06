const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  chainWebpack: config => {
    if (process.argv.indexOf('--bundle-analyser') !== -1) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{}])
    }
  }
}
