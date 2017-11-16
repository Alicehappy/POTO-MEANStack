var express = require('express');
var app = express();

var wiki = require('./wiki.js');
app.use('/wiki', wiki);

var logger = require('morgan');
app.use(logger('dev'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
