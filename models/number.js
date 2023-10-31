const mongoose = require('mongoose')

exports.schema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  status: {
    required: true,
    type: String,
    enum: ['PENDING', 'SOLD', 'AVAILABLE'],
    default: 'AVAILABLE'
  },
  soldTo: String,
  telephone: String,
  email: String,
})

exports.model = mongoose.connection.model('numbers', exports.schema)