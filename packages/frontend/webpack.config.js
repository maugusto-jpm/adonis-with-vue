const VueCliService = require('@vue/cli-service/lib/Service.js');
const Dotenv = require('dotenv-webpack');

const options = {
  outputDir: '../public/frontend',
  indexPath: '../../resources/views/frontend.edge',
  publicPath: '/frontend',
  css: {
    extract: true,
  },
  integrity: process.env.NODE_ENV === 'production',
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [],
  },
};

if (process.env.NODE_ENV !== 'production') {
  options.configureWebpack.plugins.push(
    // See https://github.com/mrsteele/dotenv-webpack
    new Dotenv({
      systemvars: true,
    }),
  );
}

const service = new VueCliService(__dirname, { inlineOptions: options });
service.init(process.env.NODE_ENV);

module.exports = service.resolveWebpackConfig();
