var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var User = require('../mongoose/models/user.model');
var gravatar = require('gravatar');

function getProfilePicture(id){
  return new Promise((resolve, reject) => {
    User.findOne({ _id: id }, function(err, user){
      if (err) reject(err);
      var email = user.email;
      var profilePicture = gravatar.url(email, {s: '50'});
      resolve(profilePicture);
    })
  })
}

router.route('/')
  .get(function(req, res){
    
    var userId = req.userId;
    getProfilePicture(userId)
      .then((profilePicture) => {
        res.status(200).send({ profilePicture: profilePicture });
      }).catch((err) => {
        res.status(500).send({ message: 'Something went wrong retrieving user info.', error: err });
      });

  });

module.exports = router;
