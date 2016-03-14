## Register velocityjs template engine for express

### Usage

var express = require('express');
var app = express();
app.set('view engine', 'vm');
app.engine('vm', require('velocityjs-express').__express);
