var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv/config');

// Connect to Mongoose
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('Connected to DB')
);

var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Hello World!')
});

app.listen(5000);
console.log('Running on Port 5000!');