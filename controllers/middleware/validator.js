function validator () {
  // env vars ... local variables
  return function (req, res, next) {
    let bool = false
    if (bool) {
      req.message = 'hello world'
      next()
    } else {
      res.status(500)
      // next('error')
      next(new Error('this is an error object'))
    }
  }
}

module.exports = validator
