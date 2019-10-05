const express = require('express')
const app = express()

// 判別開發環境
if (process.env.NODE_ENV !== 'production') {      // 如果不是 production 模式
  require('dotenv').config()                      // 使用 dotenv 讀取 .env 檔案
}

const port = 3000
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')



// 載入 user model
const db = require('./models')
const User = db.User
const Todo = db.Todo
const passport = require('passport')
const session = require('express-session')

// bodyParser setting
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Set up template engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Use static file
app.use(express.static('public'))


// ※注意：app.use(session({})) 必須設定在 app.use(passport.session()) 之前
app.use(session({
  secret: ['Abby', 'Doris', 'Oliver'], // secret字串或是多個secret組成的一個陣列
  resave: false,
  saveUninitialized: true,
}))

// use passport
app.use(passport.initialize())

// use session
app.use(passport.session())

// 載入 config 中的 passport.js
// 把上面宣告的 passport 實例當成下面的參數
require('./config/passport')(passport)

app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()

  next()
})


// ===============route setting=============

app.use('/', require('./routes/home'))

app.use('/todos', require('./routes/todo'))

app.use('/users', require('./routes/user'))

app.use('/auth', require('./routes/auth'))


// Server start
app.listen(port, () => {
  console.log(`Express server start`)
})


