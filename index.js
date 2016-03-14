var Velocity = require('velocityjs'),
  path = require('path'),
  fs = require('fs');

exports = module.exports = function(templatePath, options, callback) {
  templatePath = path.resolve(__dirname, templatePath);
  fs.readFile(templatePath, function(err, data) {
    if (err) {
      return callback(err, null);
    }
    var output = Velocity.render(data, options.context, options.macros);
    callback(null, output);
  });
}