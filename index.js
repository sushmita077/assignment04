const express = require('express');
const bodyParcer = require('body-parser');
const { Author, Blog } = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(bodyParcer.json());

// Define routes for POST and GET
app.post('/api/authors', async (req, res) => {
    try {
      const authorData = req.body;
      const author = new Author(authorData);
      await author.save();
      res.status(201).json(author);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.post('/api/blogs', async (req, res) => {
    try {
      const blogsData = req.body;
      const blog = new Blog(blogsData);
      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

app.get('/api/authors', async (req, res) => {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/api/blogs', async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});