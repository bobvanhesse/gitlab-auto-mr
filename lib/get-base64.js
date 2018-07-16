'use strict';

const fs = require('fs'),
      path = require('path');

module.exports = (pathToFile) => {
  const fileContent = fs.readFileSync(
    path.resolve(__dirname, '../../../../', pathToFile)
  );
  return new Buffer(fileContent).toString('base64');
}