const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
const usedEnv = config.development;

dbName = "probaz";
db = new Sequelize("postgres", usedEnv.username, usedEnv.password, {
  host: usedEnv.host,
  dialect: "postgres",
});
db.query(`DROP DATABASE IF EXISTS ${dbName}`)
  .then(() => console.log(`Database: ${dbName} DROPPED successful`))
  .catch((err) => console.error(`Failed dropping database: ${dbName}!\nReason: ${err}`));
