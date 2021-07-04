"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Property, {
        foreignKey: "property_id",
        onDelete: "CASCADE",
      });
    }
  }
  Photo.init(
    {
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      photo_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "photos",
      timestamps: false,
    }
  );
  return Photo;
};
