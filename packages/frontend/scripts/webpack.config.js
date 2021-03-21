const VueCliService = require('@vue/cli-service/lib/Service')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const options = {
  outputDir: path.resolve(__dirname, '../../backend/public/frontend'),
  indexPath: path.resolve(__dirname, '../../backend/resources/views/frontend.edge'),
  publicPath: '/frontend',
  css: {
    extract: true,
  },
  integrity: process.env.NODE_ENV === 'production',
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [],
    devServer: {
      stats: false,
    },
  },
}

if (process.env.NODE_ENV !== 'production') {
  options.configureWebpack.plugins.push(
    new Dotenv({
      systemvars: true,
    }),
  )
}

const service = new VueCliService(path.resolve(__dirname, '../'), { inlineOptions: options })
service.init(process.env.NODE_ENV)

module.exports = service.resolveWebpackConfig()
