const investmentModel = require('../models/investmentModel');
const { validationResult } = require('express-validator');
const express = require('express');
const flash = require('express-flash');
const session = require('express-session');

const investmentController = {};

investmentController.index = function (req, res, next) {
  investmentModel.getAllInvestment(function (err, investments) {
    if (err) {
      return next(err);
    }
    res.render('investment_Porfolio/index', { title: 'Investment Listing', investments: investments });
  });
};

investmentController.add = function (req, res) {
  res.render('investment_Porfolio/add');
};

investmentController.save = function (req, res) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const newInvestment = {
      name: req.body.name,
      portfolio_name: req.body.portfolio_name, // Thay đổi tên cột để phù hợp với bảng
    };

    investmentModel.insertInvestment(newInvestment, function (err) {
      if (err) {
        req.flash('error', 'There was an error in inserting data');
      } else {
        req.flash('success', 'Investment added successfully');
      }
      res.redirect('/admin/management/investment');
    });
  } else {
    const err_msg = errors.array().map((err) => err.msg).join('<br/>');
    req.flash('error', err_msg);
    res.render('investment_Porfolio/add');
  }
};

investmentController.edit = function (req, res) {
  const investmentId = req.params.id;
  investmentModel.findInvestmentById(investmentId, function (result) {
    if (!result) {
      req.flash('error', 'Sorry, the company does not exist!!');
      return res.redirect('/admin/management/investment');
    }
    res.render('investment_Porfolio/edit');
  });
};

investmentController.update = function (req, res) {
  const investmentId = req.params.id;
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const updatedInvestment = {
      name: req.body.name,
      portfolio_name: req.body.portfolio_name, // Thay đổi tên cột để phù hợp với bảng
    };

    investmentModel.updateInvestment(investmentId, updatedInvestment, function (result) {
      if (result === "No result returned") {
        req.flash('error', 'Investment does not exist.');
      } else if (result === 1) {
        req.flash('success', 'Investment Information updated successfully.');
      } else {
        req.flash('error', 'There was an error in updating the Investment.');
      }
      res.redirect('/admin/management/investment');
    });
  } else {
    const err_msg = errors.array().map((err) => err.msg).join('<br/>');
    req.flash('error', err_msg);
    res.redirect('/investment/edit/' + investmentId);
  }
};

investmentController.delete = function (req, res) {
  const investmentId = req.params.id;

  investmentModel.deleteInvestment(investmentId, function (result) {
    if (result === 1) {
      req.flash('success', 'Investment deleted successfully.');
    } else {
      req.flash('error', 'There was an error in deleting the Investment.');
    }
    res.redirect('/admin/management/investment');
  });
};

module.exports = investmentController;
