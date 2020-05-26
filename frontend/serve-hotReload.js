const path = require('path');
const readPkg = require('read-pkg');
const VueCliService = require('@vue/cli-service/lib/Service.js');
const { error } = require('@vue/cli-shared-utils');

const package = readPkg.sync({ cwd: path.resolve(__dirname, '../') });
const service = new VueCliService(__dirname, { pkg: package });
process.env.VUE_CLI_SERVICE_CONFIG_PATH = path.resolve(__dirname, './vue.config.hotReload.js');

service.run('serve').catch(err => {
  error(err);
  process.exit(1);
});
