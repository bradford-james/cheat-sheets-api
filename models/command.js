const { Schema, model } = require('mongoose')

const commandSchema = new Schema({
  command: { type: String, required: true },
  description: { type: String, required: false },
  annotations: { type: String, required: false },
  options: { type: Array },
})

module.exports = {
  schema: commandSchema,
  model: model('Command', commandSchema, 'Commands'),
}
