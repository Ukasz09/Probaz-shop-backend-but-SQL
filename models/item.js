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
    Item.hasMany(models.ArchiveItem, {
      allowNull: true,
      type: Sequelize.INTEGER,
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
      foreignKey: "itemId",
    });
    ArchiveItem.belongsTo(models.Item);
  };

  return Item;
};
