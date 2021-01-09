module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define("Category", {
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
  });
  return Category;
};

Category.associate = function (models) {
  Category.belongsTo(models.ArchiveItem, {
    onDelete: "CASCADE",
    foreignKey: "categoryId",
  });
  Category.belongsTo(models.Item, {
    onDelete: "CASCADE",
    foreignKey: "categoryId",
  });
};
