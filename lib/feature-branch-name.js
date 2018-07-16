'use strict';

const process = require('process');

const moduleName = require('./get-module-name');

module.exports = `feature/${moduleName}_${process.env.commitSHA}`;