const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// 載入 user model
const db = require('./models')
const User = db.User
const Todo = db.Todo


// bodyParser setting
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Set up template engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Use static file
app.use(express.static('public'))

// ===============route setting=============

app.use('/', require('./routes/home'))

app.use('/todos', require('./routes/todo'))

app.use('/users', require('./routes/user'))


// Server start
app.listen(port, () => {
  console.log(`Express server start`)
})


