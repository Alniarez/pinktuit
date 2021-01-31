const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./post")


mongoose.connect(
  "mongodb+srv://alniarez-mongo:FtyF9F7mvviniNq@mycluster.yojcv.mongodb.net/MyCluster?retryWrites=true&w=majority",
  { useUnifiedTopology: true } )
.then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
})


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
  Post.find().then( documents => {
    res.status(200)
    .json({
       message: "Post fetched succesfully",
       posts: documents
    })
  })
})

// Delete posts
app.delete("/api/posts/:id", (req, res, next) => {
  let postId = req.params.id;
  Post.deleteOne({_id: postId})
  .then( documents => {
    res.status(200).json( { message: "Post deleted succesfully" })
  }).catch(error => {
    console.error(error)
    res.status(304).json( { message: "Could not delete a post" })
  })
})

// Install a package: npm install save body-parser
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    content: req.body.content
  })

  post.save().then(createdPost => {
    res.status(201).json ({
     message: "Post added succesfully",
     postId: createdPost._id,
     })
  })

  console.log
});

module.exports = app;
