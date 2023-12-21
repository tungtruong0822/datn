module.exports = app => {
    require('./todo.route')(app);
    require('./web.route')(app);

}