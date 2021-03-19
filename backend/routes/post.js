const express = require("express");

const Post = require("../model/post");

const authenticateUser = require("../middleware/check-auth")

const router = express.Router();

// Get posts
router.get("", (req, res, next) => {
  Post.find().then( documents => {
    res.status(200)
    .json({
       message: "Post fetched succesfully",
       posts: documents
    })
  })
})

// Delete posts
router.delete("/:id", authenticateUser, (req, res, next) => {
  let postId = req.params.id;
  Post.deleteOne({_id: postId, creatorId: req.userData.userId})
  .then( documents => {
    res.status(200).json( { message: "Post deleted succesfully" })
  }).catch(error => {
    console.error(error)
    res.status(304).json( { message: "Could not delete a post" })
  })
})

// Add post
router.post("", authenticateUser, (req, res, next) => {
  const post = new Post({
    content: req.body.content,
    creatorId: req.userData.userId,
    creatorEmail: req.userData.email,
  })

  post.save().then(createdPost => {
    res.status(201).json ({
     message: "Post added succesfully",
     postId: createdPost._id,
     creatorId: req.userData.userId,
     creatorEmail: req.userData.email
     })
  })

})

module.exports = router;
