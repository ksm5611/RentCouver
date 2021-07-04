"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ref extends Model {
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
    }
  }
  Ref.init(
    {
      tenant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      landlord_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "refs",
      timestamps: false,
    }
  );
  return Ref;
};
