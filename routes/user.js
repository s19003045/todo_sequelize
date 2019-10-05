// routes/user.js
const express = require('express')
const router = express.Router()
const passport = require('passport')
// 載入 user model
const db = require('../models')
const User = db.User
const bcrypt = require('bcryptjs')


// 登入頁面
router.get('/login', (req, res) => {
  res.render('login')
})


// 登入檢查
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
    failureMessage: req.flash('failure_msg', '帳號/密碼錯誤'),
  })(req, res, next)

})

// 註冊頁面
router.get('/register', (req, res) => {
  res.render('register')
})

// 註冊檢查
router.post('/register', (req, res) => {

  console.log(req.body)
  const { name, email, password, password2 } = req.body
  // 回傳的錯誤訊息儲存至 errors
  let errors = []

  // 寫入資料庫前的驗證，所有字串不能有空白
  if (name.match(/\x20/i) || email.match(/\x20/i) || password.match(/\x20/i) || password2.match(/\x20/i)) {
    errors.push({ message: '不得有空格' })
  }
  // 所有欄位不得為空
  if (!name || !email || !password || !password2) {
    errors.push({ message: '所有欄位都是必填' })
  }

  if (password !== password2) {
    errors.push({ message: '密碼輸入錯誤' })
  }

  if (errors.length > 0) {
    res.render('register', { errors, name, email, password, password2 })
  } else {
    User.findOne({ where: { email: email } }).then(user => {
      if (user) {
        console.log('User already exists')
        errors.push({ message: '已有人註冊此 email' })
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        })

      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return console.log(err)
          bcrypt.hash(password, salt, (err, hash) => {
            const newUser = new User({  //  如果 email 不存在就直接新增
              name: name,
              email: email,
              password: hash
            })
            newUser.save()
              .then(user => {
                req.flash('success_msg', '你已成功註冊')

                res.redirect('/users/login')
              })
              .catch(err => console.log(err))
          })
        })
      }
    })
  }
})


// 登出
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已成功登出')
  res.redirect('/users/login')
})

module.exports = router