const Queue = require('../queue/Queue')
const store = require('../../store')


const pets = {
  cats: new Queue(),
  dogs: new Queue()
}
store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))


module.exports = {

  allCats() {
    return pets.cats.all()
  },

  allDogs() {
    return pets.dogs.all()
  },

  getCat() {

    return pets.cats.show()
  },
  getDog() {
  
    return pets.dogs.show()
  },

  dequeue(type) {
    if (type === 'cat') {
      const cats = pets.cats.dequeue()
      pets.cats.enqueue(cats)
    }
    if (type === 'dog') {
      const dogs = pets.dogs.dequeue()
      pets.dogs.enqueue(dogs)
    }
  }
}