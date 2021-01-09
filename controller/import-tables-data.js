const db = require("../config/database");

importData("Category", "category", `"id","name","icon"`).then(() =>
  importData("Users", "users", `"id","name","surname","email","password","type","createdAt"`).then(() =>
    importData(
      "Item",
      "items",
      `"id","name","description","imageUrl","size","color","price","starRating","categoryId","availableQty"`
    ).then(() =>
      importData(
        "ArchiveItem",
        "archiveItems",
        `"id","name","description","imageUrl","size","color","price","categoryId","itemId","archiveDate"`
      ).then(() => console.log("---- FINISHED DATA IMPORT ----"))
    )
  )
);

// -------------------------------------------------------------------------------
function importData(tableName, csvFileNameNoExt, headersString) {
  return db
    .query(
      `
          COPY "${tableName}"(${headersString})
          FROM
          '${__dirname}/../data/csv/${csvFileNameNoExt}.csv'
          DELIMITER ','
          CSV HEADER;
      `
    )
    .then(() => onImportCorrectResponse(tableName))
    .catch((err) => onImportErrorResponse(tableName, err));
}
function onImportCorrectResponse(tableName) {
  console.log(`Correct import: ${tableName} data`);
}

function onImportErrorResponse(tableName, err) {
  console.error(`Failed to import data to table: ${tableName}!\nReason: ${err}`);
}
