var path = require('path');

module.exports = function(app){

  app.get('/add', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.handlebars'));
  });

  // app.get('/api/new', function(req, res){
  //   res.sendFile
  // })
};
