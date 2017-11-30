var express = require('express'),
  app = express(),
  port = process.env.PORT || 9000,
  mongoose = require('mongoose'),
  Task = require('./api/models/featurePropertiesModel'), //created model loading here
  Task1 = require('./api/models/propertiesModel'), //created model loading here
  Task2 = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');
var cors = require('cors');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PropertyDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/*app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});*/

var routes = require('./api/routes/propertiesRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('BhoomiBazaar RESTful API server started on: ' + port);