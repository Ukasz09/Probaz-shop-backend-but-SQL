module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Item", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING(400),
        allowNull: false,
      },
      size: {
        allowNull: false,
        type: Sequelize.STRING,
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
      starRating: {
        allowNull: false,
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      availableQty: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        references: {
          model: "Category",
          key: "id",
          as: "categoryId",
        },
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("ArchiveItem"),
};
