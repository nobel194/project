const mongoose = require('mongoose');
const port = 3000;
const connection = mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});
console.log(connection);
const user=require('./database2');
const db = mongoose.connection;
db.on('error', function(err) {console.log('Database connection error',err)});
db.once('connected', function() {
  console.log("we're connected!");
});

