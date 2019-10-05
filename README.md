# Project( Todo List ) with MySQL database

## 目標

- 打造 Todo List API
- 建立 MySQL 資料庫
- 使用 Sequelize 連接 mySQL 資料庫
- todo CRUD
- 建立使用者註冊/登入/登出功能
- 第三方登入

## 特色

- MVC model & RESTful

## 網站功能

- 首頁：瀏灠所有 todo 記錄
- 刪除 todo 記錄
- 新增 todo 記錄
- 修改 todo 記錄
- 使用者註冊/登入/登出
- 第三方認證登入
- 可依據登入使用者，列出該使用者建立的 todo 記錄資訊

## 後端工具

Node.js、Express、Express-handlebars、method-override、
express-session、passport、
passport-local、passport-facebook、bcryptjs、
connect-flash、dotenv
sequelize、sequelize-cli、mysql2
database: MySQL

## 環境建置

環境建置簡略帶過，安裝方式請參考官方網站。
依序介紹完成這支程式需要的軟體及套件：

- 安裝 VS code
  https://code.visualstudio.com/

* 安裝 VS code 常用套件：
  - Emment( Visual studio code 已經預設安裝的擴充套件，提供 快速編寫 HTML 與 CSS 的縮寫 )
    - Emment 常見縮寫： https://docs.emmet.io/cheat-sheet/
  - Bracket Pair Colorizer ( allows matching brackets to be identified with colours )
  - Live Server( 在檔案儲存的同時，就直接在瀏覽器裡同步看到結果)
  - Markdown Preview Enhanced ( 預覽 .md 檔案的 output )

- 安裝 Cmder
  https://cmder.net/
  常用指令同 windows 的 CMD
- 安裝 node.js
  https://nodejs.org/en/download/

  - 查看 node.js 版本指令：`node -v`

  - 以 node 啟動伺服器的指令如下(假設 app.js 是伺服器啟動的進入點)：`node app.js`

- 安裝 npm
  Node.js for Windows 於 0.6.2 版開始內建 npm，使用 nodejs.org 官方提供的安裝程式，不需要進一步的設定，就可以立即使用 npm 指令，對於 Windows 的開發者來說，大幅降低環境設定的問題與門檻。

  - 查看 npm 版本指令：`npm -v`

- 安裝 nodemon：啟動伺服器後，當專案資料夾中的檔案修改時，自動偵測，並自動重啟 server ，不需要手動再一次啟動 server。

  - 參考資料： https://www.npmjs.com/package/nodemon
  - 全域都可使用，不限於某專案資料夾，依下列指令安裝：`npm install -g nodemon`

  - 以 nodemon 啟動伺服器的指令如下(假設 app.js 是伺服器啟動的進入點)：`nodemon app.js`

- 安裝 mongoDB

  - 至 MySQL 官方下載頁（Windows 專屬） https://dev.mysql.com/downloads/windows/installer/

<!-- - 註冊 heroku 及下載 CLI
  - 註冊 heroku 帳號：https://www.heroku.com/home
  - 下載 heroku CLI：https://devcenter.heroku.com/articles/heroku-cli#download-and-install -->

## 安裝流程

- 下載專案
  - 從終端機下載：`https://github.com/s19003045/todo_sequelize.git`
  - 直接點選 download 下載
- 開啟終端機，進入專案資料夾：
  `cd todo_sequelize`
- 安裝 npm：
  `npm install 10.16.3`
- 使用 npm 安裝 所有套件：
  `npm install express express-handlebars handlebars body-parser method-override passport passport-local passport-facebook express-session bcryptjs connect-flash dotenv mysql2 sequelize sequelize-cli`

- 種子清單：暫無

- 資料夾新增 .env 檔案，在檔案中設定環境變數，在開發階段使用。請至 facebook developer 申請 Client_ID、Client_SECRET，並存到 .env 檔案中。

  - `FACEBOOK_ID='xxxxxxxxxxxxx'`
  - `FACEBOOK_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'`
  - `FACEBOOK_CALLBACK='http://localhost:3000/auth/facebook/callback'`

- 使用 package.json 的 scripts 執行：
  `npm run dev`
- server 啟動成功：
  `server listen to http://localhost:3000`
- 連線 MySQL 成功：
  `Connection to databse has been established successfully.`
- 啟動瀏灠器：
  網址：http://localhost:3000

## 畫面

- 瀏灠所有 todo 記錄
  ![首頁..瀏灠所有 todo 記錄](https://github.com/s19003045/expense-tracker/blob/master/imagesForGithub/index_page.png)

- 新增 todo 記錄
  ![新增 todo 記錄](https://github.com/s19003045/expense-tracker/blob/master/imagesForGithub/newPage.png)

- 編輯 todo 記錄
  ![編輯 todo 記錄](https://github.com/s19003045/expense-tracker/blob/master/imagesForGithub/editPage.png)

- 註冊頁面
  ![註冊頁面](https://github.com/s19003045/expense-tracker/blob/master/imagesForGithub/register.png)

- 登入頁面
  ![登入頁面](https://github.com/s19003045/expense-tracker/blob/master/imagesForGithub/login.png)

## 開發人員

[Gary Wu](https://github.com/s19003045)
