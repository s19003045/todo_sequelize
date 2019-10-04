
const LocalStrategy = require('passport-local')


const db = require('../models')
const User = db.User

module.exports = passport => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({
        where: {
          email: email
        }
      }).then(user => {
        if (!user) {
          console.log('user not exist')
          return done(null, false, { message: 'the email is not registered' })
        }
        if (password !== password) {
          console.log('password not correct')
          return done(null, false, { message: 'email or password is not correct' })
        }
        console.log('login success')
        return done(null, user)
      })
    })
  )


  passport.serializeUser((user, done) => {
    done(null, user.id)  //只把 user ID 序列化存進 session(session 儲存區)，是為了縮小檔案大小
  })

  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then(user => {
        done(null, user)
      })
  })
}