const mongoose = require('mongoose');

/*
// Alernative more modern javascrip
  import mongoose from 'mongoose';
  const { Schema } = mongoose;
*/

const postSchema = mongoose.Schema({
// _id: String
  title: { type: String, required: true },
  content: { type: String, required: true }
})

module.exports = mongoose.model('Post', postSchema);
