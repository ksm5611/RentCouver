"use strict";

require("dotenv").config();

var _process$env = process.env,
    DB_HOST = _process$env.DB_HOST,
    DB_USERNAME = _process$env.DB_USERNAME,
    DB_PASSWORD = _process$env.DB_PASSWORD;
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "rentcouver_database_dev",
    host: DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "rentcouver_database_test",
    host: DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "rentcouver_database_prod",
    host: DB_HOST,
    dialect: "postgres"
  }
};