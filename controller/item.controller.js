const db = require("../models");
const Item = db.Item;
const Op = db.Sequelize.Op;

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
exports.findAll = (req, res) => {

    const { name, category, size, price_from, price_to, color, starRating, sort} = req.query;
    let query = {};
  
    if(name) {
      //name_copy = name.replace(/\s/g, '.+');
      
      query.name = {[Op.like]: "%" + name + "%"}; //" { $regex: new RegExp(name_copy), $options: "i" };
    }
  
    if(category){  
      const categories = category.split(',');
      query.categoryId = {[Op.in]:  category.split(',')};
    }
  
    if(size) {     
      const sizes = size.split(',');
      query.size = {[Op.in]: size.split(',')};
    }
  
    if(price_from || price_to){

        if(price_from && price_to){
          query.price = {$gt: price_from, $lt: price_to};
        }
        else if (price_from){
          
          query.price = {$gt: price_from};
        }
        else{
    
          query.price = {$lt: price_to};
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
      query.starRating = {$gt: starRating};
    }
    
    let sort_param = {};

    if(sort){
        sort_param = {price: sort};
    }
    else{
        sort_param = {price: 'desc'};
    }
    console.log(query);
    Item.findAll({
          where: query  
            , 
            order: [
                    ['price', 'desc']                
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

  