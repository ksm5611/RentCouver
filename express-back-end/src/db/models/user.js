"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Property, {
        foreignKey: "landlord_id",
      });
      this.hasMany(models.RentHistory, {
        foreignKey: "tenant_id",
      });
      this.hasMany(models.Ref, {
        foreignKey: "tenant_id",
      });
      this.hasMany(models.Ref, {
        foreignKey: "landlord_id",
      });
      this.hasMany(models.Application, {
        foreignKey: "tenant_id",
      });
      this.hasMany(models.Ref_request, {
        foreignKey: "landlord_id",
      });
      this.hasMany(models.Ref_request, {
        foreignKey: "tenant_id",
      });
      this.hasMany(models.Message_master, {
        foreignKey: "sender_id",
      });
      this.hasMany(models.Message_master, {
        foreignKey: "receiver_id",
      });
      this.hasMany(models.Message_details, {
        foreignKey: "sender_id",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      current_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      annual_income: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      other_household_occupants: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profile_picture_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_landlord: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};
