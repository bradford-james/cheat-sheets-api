const Sheet = require('../models/sheet');
const Column = require('../models/column');
const Category = require('../models/category');
const Command = require('../models/command');

exports.getSheets = function (req, res) {
  Sheet.find({}, 'cli').exec(function (err, list_sheets) {
    err ? next(err) : res.send(list_sheets);
  });
};

exports.getSheet = function (req, res) {
  Sheet.findOne({ cli: req.query.name })
  .exec(function (err, list_sheets) {
    err ? next(err) : res.send(list_sheets);
  });
};
