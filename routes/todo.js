const express = require('express')
const router = express.Router()

// 載入 model
const db = require('../models')
const Todo = db.Todo
const User = db.User

// 載入 auth middleware
const { authenticated } = require('../config/auth')

// 首頁
router.get('/', authenticated, (req, res) => {
  res.redirect('/')
})


// POST new record page
router.post('/', authenticated, (req, res) => {
  res.send('post new page')
})

// GET new record page
router.get('/new', authenticated, (req, res) => {
  res.render('new')
})

// GET record page
router.get('/:id', authenticated, (req, res) => {
  res.render('show')
})


// GET edit record page
router.get('/:id/edit', authenticated, (req, res) => {
  res.render('edit')
})

// POST edit record page
router.put('/:id', authenticated, (req, res) => {
  res.send('edit page')
})

// DELETE 
router.delete('/:id/delete', authenticated, (req, res) => {
  res.send('delete page')
})


module.exports = router