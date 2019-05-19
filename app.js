const bodyParser = require('body-parser');
const express = require('express');

const Blog = require('./model/blog.js');
const db = require('./database.js');

const app = express();

app.use(bodyParser.json());

app.get('/', function(request, response){
	response.send('Hello World');
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

db.on('error', function(err) {console.log('Database connection error',err)});
db.once('connected', function() {
  console.log("connected to mongodb!");

  app.listen(5000,function(){
	console.log('Server running at localhost:'+5000);
  })
});