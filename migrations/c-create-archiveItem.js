module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("ArchiveItem", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageUrl: {
        allowNull: true,
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      archiveDate: {
        allowNull: false,
        allowNull: false,
        type: Sequelize.DATE,
      },
      itemId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        references: {
          model: "Item",
          key: "id",
        },
      },
      categoryId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        references: {
          model: "Category",
          key: "id",
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("ArchiveItem"),
};
