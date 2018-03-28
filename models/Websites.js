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

const WebsiteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  website: {
    // need to add a way to make sure this is a website.
    type: String,
    required: true
  },
  username: {
    // of person who added
    type: String
  },
  rating: {
    // upvotes vs downvotes
    type: Number
  },
  comments: [CommentSchema]
})

// Giving mongoose the schema to build the model
const website = mongoose.model('websites', WebsiteSchema)

// exporting the website model
module.exports = website
