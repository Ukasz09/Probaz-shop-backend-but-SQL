const user = require("../models/user.js");

module.exports = (app) => {
  const users = require("../controller/user.controller.js");
  var router = require("express").Router();

  router.post("/", users.create);

  router.get("/", users.findAll);

  router.delete("/:id", users.delete);

  app.use("/api/users", router);

  // Get orderHistory by user_id
  app.get("/api/history/:id", users.history);

  app.get("/api/login", users.login);

  app.post("/api/order", users.order);
};
