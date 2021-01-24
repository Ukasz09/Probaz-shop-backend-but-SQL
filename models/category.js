module.exports = (sequelize, DataTypes) => {
  let Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
    }
  );

  Category.associate = function (models) {
    Category.hasMany(models.ArchiveItem, {
      allowNull: true,
      type: DataTypes.INTEGER,
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
      foreignKey: "categoryId",
    });
    models.ArchiveItem.belongsTo(models.Category, { foreignKey: "categoryId" });

    Category.hasMany(models.Item, {
      allowNull: true,
      type: DataTypes.INTEGER,
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
      foreignKey: "categoryId",
    });
    models.Item.belongsTo(models.Category, { foreignKey: "categoryId" });
  };
  return Category;
};
