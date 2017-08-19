var path = require('path');

module.exports = function(app){

  app.get('/', function(req, res){
    // res.sendFile(path.join(__dirname, '../views/index.handlebars'));
    res.render("index.handlebars");
  });

  // app.get('/api/new', function(req, res){
  //   res.sendFile
  // })
};
