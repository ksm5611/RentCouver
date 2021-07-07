"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "tenant_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.User, {
        foreignKey: "landlord_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Property, {
        foreignKey: "property_id",
        onDelete: "CASCADE",
      });
    }
  }
  Application.init(
    {
      tenant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      landlord_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      property_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      potential_move_in_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      is_decline: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "applications",
      timestamps: false,
    }
  );
  return Application;
};
