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
      this.belongsTo(models.User, {
        foreignKey: "landlord_id",
        onDelete: "CASCADE",
      });
      this.hasMany(models.Photo, {
        foreignKey: "property_id",
      });
      this.hasMany(models.RentHistory, {
        foreignKey: "property_id",
      });
    }
  }
  Property.init(
    {
      landlord_id: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      square_feet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      property_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number_of_bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      number_of_bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      listed_start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cost_of_month: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      pets_allowed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
