var db = require('../models/burger.js');
var path = require('path');

module.exports = function(app){

  // add a burger, api route defined below
  app.get('/api/new', function(req, res){
    db.Burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.post("/api/new", function(req, res) {
    console.log(req.body);

    db.Burger.create({
      burger: req.body.burger,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.delete("/api/new/:id", function(req, res){

  });

  app.put("/api/new", function(req, res){

  });
};
