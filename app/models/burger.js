var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

module.exports = function(sequelize, DataTypes){
var Burger = sequelize.define('burger', {
  burger: DataTypes.STRING,
  devoured: DataTypes.BOOLEAN
  });
  return Burger;
};
