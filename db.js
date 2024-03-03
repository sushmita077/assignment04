const mongoose = require('mongoose');

// Connecting MongoDB
mongoose.connect('mongodb://localhost:27017/Blogs', {
    
});

//Creating Author schema
const authorSchema = new mongoose.Schema({
    name : { type : String, required : true },
    email : { type : String, required : true},
    publishedData : { type : Date, required : true }
}, {
    versionKey: false
});
const Author = mongoose.model('Author', authorSchema);

//Creating Blog schema
const blogSchema = new mongoose.Schema({
    title : { type : String, required : true},
    blogcontent : { type : String, required : true},
    authorname : { type : String, required : true}
}, {
    versionKey: false
  });
const Blog = mongoose.model('Blog', blogSchema);

module.exports = { Author,Blog };