'use strict';

const process = require('process');

module.exports = () => {
  let result;
  for(const flag of ['-f', '--file']) {
    const pathIndex = process.argv.indexOf(flag) + 1;
    if(pathIndex && process.argv.length > pathIndex) {
      result = process.argv[pathIndex];
    }
  }
  return result;
}