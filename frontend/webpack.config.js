const path = require('path');
const readPkg = require('read-pkg');
const VueCliService = require('@vue/cli-service/lib/Service.js');

const package = readPkg.sync({ cwd: path.resolve(__dirname, '../') });
const service = new VueCliService(__dirname, { pkg: package });

service.init(process.env.NODE_ENV);

module.exports = service.resolveWebpackConfig();
