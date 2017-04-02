const db = require('../models')

// validators
// TO DO LATER
// const user_req_fields = ['username'];

module.exports = {
  // User Related Queries
  findUser: (id) => (id ? db.user.findOne({ where: { id } }) : db.user.findAll()),
  addUser: (userObj) => {
    return db.user.findOrCreate({ where: { username: userObj.username }, defaults: userObj })
  },

  // Quiz related queries
  findQuiz: (id) => (id ? db.quiz.findOne({ where: { id } }) : db.quiz.findAll()),
  makeQuiz: (quizObj) => {
    return db.quiz.findOrCreate({ where: { name: quizObj.name }, defaults: quizObj })
  },

  // UserQuiz
  takeQuiz: (dataObj) => {
    return db.userquiz.create(dataObj)
  }, // ends takeQUiz
  findUserQuiz: (optParamsObj) => {
    // TO DO optional optParams
    return optParamsObj
      ? db.userquiz.find({ where: optParamsObj })
      : db.userquiz.findAll()
  },
  vote: (voteObj) => {
    return db.vote.findOrCreate({
      where: {
        userId: voteObj.userId,
        quizId: voteObj.quizId
      },
      defaults: voteObj
    })
  },
  findAllVotes: () => {
    // TO DO find votes by a quiz id
    return db.vote.findAll()
  }
}
