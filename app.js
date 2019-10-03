const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')


app.use(methodOverride('_method'))

// ===============route setting=============

app.use('/', require('./routes/home'))

app.use('/todos', require('./routes/todo'))

// Server start
app.listen(port, () => {
  console.log(`Express server start`)
})


