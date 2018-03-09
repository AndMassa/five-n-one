const buzzWordsObj = require('buzzwords')
const { map, keys, prop, propOr, append } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')

const createBuzzWords = k => ({id: uuid.v4(), name: k, value: null})

var theWords = map(createBuzzWords, buzzWordsObj)

module.exports = app => {
  app.use(bodyParser.json())
  app.get('/buzzwords', (req, res) => {
    res.send(theWords)
  })

  app.post('/buzzwords', (req, res) => {

    const newBuzzword = propOr(null, 'body', req)

    if (newBuzzword) {
      theWords = append(createBuzzWords(newBuzzword.name), theWords)
      res.send({ok: true})
    } else {
      res.status(400).send({ok: false})
    }
  })
}
