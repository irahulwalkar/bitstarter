var fs = require('fs');
var express = require('express');
var buffer = new Buffer(256);
var file = fs.readFileSync('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('urtf-8',fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
