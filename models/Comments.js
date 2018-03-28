// Import DB connection
const mongoose = require('../db/connection')

// Create a new schema
const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
})

// Giving mongoose the schema to build the model
const comment = mongoose.model('comments', CommentSchema)

// exporting the comment model
module.exports = comment
