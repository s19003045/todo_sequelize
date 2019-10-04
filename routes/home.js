const express = require('express')
const router = express.Router()

// 載入 model
const db = require('../models')
const Todo = db.Todo
const User = db.User

// 載入 auth middleware
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      if (!user) {
        throw new Error('user not found')
      }
      return Todo.findAll({ where: { userId: req.user.id } })
    })
    .then(todos => {
      return res.render('index', { todos })
    })
    .catch((error) => { return res.status(422).json(error) })
})


module.exports = router