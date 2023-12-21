const userCustomerModel = require('../models/userCustomerModel');
const constructionModel = require('../models/constructionModel');
const moment = require('moment')


const userCustomerController = {};

userCustomerController.index = function (req, res, next) {
  userCustomerModel.getAllUserCustomer(function (err, customers) {
    if (err) {
      return next(err);
    }
    res.render('user_Customer/index', {
      title: 'Customer Listing',
      customers: customers
    });
  });
};

userCustomerController.add = function (req, res, next) {
  investmentModel.getAllInvestment(function (err, investments) {
    if (err) {
      return next(err);
    }
    res.render('construction/add', {
      title: 'Add Construction',
      investments: investments
    });
  });
};

constructionController.save = function (req, res, next) {
  req.assert('name', 'Name is required').notEmpty();
  req.assert('location', 'Location is required').notEmpty();
  req.assert('type', 'Type is required').notEmpty();
  req.assert('start_date', 'Start Date is required').notEmpty();
  req.assert('end_date', 'End Date is required').notEmpty();
  req.assert('investment_name', 'Investment name is required').notEmpty();

  const errors = req.validationErrors();
  if (!errors) {
    const newConstruction = {
      name: req.sanitize('name').escape().trim(),
      location: req.sanitize('location').escape().trim(),
      type: req.sanitize('type').escape().trim(),

      start_date: moment(req.sanitize('start_date').trim(), 'DD/MM/YYYY').toISOString(),
      end_date: moment(req.sanitize('end_date').trim(), 'DD/MM/YYYY').toISOString(),
      investment_name: req.sanitize('investment_name').escape().trim()
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
    const err_msg = errors.map(err => err.msg).join('<br>');
    investmentModel.getAllInvestment(function (err, investments) {
      if (err) {
        return next(err);
      }
      req.flash('error', err_msg);
      res.render('construction/add', {
        title: 'Add Construction',
        investments: investments
      });
    });
  }
};

constructionController.constructionDetail = function (req, res) {
  const construction_id = req.body.construction_id;
  const response = {};
  constructionModel.getConstructionById(construction_id, function (result) {
    if (result == null) {
      response.status = 0;
      response.data = {};
      response.message = 'Construction not found';
    } else {
      response.status = 1;
      response.data = result;
      response.message = 'Construction found';
    }
    res.send(JSON.stringify(response));
  });
};

constructionController.edit = function (req, res, next) {
  const construction_id = req.params.construction_id;
  constructionModel.getConstructionById(construction_id, function (result) {
    if (result == null) {
      req.flash('error', 'Construction not found');
      res.redirect('/construction');
    } else {
      investmentModel.getAllInvestment(function (err, investments) {
        if (err) {
          return next(err);
        }
        res.render('construction/edit', {
          title: 'Edit Construction',
          construction: result[0],
          investments: investments
        });
      });
    }
  });
};

module.exports = constructionController;