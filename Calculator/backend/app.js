const express = require('express'),
      fs = require('fs'),
      url = require('url');
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, POST, PUT, DELETE');
  next();
});

app.post('/writefile', function(req, res) {
  fs.writeFile('calculator.txt', req.body.number , function(err) {
    if (err) {
       res.status(500).jsonp({ error: 'Failed to write file' });
    }
    res.send("File write success");
  });
});


app.get('/', function(req,res) {
  const content = fs.readFile("./calculator.txt", "utf8", function(err, data){
    res.status(200).json({
      message: 'Number fetched successfully',
      number: data
    });
});

})

module.exports = app;
