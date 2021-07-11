"use strict";

//middleware functions
var db = require("../models");

var User = db.user;

var checkDuplicateEmail = function checkDuplicateEmail(req, res, next) {
  // Email
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }

    next();
  });
};

var verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail
};
module.exports = verifySignUp;