const bodyParser = require('body-parser');
const express = require('express');

const Blog = require('./model/blog.js');

const app = express();

app.use(bodyParser.json());

app.get('/', function(request, response){
	response.render('form');
})

app.get('/blogs', function(request, response){
	Blog.find({}, function (err, docs) {
		if(err) {
			response.send({error: err.message });
		}
		response.send(docs);
	});
})

app.post('/blogs', function(request, response){
	const data = request.body;
	console.log(data);
	Blog.insertMany([data], function(err, docs) {
		if(err) {
			response.send({error: err.message });
		}
	response.send(docs);
	});
})


module.exports = app;