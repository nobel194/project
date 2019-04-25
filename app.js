const express = require('express');
const app = express();
const conn = require('./database.js');

app.get('/',function(request,response){
	response.send('Hello World');
})

app.get('/student',function(apple,ball){
	ball.send({name: ['Ram',"Shyam"],roll:3});
})

app.post('/students',function(request,response){
	student = request.body;
	console.log(request);
	response.send('created user');
})

app.listen(3000,function(){
	console.log('Server running at localhost:'+3000);
})

function dba(){
	mongoose.db("mongodb://localhost:27017/myapp");
	return mongoose.connection;
}

dba()
.on('error', function(){console.log('Database connection error',err)})
.on('connected',function(){AudioListener()});
