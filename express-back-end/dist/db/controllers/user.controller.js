"use strict";

exports.allAccess = function (req, res) {
  res.status(200).send("Public Content.");
};

exports.userBoard = function (req, res) {
  res.status(200).send("User Content.");
};