module.exports = (sequelize, DataTypes) => {
  let Item = sequelize.define("Item", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.FLOAT,
    starRating: DataTypes.FLOAT,
    availableQty: DataTypes.INTEGER,
  });

  Item.associate = function (models) {
    Item.belongsTo(models.ArchiveItem, {
      onDelete: "CASCADE",
      foreignKey: "itemId",
    });
  };

  return Item;
};
