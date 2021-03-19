const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

mongoose.connect(
  "mongodb+srv://alniarez-mongo:FtyF9F7mvviniNq@mycluster.yojcv.mongodb.net/MyCluster?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true } )
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


// Posts
app.use("/api/posts", postsRoutes)
// User
app.use("/api/user" , userRoutes)


module.exports = app
