const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
	author: String,
	title: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
