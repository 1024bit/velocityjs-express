var velocity = require('velocityjs'),
  expressize = require('expressize');

module = module.exports = expressize(function(data, options) {
  return velocity.render(data, options, options.macros);
});
