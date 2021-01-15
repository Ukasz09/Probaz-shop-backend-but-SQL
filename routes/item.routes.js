module.exports = app => {
  const items = require("../controller/item.controller.js");

  var router = require("express").Router();

  // Create a new Item
  router.post("/", items.create);
  // Retrieve all Items
  router.get("/", items.findAll);

  app.use('/api/items', router);
};