const { Schema, model } = require('mongoose')
const Category = require('./category')

const columnSchema = new Schema({
  categories: [Category.schema],
})

module.exports = {
  schema: columnSchema,
  model: model('Column', columnSchema),
}
