const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const store = require('../../store')
const Queue = require('../queue/Queue')


const router = express.Router()

router
  .route('/pets')
  .get((req, res) => {
    res.send(store.dogs.concat(store.cats))
  })
router
  .route('/cats')
  .get((req, res) => {
    res.send(Pets.getCat())
  })
router
  .route('/dogs')
  .get((req, res) => {
    res.send(Pets.getDog())
  })

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
