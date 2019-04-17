const express = require('express')
const Destination = require('../models/Destination');
const User = require('../models/User');

const router = new express.Router()

router.get('/', (req, res) => {
  Destination.find({}).then((destination) => {
    User.find({}).then((users) => {
      return res.status(200).json({
        destination: destination.length,
        users: users.length
      })
    })
  })
})

module.exports = router
