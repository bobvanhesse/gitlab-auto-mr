'use strict';

const https = require('https'),
      path = require('path'),
      querystring = require('querystring');

module.exports = (method, reqPath, params, cb, config) => {
  const req = https.request({
    host: config.host,
    path: `/api/v4/projects/${config.project_id}/${reqPath}` + (method === 'POST' ? '' : '?'+querystring.stringify(params)),
    headers: Object.assign(
      {
        'PRIVATE-TOKEN': config.token
      },
      method === 'POST' ? {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(params))
      } : {}
    ),
    method
  }, (res) => {
    res.setEncoding('utf8');
    let response = '';
    res.on('data', (data) => response += data);
    res.on('end', () => cb(JSON.parse(response)));
  });
  if(method === 'POST') req.write(JSON.stringify(params));
  req.end();
}