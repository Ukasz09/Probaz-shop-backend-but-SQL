const db = require("../config/database");

db.query(
  `
    DELETE FROM "Users";
    DELETE FROM "ArchiveItem";
    DELETE FROM "Item";
    DELETE FROM "Category";
  `
)
  .then(() => console.log("---- CORRECT DROPPED TABLES ! ----"))
  .catch((err) => console.error(`---- FAILED DROPPING TABLES! ----\nReason:${err}`));
