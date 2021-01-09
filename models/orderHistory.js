module.exports = (sequelize, DataTypes) => {
  let OrderHistory = sequelize.define("OrderHistory", {
    orderedQty: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
  });
  return OrderHistory;
};
