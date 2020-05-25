const Dotenv = require('dotenv-webpack');

const config = {
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
  config.configureWebpack.plugins.push(
    // See https://github.com/mrsteele/dotenv-webpack
    new Dotenv({
      systemvars: true,
    }),
  );
}

module.exports = config;
