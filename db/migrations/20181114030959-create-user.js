'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      bio: {
        type: Sequelize.TEXT
      },
      neighborhood: {
        type: Sequelize.ENUM,
        values: ['richmond', 'sunset', 'north beach', 'cole valley', 'pacific heights']
      },
      genres: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      instruments: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      experience: {
        type: Sequelize.ENUM,
        values: ['novice', 'intermediate', 'advanced', 'expert']
      },
      avatar_url: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};