const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')

app.use(methodOverride('_method'))

// Set up template engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// ===============route setting=============

app.use('/', require('./routes/home'))

app.use('/todos', require('./routes/todo'))

// Server start
app.listen(port, () => {
  console.log(`Express server start`)
})


