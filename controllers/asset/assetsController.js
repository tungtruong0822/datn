const assetsModel = require('../../models/assetModel');
const { validationResult } = require('express-validator');
const express = require('express');
const flash = require('express-flash');
const session = require('express-session');

const assetsController = {};

assetsController.index = function (req, res, next) {
  assetsModel.getAllAsset(function (err, asset) {
    if (err) {
      return next(err);
    }
    res.render('asset/index',{ title: 'Assets Listing', asset: asset });
  });
};

// typeAssetController.add = function (req, res)  {
//   res.render('asset_type/add');
// };

// typeAssetController.save = function (req, res) {
//   const errors = validationResult(req);

//   if (errors.isEmpty()) {
//     const newType = {
//       asset_type_id: req.body.asset_type_id,
//       asset_type_name: req.body.asset_type_name, // Thay đổi tên cột để phù hợp với bảng
//       note: req.body.note,
//     };

//     typeAssetModel.insertType(newType, function (err) {
//       if (err) {
//         req.flash('error', 'There was an error in inserting data');
//       } else {
//         req.flash('success', 'Investment added successfully');
//       }
//       res.redirect('/type-asset');
//     });
//   } else {
//     const err_msg = errors.array().map((err) => err.msg).join('<br/>');
//     req.flash('error', err_msg);
//     res.render('asset_type/add');
//   }
// };

// typeAssetController.edit = function (req, res) {
//   const typeId = req.params.asset_type_id;
//   typeAssetModel.findAssetById(typeId, function (result) {
//     if (!result) {
//       req.flash('error', 'Sorry, the company does not exist!!');
//       return res.redirect('/type-asset');
//     }
//     res.render('asset_type/edit');
//   });
// };

// typeAssetController.update = function (req, res) {
//   const typeId = req.params.asset_type_id;
//   const errors = validationResult(req);

//   if (errors.isEmpty()) {
//     const updatedType = {
//       asset_type_id: req.body.asset_type_id,
//       asset_type_name: req.body.asset_type_name, // Thay đổi tên cột để phù hợp với bảng
//       note: req.body.note,
//     };

//     typeAssetModel.updateType(typeId, updatedType, function (result) {
//       if (result === "No result returned") {
//         req.flash('error', 'Investment does not exist.');
//       } else if (result === 1) {
//         req.flash('success', 'Investment Information updated successfully.');
//       } else {
//         req.flash('error', 'There was an error in updating the Investment.');
//       }
//       res.redirect('/type-asset');
//     });
//   } else {
//     const err_msg = errors.array().map((err) => err.msg).join('<br/>');
//     req.flash('error', err_msg);
//     res.redirect('/type-asset/edit/' + typeId);
//   }
// };

// typeAssetController.delete = function (req, res) {
//   const typeId = req.params.id;

//   typeAssetModel.deleteType(typeId, function (result) {
//     if (result === 1) {
//       req.flash('success', 'Investment deleted successfully.');
//     } else {
//       req.flash('error', 'There was an error in deleting the Investment.');
//     }
//     res.redirect('/type-asset');
//   });
// };

module.exports = assetsController;
