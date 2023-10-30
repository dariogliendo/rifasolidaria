const numbersRouter = require('express').Router()
const NumberModel = require('../models/number')

numbersRouter.get('/', async (req, res, next) => {
  try {
    const result = await NumberModel.model.find({})
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

numbersRouter.get('/:id', async (req, res, next) => {
  try {
    const result = await NumberModel.model.findById(req.params.id);
    if (!result) return res.status(404).end()
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

numbersRouter.post('/', async (req, res, next) => {
  try {
    const existing = NumberModel.model.findOne({number: req.body.number})
    if (existing) return res.status(400).send('The number has already been sold')
    const newNumber = new NumberModel.model(req.body)
    await newNumber.save()
    res.status(200).json(newNumber)
  } catch (error) {
    next(error)
  }
})

module.exports = numbersRouter