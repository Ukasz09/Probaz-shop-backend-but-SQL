const { Sequelize } = require("sequelize");
const config = require("../config/config.json");
const usedEnv = config.development;

dbName = "probaz";
db = new Sequelize("postgres", usedEnv.username, usedEnv.password, {
  host: usedEnv.host,
  dialect: "postgres",
});
db.query(`DROP DATABASE IF EXISTS ${dbName}`)
  .then(() => console.log(`---- SUCCESSFUL DROPPED DATABASE: ${dbName} ----`))
  .catch((err) => console.error(`---- FAILED DROPPING DATABASE: ${dbName}! ---- \nReason: ${err}`));
