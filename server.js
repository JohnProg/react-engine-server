'use strict';

require('node-jsx').install();

var express = require('express'),
	renderer = require('react-engine'),
	app = express(),
	engine = renderer.server.create();

app.engine('.jsx', engine);

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);

app.use(express.static(__dirname + '/public'));

var indexView = function (req, res) {
	 res.render('index', {
	 	title: req.params.title || 'John'
	 })
};

app.get('', indexView);
app.get('/:title', indexView);

app.listen(3000);