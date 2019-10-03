const express = require('express')
const router = express.Router()

// 首頁
router.get('/', (req, res) => {
  res.redirect('/')
})

// GET new record page
router.get('/new', (req, res) => {
  res.send('new page')
})

// POST new record page
router.post('/new', (req, res) => {
  res.send('post new page')
})

// GET edit record page
router.get('/edit', (req, res) => {
  res.send('edit page')
})

// POST edit record page
router.post('/edit', (req, res) => {
  res.send('edit page')
})



module.exports = router