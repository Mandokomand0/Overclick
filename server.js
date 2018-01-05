// @comment: Homework 18 - Web Scraper with Express, Handlebars, MongoDB and Cheerio


// Node Dependencies
var express = require('express');
var fs = require('fs');
//var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

var logger = require('morgan'); // for debugging
// var request = require('request'); // for web-scraping
// var cheerio = require('cheerio'); // for web-scraping

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

// Express-Handlebars
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');


// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB

// var db = process.env.MONGO_URI || "mongodb://root:root@ds013901.mlab.com:13901/innovatefinancial100";

//   mongoose.Promise = Promise;
// //  mongoose.connect('mongodb://localhost/news-goose', {
// //  	useMongoClient: true
// //  });
//
//   mongoose.connect(db, {
//   	useMongoClient: true
//   });

// // Import the Comment and Article models
// var Customer = require('./models/customer.js');
// var Accounts = require('./models/accounts.js');
// var Transactions = require('./models/transactions.js');
// ---------------------------------------------------------------------------------------------------------------

// Import Routes/Controller
//var router = require('./controllers/controller.js');


//var router = express.Router();

// Require controller modules
// var accounts_controller = require('../controllers/accountsController');
// var customers_controller = require('../controllers/customersController');
// var transactions_controller = require('../controllers/transactionsController');
//
// // dynamically include routes (Controller)
// fs.readdirSync('./controllers').forEach(function (file) {
//   if(file.substr(-3) == '.js') {
//       router = require('./controllers/' + file);
//       router.controller(app);
//   }
// });
app.use('/', router);

// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});
