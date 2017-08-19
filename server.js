var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/'));

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.text());
 app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


 // Routes
require('./app/routes/api-routes.js')(app);
require('./app/routes/html-routes.js')(app);
app.listen(PORT, function() {
  console.log('app listening on PORT ' + PORT);
});
