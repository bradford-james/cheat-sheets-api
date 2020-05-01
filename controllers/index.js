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

exports.getColumns = function (req, res) {
  Column.find()
    .populate({
      path: 'categories',
      populate: {
        path: 'commands',
      },
    })
    .exec(function (err, list_sheets) {
      err ? next(err) : res.send(list_sheets);
    });
};

exports.getCategories = function (req, res) {
  Category.find()
    .populate('commands')
    .exec(function (err, list_sheets) {
      err ? next(err) : res.send(list_sheets);
    });
};

exports.getCommands = function (req, res) {
  Command.find().exec(function (err, list_commands) {
    err ? next(err) : res.send(list_commands);
  });
};
