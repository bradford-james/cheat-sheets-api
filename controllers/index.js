const Sheet = require('../models/sheet')

exports.getSheets = (req, res, next) => {
  Sheet.find({}, 'cli').exec((err, listSheets) =>
    err ? next(err) : res.send(listSheets)
  )
}

exports.getSheet = (req, res, next) => {
  Sheet.findOne({ cli: req.query.name }).exec((err, listSheets) =>
    err ? next(err) : res.send(listSheets)
  )
}
