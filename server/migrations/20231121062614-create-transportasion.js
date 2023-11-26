'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transportasions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      pWeek: {
        type: Sequelize.INTEGER
      },
      pDay: {
        type: Sequelize.INTEGER
      },
      des: {
        type: Sequelize.STRING
      },
      facility: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'siap'
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transportasions');
  }
};