"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "tenant_id",
        onDelete: "CASCADE",
        as: "tenant",
      });
      this.belongsTo(models.User, {
        foreignKey: "landlord_id",
        onDelete: "CASCADE",
        as: "landlord",
      });
      this.belongsTo(models.Property, {
        foreignKey: "property_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.RentHistory, {
        foreignKey: "renthistories_id",
        onDelete: "CASCADE",
      });
    }
  }
  Application.init(
    {
      renthistories_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
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
        allowNull: true,
      },
      is_declined: {
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
