const express = require('express')
const cors = require('cors')
const PeopleRouter = require('../people/people.router')
const PetsRouter = require('../pets/pets.router')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, world!')
})
  

app.use('/api', PeopleRouter)
// app.use('/pets', PetsRouter)
app.use('/api', PetsRouter)


module.exports = app
