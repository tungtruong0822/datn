// exports.showProject = (req, res) => {
//     res.render('index');
// }

const projectModel = require('../models/projectModel');
const { validationResult } = require('express-validator');


const projectController = {};

projectController.index = function (req, res, next) {
  projectModel.getAllReport(function (err, reports) {
    if (err) {
      return next(err);
    }
    res.render('index');
  });
};

// projectController.add = function (req, res) {
//   res.render('index');
// };

// projectController.save = function (req, res) {
//   const errors = validationResult(req);

//   if (errors.isEmpty()) {
//     const newReport = {
//       construction_name: req.body.construction_name,
//       asset_name: req.body.asset_name, // Thay đổi tên cột để phù hợp với bảng
//       location: req.body.location,
//       note: req.body.note,
//       suggest: req.body.suggest,
//       test_day: req.body.test_day,
//       time: req.body.time,
//       technical_name: req.body.technical_name,

//     };

//     projectModel.insertReport(newReport, function (err) {
//       if (err) {
//         req.flash('error', 'There was an error in inserting data');
//       } else {
//         req.flash('success', 'Report added successfully');
//       }
//       res.redirect('/projects');
//     });
//   } else {
//     const err_msg = errors.array().map((err) => err.msg).join('<br/>');
//     req.flash('error', err_msg);
//     res.render('index');
//   }
// };



module.exports = projectController;
