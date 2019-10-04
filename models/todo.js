'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function (models) {
    // Todo 與 User 為多對一的關係
    Todo.belongsTo(models.User)
  };
  return Todo;
};