// when this PR will be mreged we won't need this fix
// https://github.com/goldfire/howler.js/pull/1331
let howler;
if (process.env.NODE_ENV !== 'production') {
  howler = require('howler/dist/howler.core.min');
} else {
  howler = require('howler');
}

module.exports = howler;
