const { Schema, model } = require('mongoose')
const Command = require('./command')

const categorySchema = new Schema({
  name: { type: String, required: true },
  commands: [Command.schema],
})

module.exports = {
  schema: categorySchema,
  model: model('Category', categorySchema),
}
