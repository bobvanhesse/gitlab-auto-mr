'use strict';

const process = require('process');

const apiReq = require('./api-request'),
      featureBranch = require('./feature-branch-name'),
      author_name = require('./get-module-name');

module.exports = (changes, config) => new Promise((resolve, reject) =>
  apiReq(
    'POST',
    'repository/commits',
    {
      branch: featureBranch,
      start_branch: config.target_branch,
      commit_message: 'Update front-end assets to latest commit: ' + process.env.commitSHA,
      author_name,
      actions: changes.map((file) => {
        const [file_path, content] = Object.entries(file)[0];
        return {
          action: 'update',
          file_path,
          content,
          encoding: 'base64'
        }
      })
    },
    (res) => {
      console.log(`Updated assets were committed to the project in a branch named ${featureBranch} at ${res.created_at}.`);
      resolve(res.id);
    },
    config
  )
);