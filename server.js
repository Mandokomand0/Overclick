// Node Dependencies
var express = require('express');
var fs = require('fs');
//var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
// Initialize Express for debugging & body parsing
var app = express();

// Use morgan logger for logging requests
app.use(logger('dev'));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: false
}))

// Use express.static to serve the public folder as a static directory

app.use(express.static("public"));

app.use('/', router);

// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});
