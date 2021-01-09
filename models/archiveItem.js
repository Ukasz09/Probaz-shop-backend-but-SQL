module.exports = (sequelize, DataTypes) => {
  let ArchiveItem = sequelize.define("ArchiveItem", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.FLOAT,
    archiveDate: DataTypes.DATE,
  });

  ArchiveItem.associate = function (models) {
    ArchiveItem.belongsTo(models.OrderHistory, {
      onDelete: "CASCADE",
      foreignKey: "archiveId",
    });
  };

  return ArchiveItem;
};
