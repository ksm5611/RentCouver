"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _require = require("sequelize"),
    Model = _require.Model;

module.exports = function (sequelize, DataTypes) {
  var RentHistory = /*#__PURE__*/function (_Model) {
    _inherits(RentHistory, _Model);

    var _super = _createSuper(RentHistory);

    function RentHistory() {
      _classCallCheck(this, RentHistory);

      return _super.apply(this, arguments);
    }

    _createClass(RentHistory, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        this.belongsTo(models.User, {
          foreignKey: "tenant_id",
          onDelete: "CASCADE"
        });
        this.belongsTo(models.Property, {
          foreignKey: "property_id",
          onDelete: "CASCADE"
        });
        this.hasMany(models.Application, {
          foreignKey: "renthistories_id"
        });
        this.hasMany(models.Ref_request, {
          foreignKey: "renthistories_id"
        });
      }
    }]);

    return RentHistory;
  }(Model);

  RentHistory.init({
    tenant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    review_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_requested: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_declined: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    tableName: "renthistories",
    timestamps: false
  });
  return RentHistory;
};