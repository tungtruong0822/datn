const authMiddleware = require('../middlewares/auth.middleware');

module.exports = app => {
    var router = require('express').Router();

    router.get('/admin/dashboard', authMiddleware.loggedin, (req, res) => {
        res.render('home');
    });

    router.get('/technical/dashboard', authMiddleware.loggedin, (req, res) => {
        res.render('technical/technical');
    });


    app.use(router);
}