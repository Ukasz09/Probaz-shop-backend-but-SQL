const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
const usedEnv = config.development;

dbName = "probaz";
db = new Sequelize("postgres", usedEnv.username, usedEnv.password, {
  host: usedEnv.host,
  dialect: "postgres",
});
db.query(`CREATE DATABASE ${dbName} OWNER ${usedEnv.username}`)
  .then(() => console.log(`---- DATABASE: ${dbName} CREATED SUCCESSFUL`))
  .catch((err) => console.error(`---- FAILED CREATING DATABASE: ${dbName}! ----\nReason: ${err}`));
