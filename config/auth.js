const helpers = require('./_helpers')


// req.isAuthenticated 是 passport 提供的方法
module.exports = {
  authenticated: (req, res, next) => {
    if (helpers.isAuthenticated(req)) {
      return next()
    }
    req.flash('warning_msg', '請先登入才能使用')
    res.redirect('/users/login')
  }
}