"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var App = (0, _express["default"])();
var PORT = process.env.PORT;

var User = require("./sequelize/users"); // Express Configuration
// App.use(BodyParser.urlencoded({ extended: false }));
// App.use(BodyParser.json());


App.use(_express["default"]["static"]("public")); // Sample GET route

App.get("/api/data", function (req, res) {
  return res.json({
    message: "Seems to work!"
  });
});
App.get("/user", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.findAll();

          case 2:
            users = _context.sent;
            res.json(users);

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
App.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log("Express seems to be listening on port ".concat(PORT, " so that's pretty good \uD83D\uDC4D"));
});