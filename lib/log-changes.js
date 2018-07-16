'use strict';

module.exports = (changes) => {
  if(!changes.length) {
    console.error(`None of the artifact's bundle files were affected by this commit.`);
  } else {
    console.log('Changed files:');
    changes.forEach((change) => console.log(' - ' + Object.keys(change)[0]));
  }
  return !!changes.length;
}