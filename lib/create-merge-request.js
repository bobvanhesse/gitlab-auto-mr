'use strict';

const apiReq = require('./api-request'),
      featureBranch = require('./feature-branch-name');

module.exports = (commit, config) => apiReq(
  'POST',
  'merge_requests',
  Object.assign(
    {
      source_branch: featureBranch,
      target_branch: config.target_branch,
      title: 'Front-end assets update #' + commit,
      remove_source_branch: true
    },
    'assignee_id' in config ? {assignee_id: config.assignee_id} : {}
  ),
  (res) => console.log(`A merge request is ${res.state} for branch ${featureBranch} containing all updates of assets.`),
  config
);