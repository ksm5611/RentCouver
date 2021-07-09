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
router.get("/refRequest/:landlordId", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var refRequest;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.Ref_request.findAll({
              where: {
                landlord_id: req.params.landlordId
              },
              include: [{
                model: _models.RentHistory,
                include: [{
                  model: _models.User
                }, {
                  model: _models.Property,
                  attributes: {
                    exclude: ["title", "square_feet", "description", "property_type", "number_of_bathrooms", "number_of_bedrooms", "listed_start_date", "cost_of_month", "pets_allowed"]
                  }
                }]
              }]
            });

          case 2:
            refRequest = _context.sent;
            res.send(refRequest);

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
}());
router.post("/reqReference", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var rentHistory, receviedRequest;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.renthistories_id) {
              _context2.next = 14;
              break;
            }

            _context2.prev = 1;
            _context2.next = 4;
            return _models.RentHistory.findOne({
              where: {
                id: req.body.renthistories_id
              }
            });

          case 4:
            rentHistory = _context2.sent;
            rentHistory.is_requested = true;
            _context2.next = 8;
            return rentHistory.save();

          case 8:
            res.send(rentHistory);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            res.send(_context2.t0);

          case 14:
            _context2.next = 16;
            return _models.Ref_request.create(req.body);

          case 16:
            receviedRequest = _context2.sent;
            res.send(receviedRequest);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()); //creating ref request(message submit)

router.post("/refRequest/:renthistoriesId", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var refRequestMessage, refRequest;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.RentHistory.findOne({
              where: {
                id: req.params.renthistoriesId
              }
            });

          case 3:
            refRequestMessage = _context3.sent;
            refRequestMessage.review_content = req.body.message;
            _context3.next = 7;
            return refRequestMessage.save();

          case 7:
            _context3.next = 9;
            return _models.Ref_request.findOne({
              where: {
                id: req.body.refRequestId
              }
            });

          case 9:
            refRequest = _context3.sent;
            refRequest.is_updated = true;
            _context3.next = 13;
            return refRequest.save();

          case 13:
            res.send(refRequest);
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            res.send(_context3.t0);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 16]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()); //decline request form call

router.post("/appList/:renthistoriesId", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var appList;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models.Ref_request.update({
              is_decline: true
            }, {
              where: {
                renthistories_id: req.params.renthistoriesId
              }
            });

          case 2:
            appList = _context4.sent;
            res.json(appList);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()); //decline request form call

router.post("/declineRefReq/:renthistoriesId", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var declineRefReq;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _models.Ref_request.update({
              is_decline: true
            }, {
              where: {
                renthistories_id: req.params.renthistoriesId
              }
            });

          case 2:
            declineRefReq = _context5.sent;
            res.json(declineRefReq);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;