var mongoose = require('mongoose');
mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/todo-api');
mongoose.connect('mongodb://heroku_brsv3rk0:or3qfqhoglj2n80o5fp6c2cau@ds163826.mlab.com:63826/heroku_brsv3rk0');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
