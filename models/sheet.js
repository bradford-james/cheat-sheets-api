const { Schema, model } = require('mongoose')
const Column = require('./column')

const sheetSchema = new Schema({
  sheetName: { type: String, required: true },
  cli: { type: String, required: false },
  columns: [Column.schema],
})

module.exports = model('Sheet', sheetSchema, 'CliSheets')
