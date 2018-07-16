'use strict';

const {name} = require('../package.json');

module.exports = name.match(/@[a-z0-9][\\\w\-.]+\/([a-z0-9][\\\w-.]*)/)[1];