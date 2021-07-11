"use strict";

//middleware functions
var _require = require("../models"),
    User = _require.User;

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