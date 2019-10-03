const express = require('express')
const router = express.Router()
// 載入 model
const db = require('../models')
const Todo = db.Todo
const User = db.User


// GET login page
router.get('/login', (req, res) => {
  res.render('login')
})

// POST login page
router.post('/login', (req, res) => {
  res.send('POST login')
})

// GET register page
router.get('/register', (req, res) => {
  res.render('register')
})

// POST register page
router.post('/register', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => res.redirect('/'))
})


module.exports = router