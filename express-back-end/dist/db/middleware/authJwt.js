"use strict";

//middleware JWT
var jwt = require("jsonwebtoken");

var config = require("../auth.config");

var verifyToken = function verifyToken(req, res, next) {
  var token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }

    req.userId = decoded.id;
    next();
  });
};

var authJwt = {
  verifyToken: verifyToken
};
module.exports = authJwt;