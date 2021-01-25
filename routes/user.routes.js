module.exports = (app) => {
  const users = require("../controller/user.controller.js");
  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Retrieve all Users
  router.get("/", users.findAll); //TODO:

  // Retrieve a single User with id
  router.get("/:id", users.findOne); //TODO:

  // Update a whole User with id
  //router.put("/:id", users.update);

  // Delete a User with id
  //router.delete("/:id", users.delete);

  // Delete all Users
  //router.delete("/", users.deleteAll);

  app.use("/api/users", router);

  // Get orderHistory by user_id
  app.get("/api/history/:id", users.history);

  // Logon user
  app.get("/api/login", users.login);
};
