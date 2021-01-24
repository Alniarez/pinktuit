const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors())

app.use((req, res, next) => {
  console.log(`${req.method} request on "${req.url}" at [${ new Date() }]`);
  next();
});


// Get posts
app.get("/api/posts", (req, res, next) => {
  res
    .status(200)
    .json( { message: "Post fetched succesfully",  posts: [{id: "aa", title: "First post",  content: "The content of the first post"}]} )
});

// Install a package: npm install save body-parser
app.post("/api/posts", (req, res, next) => {
  const post = req.body

  console.log(post)

  res.status(201).json({ message: "Post added" })
});

module.exports = app;
