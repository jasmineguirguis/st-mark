var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
var User = require('../mongoose/models/user.model');
var passport = require('passport');
var config = require('../config');
var jwt = require('jsonwebtoken');

function hashPassword(password){
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash){
          if (err) reject(err);
          resolve(hash);
        });
    });
  });
}

router.post('/register', function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user){
    if (err) return res.status(500).send({ message: 'Something went wrong checking user\'s existence in database.' });
    if (user) return res.status(400).send({ message: 'User already exist.' })
  })
  hashPassword(req.body.password)
    .then((hash) => {

      var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
      })

      newUser.save(function (err, user) {
        if (err) return res.status(500).send({ message: 'Could not save user to database.' });
        res.status(200).send({ message: `${user.firstName} you are now registered.` });
      });

    })
    .catch((error) => res.status(500).send({ message: 'Could not hash password.' }));
});

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    var token = jwt.sign({ token: req.user._id }, config.token.secret, {expiresIn: '7d'});
    res.status(200).send({token: token});
  });

module.exports = router;
