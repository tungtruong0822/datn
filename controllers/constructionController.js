
const constructionModel = require('../models/constructionModel');
const { validationResult } = require('express-validator');
const moment = require('moment')


const constructionController = {};

constructionController.index = function (req, res, next) {
  constructionModel.getAllConstruction(function (err, constructions) {
    if (err) {
      return next(err);
    }
    res.render('construction/index', { title: 'Construction Listing', constructions: constructions });
  });
};

constructionController.add = function (req, res) {
  res.render('construction/add');
};

constructionController.save = function (req, res) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const newConstruction = {
      name: req.body.name,
      portfolio_name: req.body.portfolio_name, // Thay đổi tên cột để phù hợp với bảng
      start_date: moment(req.body.start_date, 'DD/MM/YYYY').format('DD-MM-YYYY'),
      end_date: moment(req.body.end_date, 'DD/MM/YYYY').format('DD-MM-YYYY'),
      location: req.body.location,
      type: req.body.type,
      asset_name: req.body.asset_name,


    };

    constructionModel.insertConstruction(newConstruction, function (err) {
      if (err) {
        req.flash('error', 'There was an error in inserting data');
      } else {
        req.flash('success', 'Construction added successfully');
      }
      res.redirect('/construction');
    });
  } else {
    const err_msg = errors.array().map((err) => err.msg).join('<br/>');
    req.flash('error', err_msg);
    res.render('construction/add');
  }
};

module.exports = constructionController;
