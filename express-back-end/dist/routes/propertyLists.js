"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sequelize = require("sequelize");

var _models = require("../db/models");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
router.get("/propertyLists", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var where, propertyList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            where = {};

            if (req.query) {
              if (req.query.property_type) {
                where.property_type = req.query.property_type;
              }

              if (req.query.number_of_bathrooms) {
                where.number_of_bathrooms = req.query.number_of_bathrooms;
              }

              if (req.query.number_of_bedrooms) {
                where.number_of_bedrooms = req.query.number_of_bedrooms;
              }

              if (req.query.cost_of_month_gt) {
                where.cost_of_month = _defineProperty({}, _sequelize.Op.gt, req.query.cost_of_month_gt);
              }

              if (req.query.cost_of_month_lt) {
                where.cost_of_month = _defineProperty({}, _sequelize.Op.lt, req.query.cost_of_month_lt);
              }

              if (req.query.pets_allowed) {
                where.pets_allowed = req.query.pets_allowed;
              }
            }

            _context.next = 4;
            return _models.Property.findAll({
              where: _objectSpread({}, where),
              attributes: {
                exclude: ["landlord_id", "square_feet", "description"]
              },
              include: [{
                model: _models.Photo,
                attributes: {
                  exclude: ["property_id"]
                }
              }],
              limit: req.query.limit
            });

          case 4:
            propertyList = _context.sent;
            res.send(propertyList);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;