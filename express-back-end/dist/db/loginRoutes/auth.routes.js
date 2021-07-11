"use strict";

var _require = require("../middleware"),
    verifySignUp = _require.verifySignUp;

var controller = require("../controllers/auth.controller");

module.exports = function (App) {
  App.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
  App.post("/api/auth/signup", [verifySignUp.checkDuplicateEmail], controller.signup);
  App.post("/api/auth/signin", controller.signin);
};