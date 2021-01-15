//const { models } = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }); 




return User;
};
