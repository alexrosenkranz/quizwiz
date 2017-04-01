'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('vote', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      quizId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'quiz',
          key: 'id'
        }
      },
      stars: {
        type: Sequelize.INTEGER
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('vote')
  }
}
