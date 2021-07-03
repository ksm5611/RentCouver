const { Sequelize } = require("sequelize");
const User = require("./src/db/sequelize/users");

const sequelize = new Sequelize(
  "postgres://development:development@localhost:5432/rentcouver"
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();

console.log(User);
