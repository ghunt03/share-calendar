
require('dotenv').config()
var express     = require("express");
var app 			  = express();


const config = require("./config");
global.config = config;

var routes = require('./src/routes');
app.use('/calendar', routes);


var listener = app.listen(config.port, function() {
    console.log('App listening on http://localhost:' + config.port);
  }).on('error', function(err) {
    console.log('on error handler');
    console.log(err);
  });