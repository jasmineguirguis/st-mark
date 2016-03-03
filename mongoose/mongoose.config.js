var mongoose = require('mongoose');
var config = require('../config');

var db = mongoose.connect(config.database.uri);
db.connection.on('error', ()=> console.log('Database connection error!'));
db.connection.once('open', ()=> console.log('Database connection has been established.'));

module.exports = db;
