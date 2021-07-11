"use strict";

//middleware index.js
var authJwt = require("./authJwt");

var verifySignUp = require("./verifySignUp");

module.exports = {
  authJwt: authJwt,
  verifySignUp: verifySignUp
};