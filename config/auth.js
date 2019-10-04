// req.isAuthenticated 是 passport 提供的方法
module.exports = {
  authenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }

    res.redirect('/users/login')
  }
}