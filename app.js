var request = require('superagent');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/block', { useNewUrlParser: true });

routes(app);

module.exports = app;
