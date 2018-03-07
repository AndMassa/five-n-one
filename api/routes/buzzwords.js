const buzzWordsObj = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createBuzzWords = k => ({id: uuid.v4(), name: k, value: prop(k, buzzWordsObj)})

const buzzWords = map(createBuzzWords, keys(buzzWordsObj))

module.exports = app => {

  app.get('/buzzwords', (req, res) => {
    res.send(buzzWords)
  })
}
