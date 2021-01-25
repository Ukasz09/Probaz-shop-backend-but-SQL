module.exports = (sequelize, DataTypes) => {
  let OrderHistory = sequelize.define(
    "OrderHistory",
    {
      orderedQty: DataTypes.INTEGER,
      orderDate: DataTypes.DATE,
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  // OrderHistory.associate = function (models) {
  //   models.User.belongsToMany(models.ArchiveItem, {
  //     allowNull: false,
  //     type: DataTypes.INTEGER,
  //     primaryKey: true,
  //     onDelete: "RESTRICT",
  //     onUpdate: "CASCADE",
  //     // foreignKey: "userId",
  //     through: OrderHistory,
  //   });
  // };

  return OrderHistory;
};
