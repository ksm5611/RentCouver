const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://development:development@localhost:5432/rentcouver"
);

const User = sequelize.define(
  "User",
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
    // Other model options go here
    tableName: "users",
    timestamps: false,
  }
);

User.sync({ alter: true });

module.exports = User;
