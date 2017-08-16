var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json"}));
//
 // Routes
require('./app/routes/api-routes.js')(app);
// srequire('./app/routes/html-routes.js')(app);
//
// // static directory
// app.use(express.static('app/public'));

app.listen(PORT, function() {
  console.log('app listening on PORT ' + PORT);
});
