var mongoose = require('mongoose');
var Schema = mongoose.Schema;

function toLower (v) {
  return v.toLowerCase();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var userSchema = Schema({
    firstName: { type: String, set: capitalizeFirstLetter, required: true },
    lastName: { type: String, set: capitalizeFirstLetter, required: true },
    email: { type: String, set: toLower, required: true, unique: true },
    password: { type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
