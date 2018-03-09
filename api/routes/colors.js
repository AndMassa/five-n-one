const csscolorsObj = require('css-color-names')
const { map, keys, prop, propOr, append } = require('ramda')
const bodyParser = require('body-parser')
const uuid = require('uuid')
// create color document
const createColor = k => ({id: uuid.v4(), name: k, value: prop(k, csscolorsObj)})

const colors = map(createColor, keys(csscolorsObj))

module.exports = app => {
  app.use(bodyParser.json())
  app.get('/colors', (req, res) => {
    res.send(colors)
  })

  app.post('/colors', (req, res) => {

    const newColor = propOr(null, 'body', req)

    if (newColor) {
      colors = append(createColor(newColor.name), colors)
      res.send({ok: true})
    } else {
      res.status(400).send({ok: false})
    }
  })
}
