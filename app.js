var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>hi!</h1></body></html>');
});

app.get('/user', function(req, res) {
    res.send('<html><head></head><body><h1>tom</h1></body></html>');
});

// Listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port);