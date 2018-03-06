const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const app = express()

app.use(cors({ credentials: true }))

// load routes here

app.get('/', (req, res) => res.send('5n1 API Server'))

//.... after the app.use

colorRoutes(app)

//.... before the app.listen

app.listen(5000)
console.log('Server listening at 5000')
