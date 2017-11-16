var express = require('express');
var app = express();

var wiki = require('./wiki.js');
app.use('/wiki', wiki);

var logger = require('morgan');
app.use(logger('dev'));

app.use('/media', express.static('pulbic'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});




// An example middleware function
var a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
};

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);



app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
