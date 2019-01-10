var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./models');
    
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname +'/public'));
// app.use(express.static(__dirname + '/views'));

app.get('/api/forcasts/', function(req, res){
  console.log('backend api call for forcasts.....')
  db.Forcast.find()
  .then(function(forcasts){
    console.log('weather-api result...', forcasts);
    res.json(forcasts);
  })
  .catch(function(err){
    res.send(err);
  })
});

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})
