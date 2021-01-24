module.exports = (app) => {
    const orderHistory = require("../controllers/orderHistory.controller.js");
    var router = require("express").Router();
  
    router.post("/", orderHistory.create);

    // Retrieve all orderHistory
    router.get("/", orderHistory.findAll);
    
    // Update a orderHistory with id
    router.put("/:id", orderHistory.update);
    
    app.get('/api/dates', orderHistory.dates);

    app.use("/api/orderHistory", router);
  };
  