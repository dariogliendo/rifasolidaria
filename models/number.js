const mongoose = require('mongoose')
const axios = require('axios')
require('dotenv').config()

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

exports.schema.post('save', async (document) => {
  try {
    const res = await axios.post('https://graph.facebook.com/v17.0/139152282623149/messages',
      {
        messaging_product: "whatsapp",
        to: "543515221472",
        type: "template",
        template: {
          name: "reserva",
          language: {
            code: "es_AR"
          },
          components: [
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: document.number,
                },
                {
                  type: "text",
                  text: document.soldTo
                },
                {
                  type: "text",
                  text: document.telephone
                },
                {
                  type: "text",
                  text: document.email || "Sin correo"
                }
              ]
            },
            {
              type: "button",
              index: 0,
              sub_type: "url",
              parameters: [
                {
                  type: "text",
                  text: document.number
                }
              ]
            }
          ]
        },
      },
      {
        headers: {
          'Authorization': 'Bearer ' + process.env.WHATSAPP_BEARER
        }
      })
    console.log(res)
  } catch (error) {
    console.log(error.message)
  }
})

exports.model = mongoose.connection.model('numbers', exports.schema)