var express = require('express');
var app = express();

var user = require('./routes/user');
app.use('/user', user);

// Listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port);