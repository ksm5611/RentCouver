"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init(
    {
      landlord_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      square_feet: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      property_type: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      number_of_bathrooms: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      number_of_bedrooms: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      listed_start_date: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      cost_of_month: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      pets_allowed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: "properties",
      timestamps: false,
    }
  );
  return Property;
};
