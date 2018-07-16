'use strict';

const commitUpdates = require('./lib/commit-updates'),
      createMergeRequest = require('./lib/create-merge-request'),
      listChanges = require('./lib/list-changes'),
      logChanges = require('./lib/log-changes');

module.exports = (config) => {
  listChanges(config)
    .then((changes) => {
      if(!logChanges(changes)) {
        return;
      }
      commitUpdates(changes, config)
        .then((commit) =>
          createMergeRequest(commit, config)
        );
    });
}