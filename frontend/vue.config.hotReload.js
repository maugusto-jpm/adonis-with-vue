const Dotenv = require('dotenv-webpack');

module.exports = {
  css: {
    extract: true,
  },
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new Dotenv({
        systemvars: true,
      }),
    ],
  },
};
