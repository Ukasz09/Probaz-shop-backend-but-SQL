module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Users", {
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
      surname: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        allowNull: false,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Users"),
};
