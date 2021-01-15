module.exports = app => {
  const items = require("../controller/item.controller.js");

  var router = require("express").Router();

  // Create a new Item
  router.post("/", items.create);
  // Retrieve all Items
  router.get("/", items.findAll);
  // Retrieve a single Item with id
  router.get("/:id", items.findOne);
  // Update a Item with id
  router.put("/:id", items.update);
  // Delete a Item with id
  router.delete("/:id", items.delete);

  app.use('/api/items', router);

  // Get available categories
  app.get('/api/categories', items.categories);
};