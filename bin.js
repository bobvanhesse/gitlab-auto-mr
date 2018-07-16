#!/usr/bin/env node

const path = require('path');

const automr = require('.'),
      configPath = require('./lib/config-path');

const config = require(path.join('../../../', configPath() || 'auto-mr.config.js'));

automr(config);