const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const store = require('../../store')
const Queue = require('../queue/Queue')


const router = express.Router()

// LyricsRouter
//   .route('/')
//   .get((req, res, next) => {
//     LyricsService.getAllLyrics(req.app.get('db'))
//       .then(lyrics => {
//         res.json(lyrics)
//       })
//       .catch(next)
//   })

router
  .route('/')
  .get((req, res) => {
    res.send(store.dogs.concat(store.cats))
  })
router
  .route('/cats')
  .get((req, res) => {
    res.send(Pets.get())
  })
router
  .route('/dogs')
  .get((req, res) => {
    res.send(Pets.get(store.dogs))
  })

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
