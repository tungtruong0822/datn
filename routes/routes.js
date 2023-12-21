const express = require('express');
const routes = express.Router();
const loginController = require('../controllers/auth/login.controller');
const registerController = require('../controllers/auth/register.controller');
const forgotPasswordController = require('../controllers/auth/forgotPassword.controller');
const iotController = require('../controllers/iot.controller');
const getToukenController = require('../controllers/touken.controller');
const projectController = require('../controllers/project.controller');
const investmentController = require('../controllers/investmentController');
const constructionController = require('../controllers/constructionController');
const userTechnicalController = require('../controllers/userTechnicalController');
const technicalController = require('../controllers/technical/technicalController');
// const userCustomerController = require('../controllers/userCustomerController');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth.middleware');
const typeAssetController = require('../controllers/asset/typeAssetController');
const assetsController = require('../controllers/asset/assetsController');
const reportController = require('../controllers/reportController');

const suggestController = require('../controllers/suggest/suggestController');
require('dotenv/config');

// Authentication routes
routes.get('/', authMiddleware.isAuthAdmin, loginController.showLoginForm);
routes.get('/login', authMiddleware.isAuthAdmin, loginController.showLoginForm);
routes.post('/login', loginController.login);
routes.get('/register', authMiddleware.isAuthAdmin, registerController.create);
routes.post('/register', registerController.register);
routes.get('/logout', authMiddleware.loggedin, loginController.logout);
routes.get('/verify', registerController.verify);

// Password reset routes
routes.get('/password/reset', forgotPasswordController.showForgotForm);
routes.post('/password/email', forgotPasswordController.sendResetLinkEmail);
routes.get('/password/reset/:email', forgotPasswordController.showResetForm);
routes.post('/password/reset', forgotPasswordController.reset);

// Authentication middleware instances
const isAuthAdmin = authMiddleware.isAuth('/admin/dashboard');
// const isAuthInvestment = authMiddleware.isAuth('/investment');


// IoT routes
routes.get('/auth/token', getToukenController.get_Token);

routes.get("/iot/sensors", iotController.getIotSensors);
routes.get("/iot/channels", iotController.getIotChannels);
routes.get("/iot/samples", iotController.getIotSamples);

// Project routes
routes.get('/projects', projectController.index);
// routes.get('/projects/add', projectController.add);
// routes.post('/projects/add', projectController.save);

// Investment routes
routes.get('/admin/management/investment',  investmentController.index);
routes.get('/admin/management/investment/add',  investmentController.add);
routes.post('/admin/management/investment/add',  investmentController.save);
routes.get('/admin/management/investment/edit/(:id)',  investmentController.edit);
routes.post('/admin/management/investment/edit/(:id)',  investmentController.update);
routes.post('/admin/management/investment/delete/(:id)', investmentController.delete);


// Construction routes
routes.get('/construction', constructionController.index);
routes.get('/construction/add', constructionController.add);
routes.post('/construction/add', constructionController.save);
// routes.post('/construction/view', constructionController.constructionDetail);
// routes.get('/construction/edit/(:id)', constructionController.edit);

// User Technical routes
routes.get('/user-technical', userTechnicalController.showTechnical);



//Type of asset
routes.get('/type-asset', typeAssetController.index);

routes.get('/asset', assetsController.index);


routes.get('/report', reportController.index);
// routes.get('/report/add', reportController.add);
// router.post('/report/add', reportController.save);

routes.get('/suggest', suggestController.showSuggest);


// User Customer routes
// routes.get('/user-customer',userCustomerController.index);
// routes.get('/user-customer/add',userCustomerController.add);
// routes.post('/user-customer/add',userCustomerController.save);
// routes.get('/user-customer/edit/(:id)',userCustomerController.edit);
// routes.post('/user-customer/edit/(:id)',userCustomerController.update);
// routes.post('/user-customer/view',userCustomerController.customerDetail);

// routes.get('/technical/dashboard',  authMiddleware.isTechnical,technicalController.showTechnical);

// User routes
routes.get('/user-profile',  userController.showUser);



//Type of asset
// routes.get('/type-asset', typeAssetController.index);

// Dynamic route (assuming the file name is 'route.js')
require('./route')(routes);

module.exports = routes;
