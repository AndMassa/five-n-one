const fortuneCookieObj = require('fortune-cookie')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const createFortuneCookie = k => ({id: uuid.v4(), name: k, value: null})

const fortuneCookies = map(createFortuneCookie, fortuneCookieObj)

module.exports = app => {

  app.get('/fortune-cookie', (req, res) => {
    res.send(fortuneCookies)
  })
}
