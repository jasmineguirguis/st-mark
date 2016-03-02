var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Promise = require("bluebird");
var bcrypt = require('bcrypt');
var User = require('../mongoose/models/user.model');

function verifyPassword(hash, userPasswordInput) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userPasswordInput, hash, function(err, res) {
      if (err) reject(err);
      resolve(res);
    });
  });
}

passport.use(new LocalStrategy({usernameField: 'email'},
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      // res == true if password match
      verifyPassword(user.password, password)
        .then((res) => {
          if (!res) return done(null, false, { message: 'Incorrect password.' });
          return done(null, user);
        })
        .catch((error) => res.status(500).send({ message: 'Could not check the hashed password.' }));

    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
