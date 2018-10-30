// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8801;

var app = express();
app.use(express.static(__dirname + '/public/'));
// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));
var connection = mysql.createConnection(...);
var del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controllers.js');

app.use('/', routes);

app.listen(port);
