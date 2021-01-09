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
    ArchiveItem.belongsToMany(models.User, {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      // foreignKey: "archiveId",
      through: OrderHistory,
    });
  };

  return ArchiveItem;
};
