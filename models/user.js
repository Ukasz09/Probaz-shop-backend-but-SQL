module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  });
  return User;
};

OrderHistory.associate = function (models) {
  User.belongsToMany(models.ArchiveItem, {
    allowNull: false,
    type: Sequelize.INTEGER,
    primaryKey: true,
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
    // foreignKey: "userId",
    through: OrderHistory,
  });
};
