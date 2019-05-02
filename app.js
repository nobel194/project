const express = require('express');

const db = require('./database.js');

const app = express();

app.get('/',function(request, response){
	response.send('Hello World');
})

app.get('/blogs',function(req, res){
	res.send({name: ['Ram',"Shyam"],roll:3});

})

app.post('/blogs',function(request, response){
	student = request.body;
	console.log(request);
	response.send('created user');
})

db.on('error', function(err) {console.log('Database connection error',err)});
db.once('connected', function() {
  console.log("connected to mongodb!");

  app.listen(3000,function(){
	console.log('Server running at localhost:'+3000);
  })
});