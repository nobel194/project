const express = require('express');
const app = express();

app.get('/',function(request,response){
	response.send('Hello World');
})

app.get('/student',function(apple,ball){
	ball.send({name: ['Ram',"Shyam"],roll:3});
})

app.listen(3000,function(){
	console.log('Server running at localhost:'+3000);
})

app.post('/students',function(request,response){
	student = request.body;
	console.log(request);
	response.send('created user');

})