const db = require("../models");
const ArchiveItem = db.archiveItem;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an archived item
  const archiveItem = new ArchiveItem({
    name: req.body.name,
    description: req.body.description,
    imageURL: req.body.imageURL,
    size: req.body.size,
    color: req.body.color,
    pricePerItem: req.body.pricePerItem,
    orderedQty: req.body.orderedQty,
    categoryId: req.body.category,
    archiveDate: req.body.archiveDate,
    itemId: req.body.itemId,
  });

  // Save archived Item in the database
  archiveItem
    .save(archiveItem)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Item.",
      });
    });
};

//Find all archived items with filters
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  ArchiveItem.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find an single ordered Item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ArchiveItem.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found Item with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Item with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  ArchiveItem.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update archived Item with id=${id}. Maybe Archived Item was not found!`,
        });
      } else res.send({ message: "Archived Item was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Archived Item with id=" + id,
      });
    });
};

// Delete an archived Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ArchiveItem.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Archived Item with id=${id}. Maybe Archived Item was not found!`,
        });
      } else {
        res.send({
          message: "Archived Item was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Archived Item with id=" + id,
      });
    });
};

//delete all ordered items
exports.deleteAll = (req, res) => {
  ArchiveItem.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} archived Items were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all archived items.",
      });
    });
};
