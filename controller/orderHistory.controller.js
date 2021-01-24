const db = require("../models");
const { sequelize } = require("sequelize");
const orderHistory = require("../models/orderHistory");

const User = db.User;
const ArchiveItem = db.ArchiveItem;
const Op = db.Sequelize.Op;

// Create and Save a new orderHistory
exports.create = async(req, res) => {

    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

    // Create an orderHistory
    const orderHistory = {
        orderDate: data.orderDate,
        orderedQty: data.orderedQty,            
        userId: data.userId,
        archiveId: data.archiveId,
};
    
    Item.create(item)
        .then(data => {
            const orderHistory = {
                orderDate: data.orderDate,
                orderedQty: data.orderedQty,            
                userId: data.userId,
                archiveId: data.archiveId,
    };
      })
      .catch(err => {
        res.status(500).send({
        message:
        err.message  || "Some error occurred while creating the orderHistory."
        })
      });    

}


//get available dates
exports.dates = (req, res) => {
    
    ArchiveItem.findAll({
        attributes: ['id','archiveDate'],
        raw: true
      }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving archiveItem. "
        });
      });
    }

async function getArchiveItemId(date) {

  var ids = [];

  var data = await ArchiveItem.findAll({
        attributes: ['id','archiveDate'],
        raw: true
      });    
  
  for(let archDate of archiveItem){   

    let result = data.find( ({ date }) => date === archDate ); //todo: find latest one?
    if(result != undefined)
      ids.push(result.id);
  }
 
  return ids;
}
    

//Update orderHistory
exports.update = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
          });
        }

    orderHistory.findAll()
        .then(function(item) {
            
            if(item)
                {
                   orderHistory.update(query).then(data => {
                     console.log(data);
                      const orderHistory = {
                        orderDate: data.orderDate,
                        orderedQty: data.orderedQty,            
                        userId: data.userId,
                        archiveId: data.archiveId,
                    };
                    orderHistory.create(orderHistory)
                      .then(orderHistory => {
                        res.send(orderHistory);
                        })
                      .catch(err => {
                        res.status(500).send({
                        message:
                        err.message  || "Some error occurred while creating the orderHistory."
                        });
                      });
                    });
                  }
              })

  };
  
//Find orderHistory
exports.findAll = async(req, res) => {
    const {archiveData} = req.query;
    let query = {};

    if(archiveData){        
        var ids = await getArchiveItemId(category);
        query.archiveData = {[Op.in]:  ids};
      }
  
      orderHistory.findAll({
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
            err.message || "Some error occurred while retrieving archivedData. "
        });
      });
    };
