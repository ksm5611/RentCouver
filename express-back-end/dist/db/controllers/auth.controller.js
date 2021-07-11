"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var config = require("../auth.config");

var _require = require("../models"),
    User = _require.User;

var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs");

exports.signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userSignup;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.create({
              name: req.body.name,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 8),
              current_address: req.body.current_address,
              job_title: req.body.job_title,
              annual_income: req.body.annual_income,
              is_landlord: req.body.is_landlord
            });

          case 2:
            userSignup = _context.sent;
            res.send(userSignup);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user, passwordIsValid, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return User.findOne({
              where: {
                email: req.body.email
              }
            });

          case 2:
            user = _context2.sent;

            if (user) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(404).send({
              message: "User Not found."
            }));

          case 5:
            passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (passwordIsValid) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            }));

          case 8:
            token = jwt.sign({
              id: user.id
            }, config.secret, {
              expiresIn: 86400 // 24 hours

            });
            res.status(200).send({
              id: user.id,
              email: user.email,
              accessToken: token
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();