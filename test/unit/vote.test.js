/* global it, describe, before */
const assert = require('chai').assert
// const expect = require('chai').expect

const models = require('../../models')
const query = require('../../controllers/apiQuery')

const title =
`
===============================
Unit test on "Vote" model
===============================
`

describe(title, () => {
  before(() => {
    return models.sequelize.sync({ force: true })
  })
  it('should be an empty vote table', (done) => {
    query.findAllVotes().then((results) => {
      try {
        assert.deepEqual(results, [])
        done()
      } catch (e) {
        done(e)
      }
    })
  })
})
