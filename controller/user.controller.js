const db = require("../models");
const { sequelize } = require("sequelize");

const User = db.User;

// Create and Save a new User
exports.create = async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an User
  const user = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    type: req.body.type,
    createdAt: req.body.createdAt,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Find an single User with an id
exports.findOne = (req, res) => {
  const userId = req.params.id;

  User.findOne({ where: { id: userId } })
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found Item with " });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Item with id=" });
    });
};
exports.findAll = async (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving items. ",
      });
    });
};
