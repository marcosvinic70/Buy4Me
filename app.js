"use strict";
const express = require('express'),
	consign = require('consign'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	path = require('path'),
	app = express(),
	server = require('http').Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

consign()
	.include('models')
	.then('controllers')
	.then('routes')
	.into(app);

server.listen(process.env.PORT, () => {

	console.log("Buy4me server listening on port " + process.env.PORT + ".");

});

module.exports = app;