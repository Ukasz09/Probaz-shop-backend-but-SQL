module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("OrderHistory", {
      orderedQty: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderDate: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
      },
      archiveId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
        references: {
          model: "ArchiveItem",
          key: "id",
          as: "archiveId",
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("OrderHistory"),
};
