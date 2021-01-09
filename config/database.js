const { Sequelize } = require("sequelize");
const config = require("./config.json");
const usedEnv = config.development;

module.exports = new Sequelize(usedEnv.database, usedEnv.username, usedEnv.password, {
  host: usedEnv.host,
  dialect: "postgres",
});
