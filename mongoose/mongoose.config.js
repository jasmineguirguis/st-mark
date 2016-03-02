var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://localhost/stmark');
db.connection.on('error', ()=> console.log('Database connection error!'));
db.connection.once('open', ()=> console.log('Database connection has been established.'));

module.exports = db;
