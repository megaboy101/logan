var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.end("yes") // <--- Edit this text to change whether late
});

app.listen(process.env.PORT || 3000);