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

numbersRouter.get('/:number', async (req, res, next) => {
  try {
    const result = await NumberModel.model.findOne({ number: req.params.number });
    if (!result) return res.status(404).end()
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

numbersRouter.post('/', async (req, res, next) => {
  try {
    const existing = await NumberModel.model.findOne({ number: req.body.number })
    if (existing) return res.status(400).send('The number has already been sold')
    const newNumber = new NumberModel.model(req.body)
    await newNumber.save()
    res.status(200).json(newNumber)
  } catch (error) {
    next(error)
  }
})

numbersRouter.put('/:number', async (req, res, next) => {
  try {
    let number = await NumberModel.model.findOne({ number: req.params.number })
    if (req.body?.status !== 'AVAILABLE' && (number && number?.status !== 'AVAILABLE')) return res.status(400).end('This number is not available for purchase')
    if (!number) number = new NumberModel.model({ number: req.params.number })
    if (req.body.status) number.status = req.body.status;
    if (req.body.soldTo) number.soldTo = req.body.soldTo;
    if (req.body.telephone) number.telephone = req.body.telephone;
    if (req.body.email) number.email = req.body.email;
    const result = await number.save()
    return res.status(200).send(result)
  } catch (error) {
    next(error)
  }
})

module.exports = numbersRouter