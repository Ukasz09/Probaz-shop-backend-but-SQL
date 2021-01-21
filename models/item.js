module.exports = (sequelize, DataTypes) => {
  let Item = sequelize.define("Item", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING(400),
    size: DataTypes.ENUM('XS','S', 'M','L','XL'),
    color: DataTypes.STRING,
    price: DataTypes.FLOAT,
    starRating: DataTypes.FLOAT,
    availableQty: DataTypes.INTEGER,
  },{
    timestamps: false,
    freezeTableName: true
  });
  
  Item.associate = function (models) {
    Item.hasMany(models.ArchiveItem, {
      allowNull: true,
      type: DataTypes.INTEGER,
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
      foreignKey: "itemId",
    });
    models.ArchiveItem.belongsTo(Item);
  };

  return Item;
};
