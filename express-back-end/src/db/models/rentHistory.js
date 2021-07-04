"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RentHistory extends Model {
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
      this.belongsTo(models.Property, {
        foreignKey: "property_id",
        onDelete: "CASCADE",
      });
    }
  }
  RentHistory.init(
    {
      tenant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      review_content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      is_requested: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_decline: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "renthistories",
      timestamps: false,
    }
  );
  return RentHistory;
};
