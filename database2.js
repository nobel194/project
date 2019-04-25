const schema = mongoose.Schema;

const blogSchema = new Schema({
	Book_name: String,
	Author: String,
	Title: String
});
const Blog = mongoose.model('Blog',BlogSchema);

var blog = new Blog({Book_name: 'Harry Potter',
	Author: 'J.K Rowling',
	Title: 'Deathly Hallows'});
blog.save(function (err,createBlog){
	if (err) {
		return console.log(err);
	}
	else console.log('created',createBlog);
}) 

function dba(){
	mongoose.db("mongodb://localhost:27017/myapp");
	return mongoose.connection;
}

dba()
.on('error', function(){console.log('Database connection error',err)})
.on('connected',function(){AudioListener()});

module.exports=Blog;