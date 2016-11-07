console.log('Start');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function(req, res){
	res.send('Hello world');
});

	app.listen(1337, function(){
		console.log('Ca marche bien sur le port du diable');
	});

app.use(express.static('Public'));
app.use(bodyParser.urlencoded({extended : false}))
