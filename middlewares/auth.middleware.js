

//auth middleware
exports.loggedin = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.user = req.session.user;
        next();
    } else {
        res.redirect('/login');
    }
}

exports.isAuth = (redirectPath) => {
    return (req, res, next) => {
        if (req.session.loggedin) {
            res.locals.user = req.session.user;
            res.redirect(redirectPath);
        } else {
            next();
        }
    }
};

// Define specific middleware instances
exports.isAuthAdmin = exports.isAuth('/admin/dashboard');
