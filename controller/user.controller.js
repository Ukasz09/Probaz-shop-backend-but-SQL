const db = require("../models");
const user = require("../models/user");
const User = db.User;
const OrderHistory = db.OrderHistory;
const ArchiveItem = db.ArchiveItem;

exports.create = async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  const user = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    type: req.body.type,
  };
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Changed approach - model without history
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

exports.login = (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  User.findOne({ where: { email: email, password: password } })
    .then((data) => {
      if (!data) {
        res.status(401).send({ message: "Incorrect logon data " });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "User logon error: " + err });
    });
};

exports.history = (req, res) => {
  const id = +req.params.id;
  OrderHistory.findAll({
    attributes: ["orderedQty", "orderDate", "archiveId"],
    where: { userId: id },
    raw: true,
  })
    .then((data) => {
      if (!data) {
        res.send([]);
      } else {
        qtyDateArr = [];
        const tmp = data.map((element) => {
          qtyDateArr.push([element.orderedQty, element.orderDate]);
          return ArchiveItem.findOne({ where: { id: element.archiveId } });
        });
        Promise.all(tmp).then((tmpData) => {
          result = [];
          let index = 0;
          for (const archiveItem of tmpData) {
            result.push({
              id: archiveItem.id,
              name: archiveItem.name,
              description: archiveItem.description,
              imageUrl: archiveItem.imageUrl,
              size: archiveItem.size,
              color: archiveItem.color,
              pricePerItem: archiveItem.price,
              orderedQty: qtyDateArr[index][0],
              orderDate: qtyDateArr[index][1],
            });
            index++;
          }
          res.send(result);
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message || "Some error occurred while retrieving categories. " });
    });
};

exports.delete = (req, res) => {
  const userId = req.params.id;
  User.destroy({
    where: {
      id: userId,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Not found User with id=${userId}`,
        });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((_) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
