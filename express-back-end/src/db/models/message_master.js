"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message_master extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "sender_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.User, {
        foreignKey: "receiver_id",
        onDelete: "CASCADE",
      });
    }
  }
  Message_master.init(
    {
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      receiver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "message_master",
      timestamps: false,
    }
  );
  return Message_master;
};
