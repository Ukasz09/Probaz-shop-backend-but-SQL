module.exports = (app) => {
    const archiveItem = require("../controllers/archiveItem.controller.js");
    var router = require("express").Router();
  
    // Create a new archivedItem
    router.post("/", archiveItem.create);
  
    // Retrieve all archivedItem
    router.get("/", archiveItem.findAll);
  
    // Retrieve a single archivedItem with id
    router.get("/:id", archiveItem.findOne);
  
    // Update a archivedItem with id
    router.put("/:id", archiveItem.update);
  
    // Delete a archivedItem with id
    router.delete("/:id", archiveItem.delete);
  
    // Delete all archivedItems
    router.delete("/", archiveItem.deleteAll);
  
    app.use("/api/archiveItem", router);
  };
  