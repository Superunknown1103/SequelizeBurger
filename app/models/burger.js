var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Burger = sequelize.define('burger', {
  burger: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
});

Burger.sync();

module.exports = Burger;
