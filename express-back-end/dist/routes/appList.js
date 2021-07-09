"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _models = require("../db/models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
//req.param will find
router.get("/appList/:landlordId", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var appList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.Application.findAll({
              where: {
                landlord_id: req.params.landlordId
              },
              include: [{
                model: _models.Property,
                attributes: {
                  exclude: ["title", "square_feet", "description", "property_type", "number_of_bathrooms", "number_of_bedrooms", "listed_start_date", "cost_of_month", "pets_allowed"]
                }
              }, {
                model: _models.User,
                as: "tenant",
                attributes: {
                  exclude: ["email", "password", "current_address", "property_type", "job_title", "annual_income", "is_landlord", "other_household_occupants"]
                }
              }]
            });

          case 2:
            appList = _context.sent;
            res.send(appList);

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
}()); //decline application form call

router.post("/appList/:applicationId", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var appList;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _models.Application.update({
              is_decline: true
            }, {
              where: {
                id: req.params.applicationId
              }
            });

          case 2:
            appList = _context2.sent;
            res.json(appList);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;