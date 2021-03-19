const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/user");

const router = express.Router();

router.post("/signin", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, encrypted) => {
    const errorHandling = (error) => {
      res.status(500).json({ error: error })
    }
    if (err) {
      errorHandling(err)
      return;
    }

    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: encrypted
    })

    user.save().then(result => {
      res.status(201).json({
        message: "user created",
        user: result
      })
    }).catch(errorHandling)
  })

})


router.post('/login', (req, res, next) => {
  let fetchedUser
  User.findOne({ email: req.body.email })
    .then(user => {

      // Verify that an account  (on the database)
      if (!user) {
        return res.status(404).json({
          message: "User does not exists"
        });
      }

      fetchedUser = user

      return bcrypt.compare(req.body.password, user.password)
    }).then(result => {
      // verify that password matches
      if (!result)
        return res.status(401).json({
          message: "Incorrect password"
        });

      // Give the user a key to his account
      const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id }, 'our_cool_crypto', { expiresIn: "1h" })

      res.status(200).json({ token: token, myId: fetchedUser._id })
    })
})



module.exports = router
