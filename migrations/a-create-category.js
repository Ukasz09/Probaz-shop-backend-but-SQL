module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Category", {
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
      icon: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Category"),
};
