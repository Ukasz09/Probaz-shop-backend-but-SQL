const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
const usedEnv = config.development;

dbName = "probaz";
db = new Sequelize("postgres", usedEnv.username, usedEnv.password, {
  host: usedEnv.host,
  dialect: "postgres",
});
db.query(`CREATE DATABASE ${dbName} OWNER ${usedEnv.username}`)
  .then(() => console.log(`Database: ${dbName} CREATED successful`))
  .catch((err) => console.error(`Failed creating database: ${dbName}!\nReason: ${err}`));
