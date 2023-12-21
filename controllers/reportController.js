const reportModel = require('../models/reportModel');
const { validationResult } = require('express-validator');


const reportController = {};

reportController.index = function (req, res, next) {
  reportModel.getAllReport(function (err, reports) {
    if (err) {
      return next(err);
    }
    res.render('report/index', { title: 'Report Listing', reports: reports });
  });
};

reportController.add = function (req, res) {
  res.render('construction/index');
};

reportController.save = function (req, res) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const newReport = {
      construction_name: req.body.construction_name,
      asset_name: req.body.asset_name, // Thay đổi tên cột để phù hợp với bảng
      location: req.body.location,
      note: req.body.note,
      suggest: req.body.suggest,
      test_day: req.body.test_day,
      time: req.body.time,
      technical_name: req.body.technical_name,

    };

    reportModel.insertReport(newReport, function (err) {
      if (err) {
        req.flash('error', 'There was an error in inserting data');
      } else {
        req.flash('success', 'Report added successfully');
      }
      res.redirect('/suggest');
    });
  } else {
    const err_msg = errors.array().map((err) => err.msg).join('<br/>');
    req.flash('error', err_msg);
    res.render('construction/index');
  }
};



module.exports = reportController;
