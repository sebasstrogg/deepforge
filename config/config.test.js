/*jshint node: true*/
/**
 * @author lattmann / https://github.com/lattmann
 */

'use strict';

var config = require('./config.default');

config.server.port = 9001;
config.mongo.uri = 'mongodb://127.0.0.1:27017/deepforge_tests';

config.executor.workerRefreshInterval = 150;
config.executor.clearOldDataAtStartUp = true,

module.exports = config;
