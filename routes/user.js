const express = require('express')
const router = express.Router()

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
  res.send('POST register')
})

// POST register page
router.get('/logout', (req, res) => {
  res.send('logout')
})


module.exports = router