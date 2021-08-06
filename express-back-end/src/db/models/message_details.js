"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message_details extends Model {
    static associate(models) {
      this.belongsTo(models.Message_master, {
        foreignKey: "message_master_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.User, {
        foreignKey: "sender_id",
        onDelete: "CASCADE",
      });
    }
  }
  Message_details.init(
    {
      message_master_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      message_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "message_details",
      timestamps: false,
    }
  );
  return Message_details;
};
