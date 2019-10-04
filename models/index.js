'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


// 建立 Sequelize 的實例(用來連線資料庫)，參數依序為 database、username、password、config物件
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// 先義物件 db 的屬性：User及Todo
// 再將 models 資料夾中的每個檔案(不包括 index.js)中定義的 associate 方法放進 db 物件的各屬性中。
// 例如 db = {User:User,Todo:Todo}
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {

  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// 將全域的物件與類別，也放進 db 物件中。
// 將所有關於 MVC 的 M 都收斂在 db 裡
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 測試 connect to database 是否成功
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = db;


