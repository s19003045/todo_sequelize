// req.isAuthenticated 是 passport 提供的方法
module.exports = {
  authenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    // 在 app.js 已先設定 res.locals.failure_msg = req.flash('failure_msg')，所以下面設定的 value 就會傳值進去 failure_msg
    req.flash('failure_msg', '請先登入才可使用')
    res.redirect('/users/login')
  }
}