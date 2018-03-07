const starWarsNames = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createStarWars = c => ({

  id: uuid.v4(),
  name: c,
  value: null

})

const starWars = map(createStarWars, starWarsNames.all)

module.exports = app => {

  app.get('/starwars', (req, res) => {
    res.send(starWars)
  })
}
