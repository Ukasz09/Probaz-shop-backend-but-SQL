module.exports = (sequelize, DataTypes) => {
  let ArchiveItem = sequelize.define("ArchiveItem", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING(400),
    size: DataTypes.ENUM('XS','S', 'M','L','XL'),
    color: DataTypes.STRING,
    price: DataTypes.FLOAT,
    archiveDate: DataTypes.DATE,
  });

  ArchiveItem.associate = function (models) {
    ArchiveItem.belongsToMany(models.User, {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      // foreignKey: "archiveId",
      through: models.OrderHistory,
    });
  };

  return ArchiveItem;
};
