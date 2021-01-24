//const { models } = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  },
  {
    timestamps: false,
    freezeTableName: true
  }); 

  User.associate = function (models) {
    User.hasMany(models.OrderHistory, {
      allowNull: true,
      type: DataTypes.INTEGER,
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
      foreignKey: "itemId",
    });
    models.OrderHistory.belongsTo(User, {foreignKey: "userId"});
  };

  return User;
};
