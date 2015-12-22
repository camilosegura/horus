
var createHistory = require('history').createHistory;
var useBasename = require('history').useBasename;

var history = useBasename(createHistory)({
  basename: '/'
});

module.exports = history;