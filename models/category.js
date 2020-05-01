const { Schema, model } = require('mongoose');
const Command = require('../models/command');

const categorySchema = new Schema({
  name: { type: String, required: true },
  commands: [Command.schema],
});

module.exports = {
  schema: categorySchema,
  model: model('Category', categorySchema),
};
