"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var express = require("express");
var path = require("path");
var index_1 = require("./server/controllers/view/index");
var user_1 = require("./server/controllers/api/user");
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.engine('js', require('./server/engine'));
app.set('view engine', 'js');
app.use(express.static(path.join(__dirname, 'client/public')));
console.log("X=" + __dirname);
app.use('/', index_1.default);
app.use('/api/user', user_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
//# sourceMappingURL=app.js.map