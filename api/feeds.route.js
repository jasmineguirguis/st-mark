var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res){
    res.status(200).send({ message: 'AUTH PASS SUCCESS' });
  });

module.exports = router;
