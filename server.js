var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var server = express();

// Middlewares
var middleware = require('./lib/middleware');

server.use(bodyParser.json("application/json"));
server.use(cors());

server.use(middleware);

if(!module.parent){
	var port = process.env.PORT || 4000;
	server.listen(port, function(){
		console.log("Puerto ", port);
	})
}else{
	module.exports = server;
}
