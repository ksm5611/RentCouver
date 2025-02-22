"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _applicationForm = _interopRequireDefault(require("./routes/applicationForm"));

var _userInfo = _interopRequireDefault(require("./routes/userInfo"));

var _propertyDetails = _interopRequireDefault(require("./routes/propertyDetails"));

var _propertyLists = _interopRequireDefault(require("./routes/propertyLists"));

var _rentHistories = _interopRequireDefault(require("./routes/rentHistories"));

var _appList = _interopRequireDefault(require("./routes/appList"));

var _ref_request = _interopRequireDefault(require("./routes/ref_request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var App = (0, _express["default"])();
var PORT = process.env.PORT;
App.use((0, _cors["default"])()); // Express Configuration

App.use(_bodyParser["default"].urlencoded({
  extended: true
}));
App.use(_bodyParser["default"].json());
App.use(_express["default"]["static"]("public"));
App.use("/api", _userInfo["default"]);
App.use("/api", _propertyDetails["default"]);
App.use("/api", _propertyLists["default"]);
App.use("/api", _applicationForm["default"]);
App.use("/api", _rentHistories["default"]);
App.use("/api", _appList["default"]);
App.use("/api", _ref_request["default"]); // routes (login)

require("../src/db/loginRoutes/auth.routes")(App);

require("../src/db/loginRoutes/user.routes")(App);

App.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log("Express seems to be listening on port ".concat(PORT, " so that's pretty good \uD83D\uDC4D"));
});