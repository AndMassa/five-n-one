const starWarsNames = require('starwars-names')
const { map, keys, prop, append } = require('ramda')
const uuid = require('uuid')

const createStarWars = c => ({

  id: uuid.v4(),
  name: c,
  value: null

})

var starWars = map(createStarWars, starWarsNames.all)

module.exports = app => {

  app.get('/starwars', (req, res) => {
    res.send(starWars)
  })

  app.post('/starwars', (req, res) => {
    starwars = append(createStarWars(req.body.name), starWars)
    res.send({ok:true})
  })
}
