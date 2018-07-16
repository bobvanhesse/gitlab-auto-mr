'use strict';

const apiReq = require('./api-request'),
      getb64 = require('./get-base64');

module.exports = (config) => Promise.all(config.files.map((file) => {
  const [fromPath, toPath] = Object.entries(file)[0],
        latestContent = getb64(fromPath);
  return new Promise((resolve, reject) => apiReq(
    'GET',
    'repository/files/'+encodeURIComponent(toPath),
    {ref: config.target_branch},
    (res) => {
      resolve(res.content === latestContent ? null : ({[toPath]: latestContent}));
    },
    config
  ));
})).then((changes) => changes.filter(Boolean));