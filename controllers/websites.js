const express = require('express')
const router = express.Router()
const Blog = require('../models/Websites')

// just some placeholders from my project 2
// router.put('/:id', (req, res) => {
//     Blog.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
//       blog => {
//         Blog.find({}).then(blog => {
//           res.json(blog)
//         })
//       }
//     )
//   })

//   // delete a blog by id: '/:id'
//   router.delete('/:id', (req, res) => {
//     Blog.findOneAndRemove({ _id: req.params.id }).then(blog => {
//       Blog.find({}).then(blog => {
//         res.json(blog)
//       })
//     })
//   })

// export our router (then import in index.js)
module.exports = router
