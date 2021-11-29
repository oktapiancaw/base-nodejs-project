const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: '0.0.0.0',
    port: 3000,
    static: './dist'
  },
  devtool: 'source-map'
})
