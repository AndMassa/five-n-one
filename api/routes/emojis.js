const emojiObj = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createEmoji = k => ({
  id: uuid.v4(),
  name: k,
  value: null})

const emojis = map(createEmoji, emojiObj)

module.exports = app => {

  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })
}
