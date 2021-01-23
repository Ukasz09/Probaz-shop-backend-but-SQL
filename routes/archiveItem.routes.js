module.exports = (app) => {
    const archiveItem = require("../controllers/archiveItem.controller.js");
    var router = require("express").Router();
  
    // Create a new orderedItem
    router.post("/", archiveItem.create);
  
    // Retrieve all orderedItem
    router.get("/", archiveItem.findAll);
  
    // Retrieve a single orderedItem with id
    router.get("/:id", archiveItem.findOne);
  
    // Update a orderedItem with id
    router.put("/:id", archiveItem.update);
  
    // Delete a orderedItem with id
    router.delete("/:id", archiveItem.delete);
  
    // Delete all orderedItems
    router.delete("/", archiveItem.deleteAll);
  
    app.use("/api/archiveItem", router);
  };
  