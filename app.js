const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const pug = require('pug');

const db = require('./database.js');
const Routes = require('./route.js');

const app = express();

app.set('view engine','pug');
app.set('views', path.join(__dirname, 'pugs'));

app.use(bodyParser.json());
app.use(Routes);

db.on('error', function(err) {console.log('Database connection error',err)});
db.once('connected', function() {
  console.log("connected to mongodb!");

  app.listen(5000,function(){
	console.log('Server running at localhost:'+5000);
  })
});