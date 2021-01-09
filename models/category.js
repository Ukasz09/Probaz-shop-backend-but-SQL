module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define("Category", {
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
  });
  return Category;
};

Category.associate = function (models) {
  Category.hasMany(models.ArchiveItem, {
    allowNull: true,
    type: Sequelize.INTEGER,
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
    foreignKey: "categoryId",
  });
  ArchiveItem.belongsTo(models.Category);

  Category.hasMany(models.Item, {
    allowNull: true,
    type: Sequelize.INTEGER,
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
    foreignKey: "categoryId",
  });
  Item.belongsTo(models.Category);
};
