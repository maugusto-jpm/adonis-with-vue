const VueCliService = require('@vue/cli-service/lib/Service.js');
const { error } = require('@vue/cli-shared-utils');
const Dotenv = require('dotenv-webpack');

const options = {
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

const service = new VueCliService(__dirname, { inlineOptions: options });

service.run('serve').catch(err => {
  error(err);
  process.exit(1);
});
