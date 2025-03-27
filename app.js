var express = require('express');
var app = express();

// get someone's track list, get first 10 of the list
app.get('/user/:name/', function(req, res) {
    var myName = req.params.name;
    var limit = req.query.limit;
    var q = req.query.q;
    res.send('<html><head></head><body><h1>'
    +myName
    +'想要找關鍵字叫做'
    +q
    +'的資料'
    +'是要找前'
    +limit
    +'筆資料'
    +'</h1></body></html>');
});

app.get('/user/edit-photo', function(req, res) {
    res.send('<html><head></head><body><h1>tom</h1></body></html>');
});

// Listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port);