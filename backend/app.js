const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const { restart } = require('nodemon');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log(`New request [${ new Date() }]`);
  next();
});

const posts = [
  {id: "aa", title: "First post",  content: "The content of the first post"},
  {id: "ab", title: "Second post", content: "Hello this is my post"        },
  {id: "ac", title: "Goblin",      content: "My dick is a goblin"          }
];

app.get("/api/posts", (req, res, next) => {
  console.log("POST on /api/posts")
  console.log(posts)

  res.status(200).json( { message: "Post fetched succesfully",  posts: posts} )
});

// Install a packager: npm install --save body-parser
app.post("/api/posts", (req, res, next) => {
  const post = req.body

  console.log("GET on /api/posts")
  console.log(post)

  posts.push(post)

  res.status(201).json({ message: "Post added" })

});

module.exports = app;
