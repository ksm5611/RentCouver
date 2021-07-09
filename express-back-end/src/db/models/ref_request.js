"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ref_request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "landlord_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.User, {
        foreignKey: "tenant_id",
        onDelete: "CASCADE",
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
  Ref_request.init(
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
      is_updated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_decline: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "ref_requests",
      timestamps: false,
    }
  );
  return Ref_request;
};
