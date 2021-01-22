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
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imageUrl: {
        allowNull: true,
        type: Sequelize.STRING(400),
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
      itemId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        references: {
          model: "Item",
          key: "id",
          as: "itemId",
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
          as: "categoryId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
     
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("ArchiveItem"),
};
