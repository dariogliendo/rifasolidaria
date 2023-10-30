const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const numbersRouter = require('./controllers/numbers')
const app = express()
const cors = require('cors')

console.log('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

/// Routers
app.use('/api/numbers', numbersRouter)

app.listen(config.PORT, () => {
  console.log('Express server listening on ' + config.PORT)
})