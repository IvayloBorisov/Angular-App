const express = require('express')
const authCheck = require('../middleware/auth-check');
const Destination = require('../models/Destination');

const router = new express.Router()

function validateDestinationForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.year = parseInt(payload.year)
  payload.price = parseInt(payload.price)

  if (!payload || typeof payload.make !== 'string' || payload.make.length < 3) {
    isFormValid = false
    errors.make = 'Make must be more than 3 symbols.'
  }

  if (!payload || typeof payload.model !== 'string' || payload.model.length < 3) {
    isFormValid = false
    errors.model = 'Model must be more than 3 symbols.'
  }

  if (!payload || !payload.year || payload.year < 1950 || payload.year > 2050) {
    isFormValid = false
    errors.year = 'Year must be between 1950 and 2050.'
  }

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10) {
    isFormValid = false
    errors.description = 'Description must be more than 10 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || typeof payload.image !== 'string' || payload.image.length === 0) {
    isFormValid = false
    errors.image = 'Image URL is required.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/create', authCheck, (req, res) => {
  const destination = req.body
  destination.creator = req.user._id
  const validationResult = validateDestinationForm(destination)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  destination.create(destination)
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'destination added successfully.',
        destination
      })
    })
})

router.get('/all', authCheck ,(req, res) => {
  const page = parseInt(req.query.page) || 1
  const search = req.query.search

  destination.find({})
    .then((destination) => {
      return res.status(200).json(destination)
    })
})

router.get('/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  destination.findById(id)
    .then((destination) => {
      if (!destination) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        location: destination.location,
        model: destination.hotel,
        imageUrl: destination.imageUrl,
        description: destination.description,
        creator: destination.creator,
        topSights: destination.topSights,
      }

      // if (destination.material) {
      //   response.material = destination.material
      // }

      res.status(200).json(response)
    })
})


router.get('/user', authCheck, (req, res) => {
  const user = req.user._id

  destination.find({creator: user})
    .then((destination) => {
      return res.status(200).json(destination)
    })
})

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = req.user._id

  destination.findById(id)
    .then((destination) => {
      if (!destination) {
        return res.status(200).json({
          success: false,
          message: 'destination does not exists!'
        })
      }

      if ((destination.creator.toString() != user && !req.user.roles.includes("Admin"))) {
         return res.status(401).json({
           success: false,
           message: 'Unauthorized!'
         })
      }

      destination.findByIdAndDelete(id)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: 'destination deleted successfully!'
          })
        })
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
  const id = req.params.id;
  const destination = req.body;

  if (!destination) {
    return res.status(404).json({
      success: false,
      message: 'destination does not exists!'
    })
  }

  if (!req.user.roles.includes('Admin')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized!'
    })
  }

  const validationResult = validateDestinationForm(destination)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  destination.findByIdAndUpdate(id, destination)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'destination edited successfully!'
      })
  })
})

router.get('/:id', authCheck, (req, res) => {
  const id = req.params.id

  destination.findById(id)
    .then(destination => {
      if (!destination) {
        return res.status(404).json({
          success: false,
          message: 'Entry does not exists!'
        })
      }

      let response = {
        id,
        location: destination.location,
        model: destination.hotel,
        imageUrl: destination.imageUrl,
        description: destination.description,
        creator: destination.creator,
        topSights: destination.topSights,
      }

      // if (destination.material) {
      //   response.material = destination.material
      // }

      res.status(200).json(response)
    })
})

module.exports = router
