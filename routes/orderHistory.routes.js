module.exports = (app) => {
  const orderHistory = require("../controller/orderHistory.controller.js");
  var router = require("express").Router();

  // Create a new orderHistory
  router.post("/", orderHistory.create);

  // Retrieve all orderHistory
  router.get("/", orderHistory.findAll);

  // Retrieve a single orderHistory with id
  router.get("/:id", orderHistory.findOne);

  // Update a orderHistory with id
  router.put("/:id", orderHistory.update);

  // Delete a orderHistory with id
  router.delete("/:id", orderHistory.delete);

  // Delete all orderHistory
  router.delete("/", orderHistory.deleteAll);

  app.use("/api/orderHistory", router);
};
