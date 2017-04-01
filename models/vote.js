module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define('user',
    // columns of table
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      stars: {
        type: DataTypes.INTEGER
      }
    },
    // options
    {
      freezeTableName: true
    }) // end .define
  return user
}
