var Burger = require('../models/burger.js');
var path = require('path');

module.exports = function(app){

  // add a burger, api route defined below
  app.post('/api/new'), function(req, res){
    console.log(req.body);
      Burger.create({
        burger: req.body.burger,
        devoured: req.body.devoured
      })
  };
};
