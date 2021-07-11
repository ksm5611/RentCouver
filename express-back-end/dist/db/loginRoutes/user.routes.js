"use strict";

var _require = require("../middleware"),
    authJwt = _require.authJwt;

var controller = require("../controllers/user.controller");

module.exports = function (App) {
  App.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
  App.get("/api/test/all", controller.allAccess);
  App.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
};