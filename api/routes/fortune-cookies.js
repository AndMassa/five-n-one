const fortuneCookieObj = require('fortune-cookie')
const { map, prop, append } = require('ramda')
const uuid = require('uuid')

const createFortuneCookie = k => ({
  id: uuid.v4(),
  name: k,
  value: null
})

var fortuneCookies = map(createFortuneCookie, fortuneCookieObj)

module.exports = app => {

  app.get('/fortune-cookie', (req, res) => {
    res.send(fortuneCookies)
  })

  app.post('/fortune-cookie', (req, res) => {
    cookis = append(req.body, fortuneCookies)
    res.send({ok: true})
  })
}
