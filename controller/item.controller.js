const db = require("../models");
const Item = db.Item;
const Category = db.Category;
const Op = db.Sequelize.Op;
var result;
// Create and Save a new Item
exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

    // Create an Item
    const item = {
        name: req.body.name,
        description: req.body.description,              
        imageUrl: req.body.imageURL,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
        starRating: req.body.starRating,
        categoryId: req.body.category,
        availableQty: req.body.availableQty
    };

    // Save Item in the database
    Item.create(item)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message  || "Some error occurred while creating the Item."
        });
        });

};

//Find all items with filters
exports.findAll = async(req, res) => {

    const { name, category, size, price_from, price_to, color, starRating, sort} = req.query;
    let query = {};
  
    if(name) {
      query.name = {[Op.like]: "%" + name + "%"}; //" { $regex: new RegExp(name_copy), $options: "i" };
    }
    
    if(category){        
      var ids = await getCategoriesId(category);
      query.categoryId = {[Op.in]:  ids};
    }
  
    if(size) {     
      const sizes = size.split(',');
      query.size = {[Op.in]: size.split(',')};
    }
  
    if(price_from || price_to){

        if(price_from && price_to){
          let interval = [price_from, price_to];
          query.price = {[Op.between]: interval};
        }
        else if (price_from){          
          query.price = {[Op.gt]: price_from};
        }
        else{
          query.price = {[Op.lt]: price_to};
        }
      }
  
    if(color){
  
      const colors = color.split(',');
      for(var i=0; i < colors.length; i++){
        colors[i] = "#" + colors[i];
    }
      query.color = colors;
    }
  
    if(starRating){
      query.starRating = {[Op.gt]: starRating};
    }
    
    let sort_param = {};

    if(sort){
        sort_param = ["price", sort];
    }
    else{
        sort_param = ["name", 'asc'];
    }

    Item.findAll({
          where: query, 
            order: [
                    sort_param                
            ]})
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving items. "
          });
        });
    };

// Find an single Item with an id
exports.findOne = (req, res) => {
    const itemId = req.params.id;
  
    Item.findOne({ where: { id: itemId } })
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Item with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Item with id=" + id });
      });
  };

// Delete an Item with the specified id in the request
exports.delete = (req, res) => {
    const itemId = req.params.id;
  
    Item.destroy({
        where: {
            id: itemId
        }})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Item with id=${itemId}. Maybe Item was not found!`
          });
        } else {
          res.send({
            message: "Item was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Item with id=" + id
        });
      });
  };
  
//Update Item
exports.update = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
          });
        }

    const { name, description, category, size, color, starRating, price, availableQty, imageUrl } = req.body;
    let query = {};
       
    if(name) {     
        query.name = req.body.name;
      }

    if(description) {     
        query.description = req.body.description;
      }

    if(category) {     
        query.category = req.body.category;
      }

    if(size) {     
        query.size = req.body.size;
        }

    if(color) {     
        query.color = req.body.color;
        }

    if(starRating) {     
        query.starRating = req.body.starRating;
        }

    if(price) {     
        query.price = req.body.price;
        }

    if(availableQty) {     
        query.availableQty = req.body.availableQty;
        }

    if(imageUrl){
        query.imageUrl = req.body.imageUrl;
    }

    const itemId = req.params.id;
      
    Item.update(
            query,
            { where: { id: itemId } }
        )
        .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot update Item with id=${itemId}. Maybe Item was not found!`
              });
            } else res.send({ message: "Item was updated successfully." });
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Item with id=" + itemId
            });
          });
      };

//get available categories
exports.categories = (req, res) => {
    
    Category.findAll({
        attributes: ['id','name'],
        raw: true
      }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categories. "
        });
      });
    }

async function getCategoriesId(names) {

  const categoryNames = names.split(',');  
  var ids = [];

  var data = await Category.findAll({
        attributes: ['id','name'],
        raw: true
      });    
  
  for(let catName of categoryNames){   

    let result = data.find( ({ name }) => name === catName );     
    if(result != undefined)
      ids.push(result.id);
  }
 
  return ids;
}
    
        

  