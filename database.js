const mongoose = require('mongoose');
const port = 3000;
const connection = mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
console.log(connection);
const user=require('./schema').default;
const db = mongoose.connection;
db.on('error', function(err) {console.log('Database connection error',err)});
db.once('connected', function() {
  console.log("we're connected!");
});
function dba(){
	mongoose.db("mongodb://localhost:27017/myapp");
	return mongoose.connection;
}

dba()
.on('error', function(){console.log('Database connection error',err)})
.on('connected',function(){AudioListener()});
