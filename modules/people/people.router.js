const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')
const store = require('../../store')
const router = express.Router()

router
  .route('/people')
  .get((req, res) => {
    // res.send(People.get())
     res.send(store.people)
  })

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
})

module.exports = router
