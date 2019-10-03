const express = require('express')
const router = express.Router()

// 首頁
router.get('/', (req, res) => {
  res.redirect('/')
})


// POST new record page
router.post('/', (req, res) => {
  res.send('post new page')
})

// GET new record page
router.get('/new', (req, res) => {
  res.send('new page')
})


// GET edit record page
router.get('/edit', (req, res) => {
  res.send('edit page')
})

// POST edit record page
router.put('/edit', (req, res) => {
  res.send('edit page')
})

// DELETE 
router.delete('/delete', (req, res) => {
  res.send('delete page')
})


module.exports = router