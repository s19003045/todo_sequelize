const express = require('express')
const app = express()
const port = 3000


// ===============route setting=============

app.get('/', (req, res) => {
  res.send('index page')
})

// Server start
app.listen(port, () => {
  console.log(`Express server start`)
})


