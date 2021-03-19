const mongoose = require('mongoose');

/*
// Alernative more modern javascrip
  import mongoose from 'mongoose';
  const { Schema } = mongoose;
*/

const postSchema = mongoose.Schema({
// _id: String
  content: { type: String, required: true },
  creatorId: { type: String, required: true },
  creatorEmail: { type: String, required: true }
})

module.exports = mongoose.model('Post', postSchema);
